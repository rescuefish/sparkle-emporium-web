import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "Care Instructions", href: "/care" },
    { name: "Returns", href: "/returns" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  const collections = [
    { name: "Bridal Collection", href: "/collections/bridal" },
    { name: "Minimalist", href: "/collections/minimalist" },
    { name: "Luxury", href: "/collections/luxury" },
    { name: "Vintage", href: "/collections/vintage" },
    { name: "Modern", href: "/collections/modern" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-luxury-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-playfair font-bold">
                Luxe<span className="text-gold">Gems</span>
              </h3>
              <p className="text-gray-300 mt-2">
                Crafting timeless elegance with premium jewelry that tells your story.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold" />
                <span className="text-sm">hello@luxegems.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="text-sm">123 Luxury Ave, NYC</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-6">Collections</h4>
            <ul className="space-y-3">
              {collections.map((collection) => (
                <li key={collection.name}>
                  <a
                    href={collection.href}
                    className="text-gray-300 hover:text-gold transition-colors text-sm"
                  >
                    {collection.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-6">Stay Connected</h4>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                Subscribe to our newsletter for exclusive offers and new arrivals.
              </p>
              
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="btn-gold px-6">
                  Subscribe
                </Button>
              </div>

              <div className="flex space-x-4 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-300 hover:text-gold transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 LuxeGems. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/terms" className="text-gray-400 hover:text-gold text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-gold text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-gold text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;