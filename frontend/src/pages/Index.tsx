import { Link } from "react-router-dom";
import { ArrowRight, Star, Dumbbell, Zap, Shield, Clock, Trophy, Users, Award, Quote, ChevronRight, Play, Check, Target, Flame, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useEffect, useState, useRef } from "react";
import { productService } from "@/services/database";
import type { Product } from "@/types/database";

// Gym-specific data
const features = [
  { icon: Zap, title: "Elite Training", description: "World-class coaching" },
  { icon: Shield, title: "Premium Equipment", description: "Pro-grade machines" },
  { icon: Clock, title: "24/7 Access", description: "Train anytime" },
];

const stats = [
  { value: "15K+", label: "Active Members" },
  { value: "200+", label: "Equipment Pieces" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Open Hours" },
];

const testimonials = [
  {
    name: "Marcus Rodriguez",
    role: "Professional Athlete",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "Spider Gym transformed my training. The equipment and coaching are unmatched. I've achieved results I never thought possible.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Fitness Coach",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    quote: "As a coach, I need a facility that matches my standards. Spider Gym delivers world-class equipment and an atmosphere that inspires greatness.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Bodybuilding Champion",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "The dark, focused environment at Spider Gym is perfect for serious athletes. No distractions, just pure dedication to excellence.",
    rating: 5,
  },
];

const categories = [
  {
    name: "Strength Training",
    description: "Power & muscle building",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
    count: "50+",
  },
  {
    name: "Cardio Zone",
    description: "Endurance & stamina",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop",
    count: "30+",
  },
  {
    name: "Supplements",
    description: "Fuel your gains",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop",
    count: "100+",
  },
  {
    name: "Accessories",
    description: "Complete your kit",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=300&fit=crop",
    count: "200+",
  },
];

const membershipTiers = [
  {
    name: "ROOKIE",
    price: "$29",
    period: "/month",
    features: ["Basic gym access", "Locker room access", "Free parking"],
    popular: false,
  },
  {
    name: "WARRIOR",
    price: "$59",
    period: "/month",
    features: ["24/7 gym access", "Personal trainer (2x/mo)", "Group classes", "Nutrition guide"],
    popular: true,
  },
  {
    name: "LEGEND",
    price: "$99",
    period: "/month",
    features: ["VIP 24/7 access", "Unlimited personal training", "Private locker", "Recovery suite", "Supplement discount"],
    popular: false,
  },
];

// Scroll reveal hook
const useScrollReveal = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    reveals.forEach((reveal) => observer.observe(reveal));

    return () => observer.disconnect();
  }, []);
};

