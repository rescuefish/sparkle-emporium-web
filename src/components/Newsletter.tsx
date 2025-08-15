import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-gold relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-8">
            <Gift className="h-8 w-8" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Join Our Exclusive Circle
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be the first to discover new collections, exclusive offers, and 
            jewelry care tips delivered straight to your inbox.
          </p>

          {/* Newsletter Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/95 border-white/20 text-luxury-black placeholder:text-gray-500 h-12"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="bg-luxury-black hover:bg-luxury-gray text-white px-8 h-12"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-2xl mb-2">✨</div>
                <h3 className="text-lg font-semibold mb-2">Welcome to LuxeGems!</h3>
                <p className="text-white/90">
                  Thank you for subscribing. Check your inbox for a special welcome offer.
                </p>
              </div>
            </div>
          )}

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl mb-2">🎁</div>
              <h4 className="font-semibold mb-1">Exclusive Offers</h4>
              <p className="text-sm text-white/80">
                Special discounts and early access to sales
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">✨</div>
              <h4 className="font-semibold mb-1">New Arrivals</h4>
              <p className="text-sm text-white/80">
                Be first to see our latest jewelry pieces
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">💡</div>
              <h4 className="font-semibold mb-1">Care Tips</h4>
              <p className="text-sm text-white/80">
                Expert advice on jewelry care and styling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;