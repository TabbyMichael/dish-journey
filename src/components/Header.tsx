import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, Search, Book, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-accent text-white py-4 px-6 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Book className="h-6 w-6" />
          <span className="text-xl font-bold">DishJourney</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link to="/search" className="hover:text-primary transition-colors flex items-center gap-2">
            <Search className="h-4 w-4" />
            Search
          </Link>
          <Link to="/auth">
            <Button variant="secondary" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Sign In
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/auth">
            <User className="h-6 w-6" />
          </Link>
        </div>
      </nav>
    </header>
  );
};