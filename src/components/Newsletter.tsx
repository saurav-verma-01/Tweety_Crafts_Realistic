
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card brutalist-border-thick brutalist-shadow-xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground brutalist-border w-16 h-16 flex items-center justify-center font-bold text-2xl rotate-12">
            📧
          </div>
          <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground brutalist-border w-12 h-12 flex items-center justify-center font-bold text-xl -rotate-12">
            ✨
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-black font-sans mb-4">
              Get <span className="text-primary">FREE</span> Printables!
            </h2>
            <p className="text-xl text-muted-foreground font-medium mb-6">
              Subscribe to our newsletter and get exclusive freebies, new product alerts, and creativity tips!
            </p>
            
            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-primary/20 px-3 py-1 brutalist-border text-sm font-bold">
                🎁 FREE WELCOME PACK
              </div>
              <div className="bg-secondary/20 px-3 py-1 brutalist-border text-sm font-bold">
                📅 WEEKLY FREEBIES
              </div>
              <div className="bg-accent/20 px-3 py-1 brutalist-border text-sm font-bold">
                💡 CRAFT TIPS
              </div>
            </div>
          </div>
          
          {/* Newsletter form */}
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-1 brutalist-border bg-input text-foreground placeholder:text-muted-foreground font-medium px-4 py-3"
                />
                <Button 
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3 brutalist-border brutalist-shadow hover:shadow-brutalist-lg transition-all duration-200 hover:-translate-y-1 whitespace-nowrap"
                >
                  Subscribe Now!
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">
                No spam, unsubscribe anytime. We respect your privacy! 🔒
              </p>
            </form>
          </div>
          
          {/* Social proof */}
          <div className="mt-8 text-center">
            <div className="bg-muted brutalist-border p-4 inline-block">
              <p className="font-bold text-lg mb-2">Join 3,000+ Creative Parents!</p>
              <div className="flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-primary brutalist-border"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
