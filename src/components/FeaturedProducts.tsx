import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Download, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import gumu from '../../public/gumu-1.png'
import { useCart } from "../context/CartContext";

const FeaturedProducts = () => {
  const { toast } = useToast();
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      title: "Safari Adventure Coloring Book",
      price: "$4.99",
      rating: 4.8,
      reviews: 124,
      image: "🦁",
      bgColor: "bg-yellow/20",
      accent: "yellow"
    },
    {
      id: 2,
      title: "Space Explorer Activity Pack",
      price: "$7.99",
      rating: 4.9,
      reviews: 89,
      image: "🚀",
      bgColor: "bg-blue/20",
      accent: "blue"
    },
    {
      id: 3,
      title: "Princess Castle Craft Kit",
      price: "$9.99",
      rating: 4.7,
      reviews: 156,
      image: "👑",
      bgColor: "bg-pink/20",
      accent: "pink"
    },
    {
      id: 4,
      title: "Dinosaur Discovery Sheets",
      price: "$5.99",
      rating: 4.8,
      reviews: 203,
      image: "🦕",
      bgColor: "bg-secondary/20",
      accent: "secondary"
    },
    {
      id: 5,
      title: "Ocean Friends Coloring",
      price: "$3.99",
      rating: 4.9,
      reviews: 98,
      image: "🐟",
      bgColor: "bg-teal/20",
      accent: "teal"
    },
    {
      id: 6,
      title: "Superhero Training Pack",
      price: "$8.99",
      rating: 4.8,
      reviews: 167,
      image: "⚡",
      bgColor: "bg-accent/20",
      accent: "accent"
    }
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: Number(product.price.replace('$','')),
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
    <section className="py-20 lg:pt-2 px-4 bg-muted/20 slide-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 bounce-in flex flex-col items-center">
          <div className="cursor-pointer overflow-visible">
            <img src={gumu} alt="tweetycrafts illustration" className="animate-bounce transition-all duration-1500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-sans mb-4">
            Featured <span className="text-primary">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular creative downloads that kids absolutely love!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className={`brutalist-border hover-lift group cursor-pointer transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className={`${product.bgColor} h-48 flex items-center justify-center brutalist-border-thick border-b-0 relative overflow-hidden`}>
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>
                  
                  {/* Quick actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="outline" className="bg-background brutalist-border hover-bounce">
                      <Heart size={16} />
                    </Button>
                    <Button size="icon" variant="outline" className="bg-background brutalist-border hover-bounce">
                      <Eye size={16} />
                    </Button>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 brutalist-border text-sm font-bold">
                    POPULAR
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={i < Math.floor(product.rating) ? "fill-yellow text-yellow" : "text-muted-foreground"} 
                          />
                        ))}
                      </div>
                      <span className="text-muted-foreground">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-black text-primary">
                      {product.price}
                    </div>
                    
                    <div className="flex gap-2">
                      <Link to={`/product/${product.id}`}>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="brutalist-border hover-lift"
                        >
                          View
                        </Button>
                      </Link>
                      <Button 
                        size="sm"
                        className="bg-primary hover:bg-primary/90 brutalist-border hover-bounce font-bold"
                        onClick={() => handleAddToCart(product)}
                      >
                        <Download size={16} className="mr-1" />
                        Buy
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/products">
            <Button 
              size="lg"
              variant="outline"
              className="font-black text-lg px-8 py-4 brutalist-border hover-lift bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
