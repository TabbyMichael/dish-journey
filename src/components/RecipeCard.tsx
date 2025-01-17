import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  cookTime: string;
  difficulty: string;
}

export const RecipeCard = ({ id, title, image, cookTime, difficulty }: RecipeCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/recipe/${id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fade-in">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <button
            onClick={toggleFavorite}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          >
            <Heart
              size={20}
              className={`${
                isFavorite ? "fill-primary stroke-primary" : "stroke-gray-600"
              }`}
            />
          </button>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-charcoal">{title}</h3>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{cookTime}</span>
            <span>{difficulty}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};