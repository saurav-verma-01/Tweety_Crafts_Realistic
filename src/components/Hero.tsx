
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const Hero = () => {
  const [api, setApi] = useState<any>();

  const carouselImages = [
    { icon: "🎨", bg: "bg-yellow/20", title: "Creative Coloring" },
    { icon: "✂️", bg: "bg-pink/20", title: "Fun Crafts" },
    { icon: "📚", bg: "bg-blue/20", title: "Activity Books" },
    { icon: "🖍️", bg: "bg-secondary/20", title: "Art Supplies" },
    { icon: "🌈", bg: "bg-teal/20", title: "Rainbow Fun" },
    { icon: "⭐", bg: "bg-accent/20", title: "Premium Content" }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-yellow/10 to-pink/10 fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 slide-in">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-primary animate-pulse" size={24} />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">
                  Digital Creativity Hub
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black font-sans leading-tight">
                Creative Fun,{" "}
                <span className="text-primary hover-shake inline-block">Without</span>{" "}
                the Screen!
              </h1>
              
              <p className="text-xl text-muted-foreground font-medium max-w-lg">
                Printable coloring books, activity sheets, and craft kits that spark imagination and keep kids engaged offline.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg px-8 py-4 brutalist-border brutalist-shadow-colored hover-lift group"
                >
                  Shop Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                className="font-bold text-lg px-8 py-4 brutalist-border bg-secondary text-secondary-foreground hover:bg-secondary/90 hover-bounce"
              >
                <Heart className="mr-2" size={20} />
                Claim your Free GuMu
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t-2 border-border">
              <div className="text-center hover-lift">
                <div className="text-2xl font-black text-primary">500+</div>
                <div className="text-sm text-muted-foreground font-medium">Products</div>
              </div>
              <div className="text-center hover-lift">
                <div className="text-2xl font-black text-secondary">10k+</div>
                <div className="text-sm text-muted-foreground font-medium">Happy Kids</div>
              </div>
              <div className="text-center hover-lift">
                <div className="text-2xl font-black text-accent">98%</div>
                <div className="text-sm text-muted-foreground font-medium">Parent Approved</div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Carousel */}
          <div className="relative bounce-in">
            <div className="relative bg-gradient-to-br from-pink to-blue p-8 brutalist-border brutalist-shadow-lg hover-lift">
              <div className="bg-background p-6 brutalist-border">
                <Carousel
                  setApi={setApi}
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {carouselImages.map((item, index) => (
                      <CarouselItem key={index} className="basis-full">
                        <div className="grid grid-cols-2 gap-4 h-64">
                          <div className={`${item.bg} p-6 brutalist-border aspect-square flex flex-col items-center justify-center hover-bounce transition-all duration-300`}>
                            <div className="text-4xl mb-2">{item.icon}</div>
                            <div className="text-sm font-bold text-center">{item.title}</div>
                          </div>
                          <div className="grid grid-rows-2 gap-4">
                            <div className="bg-gradient-to-br from-yellow/20 to-teal/20 p-4 brutalist-border flex items-center justify-center hover-bounce">
                              <div className="text-2xl">🌟</div>
                            </div>
                            <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-4 brutalist-border flex items-center justify-center hover-bounce">
                              <div className="text-2xl">✨</div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="brutalist-border bg-background hover:bg-accent" />
                  <CarouselNext className="brutalist-border bg-background hover:bg-accent" />
                </Carousel>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 brutalist-border animate-bounce-brutal">
                <Sparkles size={20} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-yellow text-yellow-foreground p-3 brutalist-border animate-wiggle">
                <Heart size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
