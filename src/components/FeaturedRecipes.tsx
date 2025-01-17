import { useState } from "react";
import { RecipeCard } from "./RecipeCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const FEATURED_RECIPES = [
  {
    id: "1",
    title: "Creamy Mushroom Pasta",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a",
    cookTime: "30 mins",
    difficulty: "Easy",
  },
  {
    id: "2",
    title: "Mediterranean Salad",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    cookTime: "15 mins",
    difficulty: "Easy",
  },
  {
    id: "3",
    title: "Grilled Salmon",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
    cookTime: "25 mins",
    difficulty: "Medium",
  },
  {
    id: "4",
    title: "Chicken Tikka Masala",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
    cookTime: "45 mins",
    difficulty: "Medium",
  },
  {
    id: "5",
    title: "Vegetable Stir Fry",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    cookTime: "20 mins",
    difficulty: "Easy",
  },
  {
    id: "6",
    title: "Classic Beef Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    cookTime: "25 mins",
    difficulty: "Easy",
  },
  {
    id: "7",
    title: "Sushi Roll Platter",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    cookTime: "60 mins",
    difficulty: "Hard",
  },
  {
    id: "8",
    title: "Vegetarian Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    cookTime: "35 mins",
    difficulty: "Medium",
  },
  {
    id: "9",
    title: "Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51",
    cookTime: "25 mins",
    difficulty: "Medium",
  },
  {
    id: "10",
    title: "Greek Moussaka",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    cookTime: "90 mins",
    difficulty: "Hard",
  },
  {
    id: "11",
    title: "Pad Thai",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e",
    cookTime: "30 mins",
    difficulty: "Medium",
  },
  {
    id: "12",
    title: "Caesar Salad",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9",
    cookTime: "15 mins",
    difficulty: "Easy",
  },
  {
    id: "13",
    title: "Beef Wellington",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    cookTime: "120 mins",
    difficulty: "Hard",
  },
  {
    id: "14",
    title: "Miso Ramen",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
    cookTime: "45 mins",
    difficulty: "Medium",
  },
  {
    id: "15",
    title: "Quinoa Buddha Bowl",
    image: "https://images.unsplash.com/photo-1540914124281-342587941389",
    cookTime: "25 mins",
    difficulty: "Easy",
  },
  {
    id: "16",
    title: "Fish Tacos",
    image: "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd",
    cookTime: "30 mins",
    difficulty: "Medium",
  },
  {
    id: "17",
    title: "Beef Stroganoff",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7",
    cookTime: "40 mins",
    difficulty: "Medium",
  },
  {
    id: "18",
    title: "Vegetable Lasagna",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3",
    cookTime: "75 mins",
    difficulty: "Medium",
  },
  {
    id: "19",
    title: "Shrimp Scampi",
    image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa",
    cookTime: "25 mins",
    difficulty: "Medium",
  },
  {
    id: "20",
    title: "Chicken Fajitas",
    image: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615",
    cookTime: "30 mins",
    difficulty: "Easy",
  },
  {
    id: "21",
    title: "Eggplant Parmesan",
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7",
    cookTime: "60 mins",
    difficulty: "Medium",
  },
  {
    id: "22",
    title: "Tom Yum Soup",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853",
    cookTime: "35 mins",
    difficulty: "Medium",
  },
  {
    id: "23",
    title: "Apple Pie",
    image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e9e5",
    cookTime: "75 mins",
    difficulty: "Medium",
  },
  {
    id: "24",
    title: "Beef Tacos",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
    cookTime: "30 mins",
    difficulty: "Easy",
  },
  {
    id: "25",
    title: "Mushroom Risotto",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371",
    cookTime: "45 mins",
    difficulty: "Medium",
  },
  {
    id: "26",
    title: "Korean BBQ",
    image: "https://images.unsplash.com/photo-1632558610168-8377309e34c7",
    cookTime: "40 mins",
    difficulty: "Medium",
  },
  {
    id: "27",
    title: "Tiramisu",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
    cookTime: "30 mins",
    difficulty: "Medium",
  },
  {
    id: "28",
    title: "Butter Chicken",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    cookTime: "50 mins",
    difficulty: "Medium",
  },
  {
    id: "29",
    title: "French Onion Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
    cookTime: "60 mins",
    difficulty: "Medium",
  },
  {
    id: "30",
    title: "Pesto Pasta",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    cookTime: "20 mins",
    difficulty: "Easy",
  },
  {
    id: "31",
    title: "BBQ Ribs",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    cookTime: "180 mins",
    difficulty: "Hard",
  },
  {
    id: "32",
    title: "Seafood Paella",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a",
    cookTime: "60 mins",
    difficulty: "Hard",
  },
  {
    id: "33",
    title: "Chicken Noodle Soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
    cookTime: "45 mins",
    difficulty: "Easy",
  },
  {
    id: "34",
    title: "Beef Stir Fry",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    cookTime: "25 mins",
    difficulty: "Easy",
  },
  {
    id: "35",
    title: "Lemon Cheesecake",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    cookTime: "70 mins",
    difficulty: "Medium",
  },
  {
    id: "36",
    title: "Vegetable Curry",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
    cookTime: "40 mins",
    difficulty: "Medium",
  },
];

export const FeaturedRecipes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 12;
  const totalPages = Math.ceil(FEATURED_RECIPES.length / recipesPerPage);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = FEATURED_RECIPES.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-12">
      <h2 className="text-2xl font-semibold text-center mb-8 text-charcoal">Featured Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-8">
        {currentRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => handlePageChange(page)}
                isActive={currentPage === page}
                className="cursor-pointer"
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};