
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Award } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Creative Director",
      image: "👩‍🎨",
      bio: "Former elementary school teacher with 10+ years of experience in child development and creative education."
    },
    {
      name: "Mike Chen",
      role: "Lead Designer",
      image: "👨‍💻",
      bio: "Graphic designer specializing in children's educational materials and interactive learning resources."
    },
    {
      name: "Emma Davis",
      role: "Content Creator",
      image: "👩‍🏫",
      bio: "Child psychologist and educational content specialist focused on age-appropriate learning activities."
    }
  ];

  const values = [
    {
      icon: <Heart className="text-primary" size={32} />,
      title: "Child-Centered Design",
      description: "Every product is designed with children's developmental needs and interests in mind."
    },
    {
      icon: <Users className="text-secondary" size={32} />,
      title: "Family Connection",
      description: "We believe in creating moments that bring families together through creative activities."
    },
    {
      icon: <Target className="text-accent" size={32} />,
      title: "Quality First",
      description: "High-quality, print-ready materials that parents and educators can trust."
    },
    {
      icon: <Award className="text-yellow" size={32} />,
      title: "Educational Value",
      description: "Fun activities that secretly teach important skills and concepts."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black font-sans mb-6">
            About <span className="text-primary">Tweetycrafts</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate about creating screen-free moments of joy and creativity for families worldwide. 
            Our mission is to provide high-quality, printable activities that spark imagination and bring families together.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-black font-sans">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2020 by a team of educators and parents, Tweetycrafts was born from a simple observation: 
                children thrive when they engage in hands-on, creative activities away from screens.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What started as a small collection of coloring pages for our own children has grown into a comprehensive 
                library of educational and entertaining printables used by families and educators around the world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to serve over 10,000 families with premium digital products that make learning 
                fun and accessible for everyone.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 brutalist-border">
              <div className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="font-bold text-lg mb-2">10,000+ Happy Families</h3>
                <p className="text-muted-foreground">Creating memories since 2020</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-black font-sans text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="brutalist-border hover-lift text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-black font-sans text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="brutalist-border hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{member.image}</div>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary/10 p-12 brutalist-border">
          <h2 className="text-3xl font-black font-sans mb-4">Ready to Create?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of families who have discovered the joy of screen-free creativity with our premium printables.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 brutalist-border font-bold"
          >
            Explore Our Products
          </Button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
