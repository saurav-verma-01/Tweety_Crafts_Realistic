
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "10 Creative Ways to Use Coloring Pages for Learning",
      excerpt: "Discover how coloring can be more than just fun - it can be educational too! Learn creative techniques to incorporate learning into coloring time.",
      category: "Education",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "The Benefits of Screen-Free Activities for Kids",
      excerpt: "In our digital age, giving kids a break from screens is more important than ever. Explore the cognitive and creative benefits of offline activities.",
      category: "Parenting",
      author: "Mike Chen",
      date: "2024-01-12",
      readTime: "7 min read",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 3,
      title: "DIY Craft Ideas Using Our Printables",
      excerpt: "Turn your printed materials into amazing 3D crafts! Step-by-step guides to create memorable projects with your kids.",
      category: "Crafts",
      author: "Emma Wilson",
      date: "2024-01-10",
      readTime: "4 min read",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 4,
      title: "How to Create a Creative Corner at Home",
      excerpt: "Set up the perfect creative space for your children with these practical tips and affordable solutions.",
      category: "Home",
      author: "David Lee",
      date: "2024-01-08",
      readTime: "6 min read",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 5,
      title: "Seasonal Activities: Spring Crafts for Kids",
      excerpt: "Welcome spring with these delightful seasonal activities that celebrate nature and new beginnings.",
      category: "Seasonal",
      author: "Lisa Rodriguez",
      date: "2024-01-05",
      readTime: "5 min read",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 6,
      title: "The Psychology of Colors in Children's Art",
      excerpt: "Understanding what your child's color choices reveal about their emotions and development.",
      category: "Education",
      author: "Dr. Amy Foster",
      date: "2024-01-03",
      readTime: "8 min read",
      image: "/placeholder.svg",
      featured: false
    }
  ];

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "Education", label: "Education" },
    { id: "Parenting", label: "Parenting" },
    { id: "Crafts", label: "Crafts" },
    { id: "Home", label: "Home" },
    { id: "Seasonal", label: "Seasonal" }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post =>
    selectedCategory === "all" ? !post.featured : true
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black font-sans mb-4">Creative Parenting Blog</h1>
          <p className="text-xl text-muted-foreground">Tips, ideas, and inspiration for creative families</p>
        </div>

        {/* Featured post */}
        {featuredPost && selectedCategory === "all" && (
          <Card className="brutalist-border brutalist-shadow-lg mb-12">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 brutalist-border text-sm font-bold">
                      FEATURED
                    </span>
                    <span className="bg-accent/20 text-accent px-3 py-1 brutalist-border text-sm font-bold">
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-black font-sans mb-4">{featuredPost.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <Link to={`/blog/${featuredPost.id}`}>
                    <Button className="bg-primary hover:bg-primary/90 brutalist-border brutalist-shadow">
                      Read Article <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

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
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="brutalist-border bg-input pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          </div>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card key={post.id} className="brutalist-border hover:shadow-brutalist-lg transition-all duration-200 hover:-translate-y-1">
              <CardContent className="p-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-secondary/20 text-secondary px-2 py-1 brutalist-border text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">{post.readTime}</span>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="outline" className="brutalist-border">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">No articles found</h2>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
