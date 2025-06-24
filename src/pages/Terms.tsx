
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using Tweetycrafts, you accept and agree to be bound by the terms and provision of this agreement."
    },
    {
      title: "2. Digital Products & Licenses",
      content: "All products are digital downloads for personal use only. You may print and use our materials for your family, classroom, or personal projects. Commercial use requires a separate commercial license."
    },
    {
      title: "3. Payment & Refunds",
      content: "All sales are final upon download. However, we offer a 30-day money-back guarantee if you're not satisfied with your purchase. Refund requests must be submitted within 30 days of purchase."
    },
    {
      title: "4. Intellectual Property",
      content: "All content, designs, and materials are protected by copyright and owned by Tweetycrafts. You may not redistribute, resell, or claim ownership of our designs."
    },
    {
      title: "5. Prohibited Uses",
      content: "You may not use our products for illegal purposes, spam, harassment, or any activity that violates these terms. Commercial use without proper licensing is prohibited."
    },
    {
      title: "6. Account Termination",
      content: "We reserve the right to terminate accounts that violate these terms. Upon termination, your right to use our services ceases immediately."
    },
    {
      title: "7. Limitation of Liability",
      content: "Tweetycrafts shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services."
    },
    {
      title: "8. Changes to Terms",
      content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black font-sans mb-4">
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-muted-foreground">
            Last updated: December 2024
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <Card key={index} className="brutalist-border">
              <CardContent className="p-6">
                <h2 className="font-bold text-lg mb-4 text-primary">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-secondary/10 p-8 brutalist-border">
          <h2 className="font-bold text-lg mb-4">Contact Information</h2>
          <p className="text-muted-foreground mb-2">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <p className="text-muted-foreground">
            📧 legal@tweetycrafts.com<br/>
            📍 123 Creative Lane, Design City, DC 12345
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
