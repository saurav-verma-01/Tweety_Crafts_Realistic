import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../public/logo_1.png";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header 
    className="bg-[#3C91BA] text-black border-b-[3px] border-black sticky top-0 z-50 shadow-[0_3px_0_#000]"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4 pb-0">
          {/* Logo */}
          {/* <Link to="/" className="text-2xl font-black font-sans hover-bounce">
            Tweety<span className="text-yellow">crafts</span>
          </Link> */}
          <Link to="/">
            <img src={logo} alt="Tweetycrafts Logo"  className="w-32 h-auto hover-bounce p-1 animate-wiggle"  />
          </Link>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full ">
              <Input
                type="text"
                placeholder="Search for products..."
                // className="brutalist-border bg-input pr-10 text-foreground hover-lift"
                className="w-full px-4 py-2 rounded-sm bg-white text-black font-bold border-[3px] border-black shadow-[3px_3px_0_black] focus:outline-none focus:ring-2 focus:ring-black transition-all hover:shadow-[6px_6px_0_black] text-base h-12"
              />
              <Search 
              // className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-black"
              size={20} />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <Link to="/cart" className="relative">
              <Button variant="outline" size="icon" 
              className="brutalist-border bg-background text-foreground hover-lift hover:bg-yellow hover:text-yellow-foreground"
              // className="bg-white border-[3px] border-black shadow-[3px_3px_0_black] text-black hover:bg-yellow-300 hover:shadow-[0_0_0_black] transition-all"
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink text-pink-foreground text-xs font-bold w-5 h-5 flex items-center justify-center brutalist-border animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* User menu */}
            <Link to="/login">
              <Button variant="outline" size="icon" className="brutalist-border bg-background text-foreground hover-lift hover:bg-blue hover:text-blue-foreground">
                <User size={20} />
              </Button>
            </Link>

            {/* Mobile menu toggle */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden brutalist-border bg-background text-foreground hover-shake"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block border-t-2 border-border py-4`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8">

          <li>
              <Link to="/products" 
              // className="font-bold hover:text-yellow transition-colors hover-bounce inline-block hover:bg-[#7EA2FF]"
              className="font-black px-2 py-1 bg-card border-2 border-black hover:text-white hover:shadow-[2px_2px_0_black] transition-all inline-block hover:text-blue-foreground hover:bg-[#7EA2FF]"
              >
                Trending Combos
              </Link>
            </li>

            <li>
              <Link to="/products" 
              // className="font-bold hover:text-yellow transition-colors hover-bounce inline-block"
              className="font-black px-2 py-1 border-2 border-black hover:bg-primary hover:text-white bg-card hover:shadow-[2px_2px_0_black] transition-all inline-block"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link to="/blog" 
              // className="font-bold hover:text-yellow transition-colors hover-bounce inline-block"
              className="font-black px-2 py-1 border-2 border-black hover:text-white hover:shadow-[2px_2px_0_black] transition-all bg-card inline-block hover:bg-yellow hover:text-yellow-foreground"
              >
                Blog  
              </Link>
            </li>
            <li>
              <Link to="/about" 
              // className="font-bold hover:text-yellow transition-colors hover-bounce inline-block "
              className="font-black px-2 py-1 border-2 border-black hover:text-white hover:shadow-[2px_2px_0_black] transition-all bg-card inline-block hover:bg-blue hover:text-blue-foreground"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link to="/help" 
              // className="font-bold hover:text-yellow transition-colors hover-bounce inline-block"
              className="font-black px-2 py-1 border-2 bg-card border-black hover:text-white hover:shadow-[2px_2px_0_black] transition-all inline-block hover:text-blue-foreground hover:bg-[#C1DC63]"
              >
                Contact Us
              </Link>
            </li>
           
          </ul>
        </nav>

        {/* Mobile search */}
        <div className="md:hidden py-4 border-t-2 border-border">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for products..."
              className="brutalist-border bg-input pr-10 text-foreground hover-lift"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
