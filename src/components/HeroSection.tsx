import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-jewelry.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Jewelry Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-medium">New Collection Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
            Timeless
            <span className="block text-gold">Elegance</span>
            <span className="block text-rose-gold">Awaits</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of premium jewelry, crafted with 
            exquisite attention to detail and designed to celebrate life's 
            most precious moments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button className="btn-gold text-lg px-8 py-3 h-auto">
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              className="text-white border-white hover:bg-white hover:text-luxury-black text-lg px-8 py-3 h-auto"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold font-playfair text-gold">50K+</div>
              <div className="text-sm text-gray-300 mt-1">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-playfair text-rose-gold">25+</div>
              <div className="text-sm text-gray-300 mt-1">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-playfair text-champagne">1000+</div>
              <div className="text-sm text-gray-300 mt-1">Unique Designs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
          </div>
          <span className="text-xs mt-2 text-white/70">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;