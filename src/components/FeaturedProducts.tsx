import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Eternal Love Diamond Ring",
      price: 2999,
      originalPrice: 3499,
      image: product2,
      category: "Rings",
      isSale: true,
      rating: 5,
      reviewCount: 124,
    },
    {
      id: "2",
      name: "Rose Gold Pearl Necklace",
      price: 899,
      image: product3,
      category: "Necklaces",
      isNew: true,
      rating: 5,
      reviewCount: 87,
    },
    {
      id: "3",
      name: "Classic Diamond Studs",
      price: 1299,
      image: product4,
      category: "Earrings",
      rating: 5,
      reviewCount: 203,
    },
    {
      id: "4",
      name: "Luxury Collection Set",
      price: 4999,
      originalPrice: 5999,
      image: product1,
      category: "Sets",
      isSale: true,
      rating: 5,
      reviewCount: 45,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-black mb-4">
            Featured <span className="text-gold">Collection</span>
          </h2>
          <p className="text-lg text-soft-gray max-w-2xl mx-auto">
            Handpicked pieces from our exclusive collection, crafted with the finest 
            materials and exceptional attention to detail.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button className="btn-outline-gold text-lg px-8 py-3 h-auto">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;