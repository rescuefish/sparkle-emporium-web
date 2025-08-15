import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CollectionsSection = () => {
  const collections = [
    {
      id: "bridal",
      name: "Bridal Collection",
      description: "Timeless pieces for your special day",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&h=600",
      itemCount: 156,
    },
    {
      id: "minimalist",
      name: "Minimalist",
      description: "Clean lines, maximum impact",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&h=600",
      itemCount: 89,
    },
    {
      id: "luxury",
      name: "Luxury",
      description: "Exceptional pieces for extraordinary moments",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&h=600",
      itemCount: 67,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-black mb-4">
            Curated <span className="text-rose-gold">Collections</span>
          </h2>
          <p className="text-lg text-soft-gray max-w-2xl mx-auto">
            Explore our thoughtfully curated collections, each telling a unique story 
            and designed for different moments in your life.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className="group relative overflow-hidden rounded-lg card-luxury hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2">
                  <span className="text-sm text-gold font-medium">
                    {collection.itemCount} pieces
                  </span>
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-2">
                  {collection.name}
                </h3>
                <p className="text-gray-200 mb-4">
                  {collection.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="text-white border-white hover:bg-white hover:text-luxury-black p-0 h-auto group"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;