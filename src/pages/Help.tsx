
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download, Printer, CreditCard, RefreshCw } from "lucide-react";

const Help = () => {
  const faqs = [
    {
      question: "How do I download my purchases?",
      answer: "After completing your purchase, you'll receive an email with download links. You can also access your downloads from your account dashboard."
    },
    {
      question: "What file formats do you provide?",
      answer: "All our products are provided as high-resolution PDF files, optimized for home printing on standard paper sizes."
    },
    {
      question: "Can I print these multiple times?",
      answer: "Yes! Once you purchase a product, you can print it as many times as you need for personal use."
    },
    {
      question: "What if I have trouble downloading?",
      answer: "If you experience any download issues, please contact our support team. We're here to help within 24 hours."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee if you're not completely satisfied with your purchase."
    },
    {
      question: "Can I use these for commercial purposes?",
      answer: "Our standard license is for personal use only. Commercial licenses are available for select products - please contact us for details."
    }
  ];

  const categories = [
    {
      icon: <Download className="text-primary" size={24} />,
      title: "Downloads & Access",
      description: "Help with downloading and accessing your purchases",
      count: "12 articles"
    },
    {
      icon: <Printer className="text-secondary" size={24} />,
      title: "Printing Tips",
      description: "Best practices for printing your materials",
      count: "8 articles"
    },
    {
      icon: <CreditCard className="text-accent" size={24} />,
      title: "Billing & Payments",
      description: "Payment methods, billing issues, and refunds",
      count: "6 articles"
    },
    {
      icon: <RefreshCw className="text-yellow" size={24} />,
      title: "Technical Issues",
      description: "Troubleshooting common technical problems",
      count: "10 articles"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black font-sans mb-6">
            Help <span className="text-primary">Center</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find answers to common questions and get the help you need
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Input
              type="text"
              placeholder="Search for help..."
              className="brutalist-border pr-12"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          </div>
        </div>

        {/* Help Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-black font-sans text-center mb-12">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="brutalist-border hover-lift cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{category.icon}</div>
                  <h3 className="font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                  <span className="text-xs text-primary font-medium">{category.count}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-black font-sans text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="brutalist-border">
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="font-bold cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-muted-foreground mt-4 leading-relaxed">{faq.answer}</p>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-secondary/10 p-12 brutalist-border">
          <h2 className="text-3xl font-black font-sans mb-4">Still Need Help?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our friendly support team is here to help you with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 brutalist-border font-bold"
            >
              Contact Support
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="brutalist-border"
            >
              Live Chat
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            📧 support@tweetycrafts.com • Response time: Within 24 hours
          </p>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Help;
