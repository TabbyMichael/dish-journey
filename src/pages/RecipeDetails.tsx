import { useParams } from "react-router-dom";
import { FEATURED_RECIPES } from "@/data/recipes";
import { Clock, ChefHat, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const RecipeDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);

  const recipe = FEATURED_RECIPES.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Recipe not found</h1>
      </div>
    );
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: isFavorite ? "Recipe removed from your favorites" : "Recipe added to your favorites",
    });
  };

  return (
    <div className="min-h-screen bg-cream py-8 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 bg-white/80 hover:bg-white"
            onClick={toggleFavorite}
          >
            <Heart
              className={`${
                isFavorite ? "fill-primary stroke-primary" : "stroke-gray-600"
              }`}
            />
          </Button>
        </div>

        <div className="p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            {recipe.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={20} />
              <span>{recipe.cookTime}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <ChefHat size={20} />
              <span>{recipe.difficulty}</span>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-charcoal mb-4">Ingredients</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {recipe.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                )) || (
                  <p className="text-gray-500 italic">
                    Ingredients will be available soon
                  </p>
                )}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-charcoal mb-4">Instructions</h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-600">
                {recipe.instructions?.map((step, index) => (
                  <li key={index} className="leading-relaxed">
                    {step}
                  </li>
                )) || (
                  <p className="text-gray-500 italic">
                    Instructions will be available soon
                  </p>
                )}
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-charcoal mb-4">
                Nutritional Information
              </h2>
              {recipe.nutritionalInfo ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Object.entries(recipe.nutritionalInfo).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-cream p-4 rounded-lg text-center"
                    >
                      <div className="text-lg font-semibold text-charcoal">
                        {value}
                      </div>
                      <div className="text-sm text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">
                  Nutritional information will be available soon
                </p>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;