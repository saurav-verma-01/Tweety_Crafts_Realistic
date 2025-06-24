import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart, Download, Heart, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "../context/CartContext";
import { products, Product } from "../lib/products";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === Number(id));
  const relatedProducts = products.filter(p => p.id !== Number(id)).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-black font-sans mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">Sorry, the product you are looking for does not exist.</p>
          <Link to="/products">
            <Button className="bg-primary hover:bg-primary/90 brutalist-border brutalist-shadow">
              Back to Products
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity,
      image: product.image,
    });
    toast({
      title: "Added to Cart! 🛒",
      description: `${product.title} has been added to your cart.`,
      duration: 3000,
    });
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity,
      image: product.image,
    });
    toast({
      title: "Added to Cart! 🛒",
      description: `${product.title} has been added to your cart.`,
      duration: 2000,
    });
    setTimeout(() => {
      navigate('/cart');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/products" className="text-muted-foreground hover:text-foreground">Products</Link>
            <span>/</span>
            <span className="font-bold">{product.title}</span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product images */}
          <div>
            <div className="mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover brutalist-border"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`brutalist-border ${selectedImage === index ? 'ring-2 ring-primary' : ''}`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product details */}
          <div>
            <div className="mb-4">
              <span className="bg-primary/20 text-primary px-3 py-1 brutalist-border text-sm font-bold">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-4xl font-black font-sans mb-4">{product.title}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="font-bold">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-black text-primary">${product.price}</span>
                <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                <span className="bg-destructive text-destructive-foreground px-2 py-1 brutalist-border text-sm font-bold">
                  SAVE {Math.round((1 - product.price / product.originalPrice) * 100)}%
                </span>
              </div>
            </div>

            <p className="text-lg mb-6 leading-relaxed">{product.description}</p>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3">What's Included:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-muted p-3 brutalist-border text-center">
                <div className="font-bold">{product.pages}</div>
                <div className="text-sm text-muted-foreground">Pages</div>
              </div>
              <div className="bg-muted p-3 brutalist-border text-center">
                <div className="font-bold">{product.format}</div>
                <div className="text-sm text-muted-foreground">Format</div>
              </div>
              <div className="bg-muted p-3 brutalist-border text-center">
                <div className="font-bold">{product.fileSize}</div>
                <div className="text-sm text-muted-foreground">File Size</div>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90 brutalist-border brutalist-shadow font-bold py-3"
                onClick={handleBuyNow}
              >
                <ShoppingCart className="mr-2" size={20} />
                Buy Now
              </Button>
              <Button 
                variant="outline" 
                className="brutalist-border hover:bg-secondary"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="brutalist-border">
                <Heart size={20} />
              </Button>
              <Button variant="outline" size="icon" className="brutalist-border">
                <Share2 size={20} />
              </Button>
            </div>

            <div className="bg-secondary/20 p-4 brutalist-border">
              <div className="flex items-center gap-2 mb-2">
                <Download size={20} className="text-secondary" />
                <span className="font-bold">Instant Download</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Get your files immediately after purchase. No waiting, no shipping fees!
              </p>
            </div>
          </div>
        </div>

        {/* Related products */}
        <section>
          <h2 className="text-3xl font-black font-sans mb-8">You Might Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="brutalist-border hover:shadow-brutalist-lg transition-all duration-200 hover:-translate-y-1">
                <CardContent className="p-0">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">{relatedProduct.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-black text-primary">${relatedProduct.price}</span>
                      <Link to={`/product/${relatedProduct.id}`}>
                        <Button size="sm" className="bg-secondary hover:bg-secondary/80 brutalist-border">
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
