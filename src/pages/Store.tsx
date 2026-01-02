import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import productJersey from "@/assets/product-jersey.jpg";
import productBoots from "@/assets/product-boots.jpg";
import productBall from "@/assets/product-ball.jpg";
import productGloves from "@/assets/product-gloves.jpg";

const allProducts = [
  { id: 1, name: "Pro Team Jersey", price: 89.99, image: productJersey, rating: 4.8, category: "Jerseys" },
  { id: 2, name: "Elite Football Boots", price: 199.99, image: productBoots, rating: 4.9, category: "Boots" },
  { id: 3, name: "Official Match Ball", price: 149.99, image: productBall, rating: 4.7, category: "Footballs" },
  { id: 4, name: "Pro Goalkeeper Gloves", price: 79.99, image: productGloves, rating: 4.6, category: "Accessories" },
  { id: 5, name: "Home Kit Jersey", price: 79.99, image: productJersey, rating: 4.5, category: "Jerseys" },
  { id: 6, name: "Speed Pro Boots", price: 169.99, image: productBoots, rating: 4.8, category: "Boots" },
  { id: 7, name: "Training Football", price: 39.99, image: productBall, rating: 4.4, category: "Footballs" },
  { id: 8, name: "Field Player Gloves", price: 34.99, image: productGloves, rating: 4.3, category: "Accessories" },
];

const categories = ["All", "Jerseys", "Boots", "Footballs", "Accessories"];

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = allProducts.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Official <span className="text-accent">Store</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl">
            Shop authentic football gear from the world's top brands. Premium quality, guaranteed.
          </p>
        </div>
      </section>

      {/* Filter & Products */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-8 pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <Filter className="w-4 h-4" />
                Filters
              </Button>
              
              {/* Desktop Category Pills */}
              <div className="hidden md:flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {sortedProducts.length} products
              </span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-card border border-border rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Mobile Filter Pills */}
          {showFilters && (
            <div className="flex flex-wrap gap-2 mb-6 md:hidden animate-in slide-in-from-top-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-semibold text-card-foreground mt-1 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-lg font-bold text-foreground">
                      ${product.price}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Store;
