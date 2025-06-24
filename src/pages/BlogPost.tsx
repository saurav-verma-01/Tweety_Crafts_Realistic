
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, Clock, Share2, Heart, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data - in real app this would come from API
  const post = {
    id: 1,
    title: "10 Creative Ways to Use Coloring Pages for Learning",
    content: `
      <p>Coloring pages aren't just for keeping kids busy – they're powerful learning tools that can enhance your child's educational journey in countless ways. Here are ten creative approaches to transform simple coloring activities into enriching learning experiences.</p>

      <h2>1. Letter and Number Recognition</h2>
      <p>Use alphabet and number coloring pages to reinforce recognition. As your child colors each letter or number, practice saying it aloud, making the sound, and thinking of words that start with that letter.</p>

      <h2>2. Storytelling and Narrative Building</h2>
      <p>Encourage your child to create stories about the characters or scenes they're coloring. This develops language skills, creativity, and narrative thinking.</p>

      <h2>3. Pattern Recognition and Math Concepts</h2>
      <p>Look for patterns in the designs and count elements. "How many flowers are in this garden?" or "Can you color every third stripe blue?" integrates math naturally.</p>

      <h2>4. Fine Motor Skill Development</h2>
      <p>Coloring within lines, controlling pressure, and using different strokes all contribute to the fine motor skills needed for writing.</p>

      <h2>5. Color Theory and Science</h2>
      <p>Experiment with color mixing, discuss primary and secondary colors, and explore how colors make us feel. This introduces basic art and science concepts.</p>

      <h2>6. Cultural Exploration</h2>
      <p>Use coloring pages featuring different cultures, landmarks, or traditions to spark conversations about the world and diversity.</p>

      <h2>7. Mindfulness and Emotional Regulation</h2>
      <p>Coloring can be meditative. Teach children to use coloring as a calming activity when they feel overwhelmed or need to focus.</p>

      <h2>8. Following Instructions</h2>
      <p>Create simple instructions for coloring projects: "Color the sun yellow, the grass green, and add blue polka dots to the dress."</p>

      <h2>9. Memory Games</h2>
      <p>Show a colored example briefly, then ask your child to recreate it from memory. This strengthens visual memory and attention to detail.</p>

      <h2>10. Creative Expression and Art Appreciation</h2>
      <p>Encourage children to add their own elements to coloring pages or create their own designs. This fosters creativity and artistic confidence.</p>

      <p>Remember, the goal isn't perfection – it's about creating positive learning experiences that your child enjoys. When learning is fun, children are more engaged and retain information better.</p>
    `,
    category: "Education",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/placeholder.svg",
    tags: ["Education", "Learning", "Coloring", "Kids", "Development"]
  };

  const relatedPosts = [
    {
      id: 2,
      title: "The Benefits of Screen-Free Activities for Kids",
      image: "/placeholder.svg",
      date: "2024-01-12"
    },
    {
      id: 3,
      title: "DIY Craft Ideas Using Our Printables",
      image: "/placeholder.svg",
      date: "2024-01-10"
    },
    {
      id: 4,
      title: "How to Create a Creative Corner at Home",
      image: "/placeholder.svg",
      date: "2024-01-08"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Back button */}
        <Link to="/blog" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground">
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </Link>

        {/* Article header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-primary/20 text-primary px-3 py-1 brutalist-border text-sm font-bold">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl font-black font-sans mb-6 leading-tight">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Social actions */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="sm" className="brutalist-border">
              <Heart size={16} className="mr-2" />
              Like
            </Button>
            <Button variant="outline" size="sm" className="brutalist-border">
              <Share2 size={16} className="mr-2" />
              Share
            </Button>
          </div>
        </header>

        {/* Featured image */}
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover brutalist-border"
          />
        </div>

        {/* Article content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div 
            className="space-y-6 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Tags */}
        <div className="mb-12">
          <h3 className="font-bold text-lg mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-muted px-3 py-1 brutalist-border text-sm font-medium hover:bg-primary/20 cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related posts */}
        <section>
          <h2 className="text-3xl font-black font-sans mb-8">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="brutalist-border hover:shadow-brutalist-lg transition-all duration-200 hover:-translate-y-1">
                <CardContent className="p-0">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2 line-clamp-2">{relatedPost.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {new Date(relatedPost.date).toLocaleDateString()}
                      </span>
                      <Link to={`/blog/${relatedPost.id}`}>
                        <Button size="sm" variant="outline" className="brutalist-border">
                          Read
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

export default BlogPost;
