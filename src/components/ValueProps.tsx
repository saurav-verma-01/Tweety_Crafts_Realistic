
const valueProps = [
  {
    icon: "📱",
    title: "Screen-Free Play",
    description: "Give kids a break from devices with hands-on creative activities that spark imagination.",
    color: "bg-primary"
  },
  {
    icon: "🎨",
    title: "Develops Creativity",
    description: "Foster artistic skills and creative thinking through engaging printable activities.",
    color: "bg-secondary"
  },
  {
    icon: "⚡",
    title: "Instant Downloads",
    description: "Get your activities immediately after purchase. No waiting, no shipping fees!",
    color: "bg-accent"
  },
  {
    icon: "🏠",
    title: "Perfect for Home",
    description: "Keep kids entertained during quiet time, rainy days, or family activities.",
    color: "bg-primary"
  },
  {
    icon: "👥",
    title: "All Skill Levels",
    description: "Activities designed for different ages and abilities, from toddlers to tweens.",
    color: "bg-secondary"
  },
  {
    icon: "💰",
    title: "Budget Friendly",
    description: "Premium quality activities at affordable prices. Much cheaper than physical books!",
    color: "bg-accent"
  }
];

const ValueProps = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-sans mb-4">
            Why Choose <span className="text-primary">Tweetycrafts</span>?
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            We believe in the power of analog creativity in a digital world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div 
              key={index}
              className="group hover:-translate-y-2 transition-all duration-200"
            >
              <div className="bg-card brutalist-border brutalist-shadow hover:shadow-brutalist-lg transition-all duration-200">
                {/* Icon Header */}
                <div className={`${prop.color} text-white p-6 relative overflow-hidden`}>
                  <div className="text-4xl mb-2">
                    {prop.icon}
                  </div>
                  <h3 className="font-black text-xl leading-tight">
                    {prop.title}
                  </h3>
                  
                  {/* Decorative corner */}
                  <div className="absolute -top-2 -right-2 bg-background brutalist-border w-8 h-8 rotate-45"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-muted brutalist-border-thick brutalist-shadow-xl p-8 inline-block relative">
            <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground brutalist-border w-12 h-12 flex items-center justify-center font-bold text-xl rotate-12">
              !
            </div>
            
            <h3 className="font-black text-2xl mb-4">
              Ready to Start Creating?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Join thousands of families who choose screen-free creativity
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 brutalist-border brutalist-shadow hover:shadow-brutalist-lg transition-all duration-200 hover:-translate-y-1">
                Browse Products
              </button>
              <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-6 py-3 brutalist-border brutalist-shadow hover:shadow-brutalist-lg transition-all duration-200 hover:-translate-y-1">
                View Free Samples
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
