
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This includes your name, email address, payment information, and any other information you choose to provide."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotional offers."
    },
    {
      title: "Information Sharing",
      content: "We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy. We may share your information with trusted service providers who assist us in operating our website and conducting business."
    },
    {
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure."
    },
    {
      title: "Cookies and Tracking",
      content: "We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings, but disabling cookies may affect website functionality."
    },
    {
      title: "Children's Privacy",
      content: "Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately."
    },
    {
      title: "Your Rights",
      content: "You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. Contact us to exercise these rights."
    },
    {
      title: "Changes to This Policy",
      content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'Last updated' date."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black font-sans mb-4">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-muted-foreground">
            Last updated: December 2024
          </p>
        </div>

        <div className="mb-8 bg-primary/10 p-6 brutalist-border">
          <p className="text-muted-foreground leading-relaxed">
            At Tweetycrafts, we respect your privacy and are committed to protecting your personal data. 
            This privacy policy explains how we collect, use, and safeguard your information when you use our website and services.
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
          <h2 className="font-bold text-lg mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-2">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <p className="text-muted-foreground">
            📧 privacy@tweetycrafts.com<br/>
            📍 123 Creative Lane, Design City, DC 12345<br/>
            📞 (555) 123-4567
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
