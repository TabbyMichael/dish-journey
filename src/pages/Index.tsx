import { SearchBar } from "@/components/SearchBar";
import { FeaturedRecipes } from "@/components/FeaturedRecipes";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleSearch = (query: string) => {
    // In a real app, this would call an API
    toast({
      title: "Search initiated",
      description: `Searching for: ${query}`,
    });
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-accent to-accent/90 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
            Find Your Perfect Recipe
          </h1>
          <p className="text-xl text-center mb-12 text-gray-100 animate-fade-in">
            Discover thousands of recipes for every taste and occasion
          </p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* Featured Recipes */}
      <div className="container mx-auto">
        <FeaturedRecipes />
      </div>

      {/* Quick Links */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-secondary/10">
              <h3 className="text-xl font-semibold mb-2 text-secondary">Quick & Easy</h3>
              <p className="text-gray-600">Ready in 30 minutes or less</p>
            </div>
            <div className="p-6 rounded-lg bg-primary/10">
              <h3 className="text-xl font-semibold mb-2 text-primary">Healthy Choice</h3>
              <p className="text-gray-600">Nutritious and delicious recipes</p>
            </div>
            <div className="p-6 rounded-lg bg-accent/10">
              <h3 className="text-xl font-semibold mb-2 text-accent">Popular Now</h3>
              <p className="text-gray-600">Trending recipes this week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;