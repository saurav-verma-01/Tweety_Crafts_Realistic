import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Filter, Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "../context/CartContext";
import { products, Product } from "../lib/products";
import { useToast } from "@/hooks/use-toast";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart } = useCart();
  const { toast } = useToast();

  const categories = [
    { id: "all", label: "All Products" },
    { id: "coloring", label: "Build A City" },
    { id: "activity", label: "Animals" },
    { id: "craft", label: "Vehicles" },
    { id: "stickers", label: "Dolls" },
    { id: "stickers", label: "Wearables" },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    toast({
      title: "Added to Cart! 🛒",
      description: `${product.title} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black font-sans mb-4">All Products</h1>
          <p className="text-xl text-muted-foreground">Discover amazing printables for creative kids!</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className="brutalist-border"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="brutalist-border bg-input pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group brutalist-border hover:shadow-brutalist-lg transition-all duration-200 hover:-translate-y-1 min-h-[420px] flex flex-col">
              <div className="flex-1 flex flex-col">
                <Link to={`/product/${product.id}`} className="flex-1 flex flex-col focus:outline-none focus:ring-2 focus:ring-primary rounded-t">
                  <CardContent className="p-0 flex-1 flex flex-col">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-56 object-cover"
                      />
                      {product.tag && (
                        <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 brutalist-border text-xs font-bold">
                          {product.tag}
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.title}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                      </div>
                      <span className="text-2xl font-black text-primary mb-4">${product.price}</span>
                    </div>
                  </CardContent>
                </Link>
                <div className="p-5 pt-0">
                  <Button className="w-full bg-[#3C91BA] group-hover:bg-secondary brutalist-border font-bold flex items-center justify-center gap-2 py-2 text-base" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleAddToCart(product); }}>
                    <ShoppingCart size={18} />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">No products found</h2>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
