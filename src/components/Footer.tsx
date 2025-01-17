import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-accent text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">DishJourney</h3>
            <p className="text-gray-300">Discover amazing recipes and create delicious meals.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="hover:text-primary transition-colors duration-300 transform hover:translate-x-2 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/search" 
                  className="hover:text-primary transition-colors duration-300 transform hover:translate-x-2 inline-block"
                >
                  Search
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="hover:text-primary transition-colors duration-300 transform hover:translate-x-2 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="hover:text-primary transition-colors duration-300 transform hover:translate-x-2 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/category/breakfast" 
                  className="hover:text-primary transition-colors duration-300 transform hover:translate-x-2 inline-block"
                >
                  Breakfast
                </Link>
              </li>
              <li>
                <Link 
                  to="/category/lunch" 
                  className="hover:text-primary transition-colors duration-300 transform hover:translate-x-2 inline-block"
                >
                  Lunch
                </Link>
              </li>
              <li>
                <Link 
                  to="/category/dinner" 
                  className="hover:text-primary transition-colors duration-300 transform hover:translate-x-2 inline-block"
                >
                  Dinner
                </Link>
              </li>
              <li>
                <Link 
                  to="/category/desserts" 
                  className="hover:text-primary transition-colors duration-300 transform hover:translate-x-2 inline-block"
                >
                  Desserts
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors duration-300 transform hover:scale-110 inline-block"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors duration-300 transform hover:scale-110 inline-block"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors duration-300 transform hover:scale-110 inline-block"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} DishJourney. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};