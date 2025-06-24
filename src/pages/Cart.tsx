import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gumu from '../../public/gumu-2.png'
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-black font-sans mb-4 text-center">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-8 flex items-center justify-center gap-8">
            <div>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Start shopping to add items to your cart!</p>
            <Link to="/products">
              <Button className="bg-primary hover:bg-primary/90 brutalist-border brutalist-shadow">
                Browse Products
              </Button>
            </Link>
            </div>

            <div className="max-w-sm">
              <img src={gumu} alt="tweetycratfs gumu illustration"  />
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="brutalist-border">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover brutalist-border"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-2xl font-black text-primary mb-4">${item.price}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="brutalist-border"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus size={16} />
                            </Button>
                            <span className="font-bold px-4">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="brutalist-border"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus size={16} />
                            </Button>
                          </div>
                          
                          <Button
                            variant="destructive"
                            size="icon"
                            className="brutalist-border"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Order summary */}
            <div>
              <Card className="brutalist-border brutalist-shadow">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-black mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-bold">${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes</span>
                      <span className="font-bold">$0.00</span>
                    </div>
                    <hr className="border-2 border-border" />
                    <div className="flex justify-between text-xl font-black">
                      <span>Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Link to="/checkout">
                    <Button className="w-full bg-primary hover:bg-primary/90 brutalist-border brutalist-shadow font-bold py-3">
                      Proceed to Checkout
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
