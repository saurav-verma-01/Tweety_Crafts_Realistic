
const testimonials = [
  {
    id: 1,
    quote: "My kids absolutely love these printables! It's amazing how quiet they get when they're coloring. Finally found something that keeps them off their tablets!",
    author: "Sarah M.",
    location: "Portland, OR",
    rating: 5,
    product: "Ocean Adventures Pack"
  },
  {
    id: 2,
    quote: "As a teacher, these are PERFECT for quiet time activities. The quality is amazing and my students stay engaged for hours!",
    author: "Mrs. Rodriguez",
    location: "Austin, TX", 
    rating: 5,
    product: "Space Explorer Bundle"
  },
  {
    id: 3,
    quote: "Best investment for rainy days! Downloaded instantly and printed right away. My daughter has been crafting all afternoon!",
    author: "Mike D.",
    location: "Seattle, WA",
    rating: 5,
    product: "Fairy Tale Craft Kit"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-sans mb-4">
            Happy <span className="text-primary">Families</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Real stories from real parents and educators
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="relative group hover:-translate-y-2 transition-all duration-200"
            >
              {/* Speech bubble */}
              <div className="bg-card brutalist-border brutalist-shadow hover:shadow-brutalist-lg transition-all duration-200 p-6 relative">
                {/* Quote marks */}
                <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground brutalist-border w-12 h-12 flex items-center justify-center font-black text-2xl">
                  "
                </div>
                
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-foreground font-medium mb-6 leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                
                {/* Author info */}
                <div className="border-t-2 border-foreground pt-4">
                  <div className="font-bold text-lg">{testimonial.author}</div>
                  <div className="text-muted-foreground text-sm mb-2">{testimonial.location}</div>
                  <div className="bg-accent/20 text-accent-foreground px-2 py-1 brutalist-border text-xs font-bold inline-block">
                    VERIFIED PURCHASE: {testimonial.product}
                  </div>
                </div>
                
                {/* Speech bubble tail */}
                <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-card">
                  <div className="absolute -top-6 -left-5 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-foreground"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Social proof */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-primary text-primary-foreground px-4 py-2 brutalist-border font-bold">
              ⭐ 4.9/5 Rating
            </div>
            <div className="bg-secondary text-secondary-foreground px-4 py-2 brutalist-border font-bold">
              📦 5,000+ Downloads
            </div>
            <div className="bg-accent text-accent-foreground px-4 py-2 brutalist-border font-bold">
              👨‍👩‍👧‍👦 2,000+ Happy Families
            </div>
          </div>
          
          <p className="text-muted-foreground font-medium">
            Join our community of creative families today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
