
import { Link } from "react-router-dom";
import logo from '../../public/logo_1.png';

const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "All Products", path: "/products" },
        { name: "Coloring Books", path: "/products" }, 
        { name: "Activity Sheets", path: "/products" },
        { name: "Craft Kits", path: "/products" },
        { name: "Sticker Packs", path: "/products" },
        { name: "Bundle Deals", path: "/products" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/help" },
        { name: "Contact Us", path: "/help" },
        { name: "Printing Tips", path: "/help" },
        { name: "Download Issues", path: "/help" },
        { name: "Refund Policy", path: "/help" },
        { name: "FAQ", path: "/help" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Our Story", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Affiliate Program", path: "/help" },
        { name: "Wholesale", path: "/help" },
        { name: "Careers", path: "/help" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", path: "/terms" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Cookie Policy", path: "/privacy" },
        { name: "License Agreement", path: "/terms" },
        { name: "Copyright Info", path: "/terms" },
        { name: "DMCA", path: "/terms" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "Pinterest", icon: "📌", url: "#" },
    { name: "Facebook", icon: "👥", url: "#" },
    { name: "YouTube", icon: "📺", url: "#" },
    { name: "TikTok", icon: "🎵", url: "#" }
  ];

  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
            <Link to="/">
            <img src={logo} 
            alt="Tweetycrafts Logo"  
            className="w-48 h-auto hover-bounce p-1"  />
            </Link>
              <p className="text-sidebar-foreground/80 font-medium leading-relaxed">
                Creating screen-free moments of joy and creativity for families worldwide. 
                Premium printables that spark imagination!
              </p>
            </div>
            
            {/* Social links */}
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-4 text-sidebar-accent-foreground">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="bg-sidebar-accent text-sidebar-accent-foreground brutalist-border p-3 hover:bg-sidebar-primary hover:text-sidebar-primary-foreground transition-all duration-200 hover:-translate-y-1 brutalist-shadow-sm hover:shadow-brutalist group"
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Contact info */}
            <div className="bg-sidebar-accent/20 brutalist-border p-4">
              <h4 className="font-bold mb-2">Need Help?</h4>
              <p className="text-sm text-sidebar-foreground/80 mb-2">
                📧 support@tweetycrafts.com
              </p>
              <p className="text-sm text-sidebar-foreground/80">
                ⏰ Mon-Fri 9AM-5PM EST
              </p>
            </div>
          </div>
          
          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg mb-4 text-sidebar-accent-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-sidebar-foreground/80 hover:text-sidebar-primary font-medium transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t-2 border-sidebar-border bg-sidebar-accent/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 text-sm text-sidebar-foreground/80">
              <span>© 2024 Tweetycrafts. All rights reserved.</span>
              <div className="flex gap-4">
                <Link to="/privacy" className="hover:text-sidebar-primary transition-colors">
                  Privacy
                </Link>
                <Link to="/terms" className="hover:text-sidebar-primary transition-colors">
                  Terms
                </Link>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-sidebar-primary text-sidebar-primary-foreground px-3 py-1 brutalist-border text-sm font-bold">
                🌱 ECO-FRIENDLY
              </div>
              <div className="bg-sidebar-accent text-sidebar-accent-foreground px-3 py-1 brutalist-border text-sm font-bold">
                ⚡ INSTANT DOWNLOAD
              </div>
              <div className="bg-sidebar-primary text-sidebar-primary-foreground px-3 py-1 brutalist-border text-sm font-bold">
                ❤️ MADE WITH LOVE
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