// Parallax hook
const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax-slow');
      
      parallaxElements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = 0.3;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useScrollReveal();
  useParallax();

  // Mouse tracking for floating elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        setIsLoading(true);
        const products = await productService.getAll();
        setFeaturedProducts(products.slice(0, 4));
      } catch (error) {
        console.error("Error loading featured products:", error);
        setFeaturedProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadFeaturedProducts();
  }, []);

  return (
    <Layout>
      {/* Hero Section - Cinematic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
            alt="Gym"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        {/* Floating Elements */}
        <div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-red-600/10 blur-3xl animate-float"
          style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` }}
        />
        <div
          className="absolute bottom-32 left-20 w-48 h-48 rounded-full bg-blue-600/10 blur-3xl animate-float-delayed"
          style={{ transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)` }}
        />

        {/* Web Pattern Overlay */}
        <div className="absolute inset-0 web-pattern opacity-30" />

        {/* Red scan line */}
        <div className="absolute inset-0 scan-line" />

        <div className="container relative mx-auto px-4 py-20 z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-red mb-8">
              <Flame className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-400 tracking-wider uppercase">
                Unleash Your Power
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="reveal text-6xl md:text-7xl lg:text-9xl font-black text-white leading-none mb-6 text-cinematic">
              <span className="block">RISE</span>
              <span className="block text-glow text-red-600">BEYOND</span>
              <span className="block text-stroke text-white/20">LIMITS</span>
            </h1>

            {/* Subheading */}
            <p className="reveal text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Where champions are forged. Experience elite training facilities, 
              world-class equipment, and an atmosphere designed for 
              <span className="text-red-500 font-semibold"> extraordinary results</span>.
            </p>

            {/* CTA Buttons */}
            <div className="reveal flex flex-col sm:flex-row gap-4 mb-16">
              <Link to="/store">
                <Button className="btn-hero bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-bold uppercase tracking-wider">
                  Start Training
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="btn-hero border-2 border-white/20 hover:border-red-500 text-white px-8 py-6 text-lg font-bold uppercase tracking-wider bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Tour
              </Button>
            </div>

            {/* Stats Row */}
            <div className="reveal flex flex-wrap gap-12 pt-8 border-t border-white/10">
              {stats.slice(0, 3).map((stat, index) => (
                <div key={stat.label} className={`stagger-${index + 1}`}>
                  <div className="text-4xl md:text-5xl font-black text-red-500 text-cinematic">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-red-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="relative bg-black py-8 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`reveal flex items-center gap-4 justify-center p-4 stagger-${index + 1}`}
              >
                <div className="w-14 h-14 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="reveal inline-block text-red-500 text-sm font-bold uppercase tracking-widest mb-4">
              Equipment & Gear
            </span>
            <h2 className="reveal text-4xl md:text-6xl font-black text-white text-cinematic mb-4">
              GEAR UP FOR <span className="text-red-500">GREATNESS</span>
            </h2>
            <p className="reveal text-gray-500 max-w-2xl mx-auto text-lg">
              Professional-grade equipment and supplements to fuel your transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={`/store?category=${category.name}`}
                className={`reveal-scale group relative aspect-[4/5] rounded-2xl overflow-hidden card-cinematic stagger-${index + 1}`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-red-500 text-sm font-bold uppercase tracking-wider mb-2">
                    {category.count} Products
                  </div>
                  <h3 className="text-2xl font-black text-white text-cinematic">
                    {category.name.toUpperCase()}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{category.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <span className="reveal-left text-red-500 text-sm font-bold uppercase tracking-widest mb-4 block">
                Top Picks
              </span>
              <h2 className="reveal-left text-4xl md:text-6xl font-black text-white text-cinematic">
                FEATURED <span className="text-red-500">GEAR</span>
              </h2>
            </div>
            <Link to="/store" className="reveal-right mt-6 md:mt-0">
              <Button
                variant="outline"
                className="border-white/20 hover:border-red-500 text-white hover:text-red-500 uppercase tracking-wider"
              >
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading ? (
              <div className="col-span-4 text-center py-12">
                <div className="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-red-500 mx-auto" />
                <p className="text-gray-500">Loading gear...</p>
              </div>
            ) : featuredProducts.length > 0 ? (
              featuredProducts.map((product, index) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className={`reveal-scale group bg-gray-900 rounded-2xl overflow-hidden border border-white/5 card-cinematic stagger-${index + 1}`}
                >
                  <div className="aspect-square overflow-hidden bg-black">
                    <img
                      src={product.image_url || ""}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-red-500 uppercase tracking-wider font-bold">
                      {product.category}
                    </span>
                    <h3 className="font-bold text-white mt-2 text-lg group-hover:text-red-500 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-2xl font-black text-white">
                        ${product.price.toFixed(2)}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-red-500 text-red-500" />
                        <span className="text-sm text-gray-400">
                          {product.rating || 5}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-4 text-center py-12">
                <p className="text-gray-500">No products available</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="reveal inline-block text-red-500 text-sm font-bold uppercase tracking-widest mb-4">
              Membership Tiers
            </span>
            <h2 className="reveal text-4xl md:text-6xl font-black text-white text-cinematic mb-4">
              CHOOSE YOUR <span className="text-red-500">PATH</span>
            </h2>
            <p className="reveal text-gray-500 max-w-2xl mx-auto text-lg">
              Select the membership that matches your ambition. Every tier unlocks 
              exclusive benefits designed to accelerate your transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`reveal-scale relative rounded-2xl p-8 card-cinematic stagger-${index + 1} ${
                  tier.popular
                    ? "bg-gradient-to-b from-red-950/50 to-gray-900 border-2 border-red-600"
                    : "bg-gray-900 border border-white/10"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-black text-white text-cinematic mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-black text-white">{tier.price}</span>
                    <span className="text-gray-500">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/programme" className="block">
                  <Button
                    className={`w-full py-6 font-bold uppercase tracking-wider ${
                      tier.popular
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-white/5 hover:bg-white/10 text-white border border-white/20"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="reveal-left text-red-500 text-sm font-bold uppercase tracking-widest mb-4 block">
                Why Spider Gym
              </span>
              <h2 className="reveal-left text-4xl md:text-6xl font-black text-white text-cinematic mb-6">
                TRAIN LIKE A <span className="text-red-500">HERO</span>
              </h2>
              <p className="reveal-left text-gray-400 text-lg mb-10 leading-relaxed">
                We've built more than a gym. We've created a fortress for those 
                who refuse to accept average. Every detail is designed to push 
                you beyond your perceived limits.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Target, title: "Precision Equipment", desc: "Competition-grade machines calibrated for peak performance" },
                  { icon: Flame, title: "Elite Atmosphere", desc: "Dark, focused environment that eliminates distractions" },
                  { icon: Heart, title: "Recovery Suite", desc: "Cryotherapy, massage, and advanced recovery tech" },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`reveal-left flex items-start gap-4 stagger-${index + 1}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="reveal-right relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=1000&fit=crop"
                  alt="Training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 glass rounded-2xl p-6 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center">
                    <Trophy className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">98%</div>
                    <div className="text-sm text-gray-400">Member Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="reveal inline-block text-red-500 text-sm font-bold uppercase tracking-widest mb-4">
              Success Stories
            </span>
            <h2 className="reveal text-4xl md:text-6xl font-black text-white text-cinematic mb-4">
              CHAMPIONS <span className="text-red-500">SPEAK</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`reveal-scale bg-gray-900 rounded-2xl p-8 border border-white/5 card-cinematic stagger-${index + 1}`}
              >
                <Quote className="w-10 h-10 text-red-600 mb-6" />
                <p className="text-gray-300 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-red-600"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 web-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`reveal text-center stagger-${index + 1}`}
              >
                <div className="text-5xl md:text-6xl font-black text-white text-cinematic mb-2">
                  {stat.value}
                </div>
                <div className="text-red-200 uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=800&fit=crop"
            alt="Gym"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="reveal text-4xl md:text-7xl font-black text-white text-cinematic mb-6">
            YOUR TRANSFORMATION
            <span className="block text-red-500">STARTS NOW</span>
          </h2>
          <p className="reveal text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
            Join Spider Gym today and unlock your potential. Get exclusive deals, 
            early access to new equipment, and be part of an elite community.
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors"
            />
            <Button className="btn-hero bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold uppercase tracking-wider">
              Join Now
            </Button>
          </div>
          <p className="reveal text-gray-600 text-sm mt-6">
            Join 15,000+ members. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
