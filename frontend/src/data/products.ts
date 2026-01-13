import productJersey from '@/assets/product-jersey.jpg';
import productBoots from '@/assets/product-boots.jpg';
import productBall from '@/assets/product-ball.jpg';
import productGloves from '@/assets/product-gloves.jpg';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews?: number;
  category: string;
  description?: string;
  sizes?: string[];
  colors?: string[];
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: "Pro Performance Jacket",
    price: 129.99,
    image: productJersey,
    rating: 4.8,
    reviews: 128,
    category: "Apparel",
    description: "Professional skating jacket with moisture-wicking fabric and thermal insulation. Perfect for training sessions and casual skating.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "White", "Black"],
  },
  {
    id: 2,
    name: "Elite Figure Skates",
    price: 349.99,
    image: productBoots,
    rating: 4.9,
    reviews: 256,
    category: "Ice Skates",
    description: "Professional-grade figure skates with premium leather boots and precision-ground blades. Designed for optimal performance and comfort.",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    colors: ["White", "Black"],
  },
  {
    id: 3,
    name: "Training Blade Guards",
    price: 49.99,
    image: productBall,
    rating: 4.7,
    reviews: 89,
    category: "Accessories",
    description: "High-quality blade guards to protect your skate blades when walking off the ice. Essential for maintaining blade sharpness.",
    sizes: ["Standard"],
    colors: ["Clear", "Blue", "Pink"],
  },
  {
    id: 4,
    name: "Pro Skating Gloves",
    price: 39.99,
    image: productGloves,
    rating: 4.6,
    reviews: 67,
    category: "Protective Gear",
    description: "Insulated skating gloves with grip enhancement. Keep your hands warm while maintaining dexterity for spins and jumps.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy"],
  },
];

export const categories = ["All", "Ice Skates", "Apparel", "Protective Gear", "Accessories"];

export const getProductById = (id: number): Product | undefined => {
  return allProducts.find((p) => p.id === id);
};
