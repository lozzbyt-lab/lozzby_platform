import { Check, Gift, Users, Trophy, Zap, Star, Flame, Crown, ArrowRight, Heart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { membershipService } from '@/services/database';
import { useEffect, useState } from 'react';
import { Membership } from '@/types/database';
import { toast } from 'sonner';

const iconMap: Record<string, any> = {
  Star,
  Crown,
  Flame,
  Zap,
  Gift,
  Trophy,
  Heart,
  Award,
};

const features = [
  {
    icon: Gift,
    title: "Exclusive Rewards",
    description: "Earn points on every purchase and redeem for amazing rewards"
  },
  {
    icon: Zap,
    title: "Early Access",
    description: "Get first dibs on new products and limited edition items"
  },
  {
    icon: Users,
    title: "Community",
    description: "Join a community of passionate skaters and get expert tips"
  },
  {
    icon: Trophy,
    title: "Premium Support",
    description: "Get priority support from our team of skating experts"
  }
];

const Programme = () => {
  const { addItem } = useCart();

  const handleAddToCart = (tier: typeof membershipTiers[0]) => {
    addItem(
      {
        id: membershipTiers.indexOf(tier) + 1000, // Use unique IDs for memberships
        name: `${tier.name} Membership`,
        price: tier.price,
        image: 'https://images.unsplash.com/photo-1556821552-5ff41cf930b2?w=400&h=400&fit=crop',
        category: 'Membership',
      },
      1
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
            <span className="text-accent font-semibold text-sm">🎯 MEMBERSHIP PROGRAM</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Join Our <span className="text-accent">Elite Club</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Get exclusive discounts, early access to new products, and join a community of passionate skaters. Choose the membership tier that fits your lifestyle.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Choose Your Tier</h2>
          <p className="text-center text-muted-foreground mb-12">
            Upgrade your skating experience with the perfect membership plan
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier, index) => {
              const TierIcon = tier.icon;
              return (
                <div
                  key={index}
                  className={`relative rounded-xl border transition-all duration-300 overflow-hidden group ${
                    tier.highlighted
                      ? "border-accent shadow-xl md:scale-105"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  {/* Background */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${
                    tier.highlighted
                      ? "from-accent/5 to-transparent"
                      : "from-background to-transparent"
                  }`} />

                  {/* Badge for highlighted tier */}
                  {tier.highlighted && (
                    <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground text-sm font-bold py-2 text-center">
                      ⭐ MOST POPULAR
                    </div>
                  )}

                  <div className={`relative p-8 ${tier.highlighted ? "pt-16" : ""}`}>
                    {/* Tier Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        tier.highlighted
                          ? "bg-accent text-accent-foreground"
                          : "bg-accent/10 text-accent"
                      }`}>
                        <TierIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold">{tier.name}</h3>
                    </div>

                    <p className="text-muted-foreground mb-6 text-sm">{tier.description}</p>

                    {/* Price */}
                    <div className="mb-8">
                      <span className="text-4xl font-bold">${tier.price}</span>
                      <span className="text-muted-foreground ml-2">/{tier.period}</span>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant={tier.highlighted ? "gold" : "outline"}
                      className="w-full mb-8"
                      size="lg"
                      onClick={() => handleAddToCart(tier)}
                    >
                      Add to Cart <ArrowRight className="w-4 h-4" />
                    </Button>

                    {/* Benefits List */}
                    <div className="space-y-3">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Includes:</p>
                      {tier.benefits.map((benefit, bIndex) => (
                        <div key={bIndex} className="flex gap-3 items-start">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5 border-y border-border">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-muted-foreground mb-8">
            Start enjoying exclusive benefits and become part of the Skating community today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" asChild>
              <Link to="/store">Browse Products</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programme;
