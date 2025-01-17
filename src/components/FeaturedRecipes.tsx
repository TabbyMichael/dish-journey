import { RecipeCard } from "./RecipeCard";

const FEATURED_RECIPES = [
  {
    id: "1",
    title: "Creamy Mushroom Pasta",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    cookTime: "30 mins",
    difficulty: "Easy",
  },
  {
    id: "2",
    title: "Mediterranean Salad",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    cookTime: "15 mins",
    difficulty: "Easy",
  },
  {
    id: "3",
    title: "Grilled Salmon",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    cookTime: "25 mins",
    difficulty: "Medium",
  },
];

export const FeaturedRecipes = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-semibold text-center mb-8 text-charcoal">Featured Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {FEATURED_RECIPES.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};