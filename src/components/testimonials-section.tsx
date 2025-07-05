"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}

// Function to generate consistent colors based on name
function getAvatarColor(name: string) {
  const colors = [
    { bg: "bg-blue-600", text: "text-white", border: "border-blue-200" },
    { bg: "bg-green-600", text: "text-white", border: "border-green-200" },
    { bg: "bg-purple-600", text: "text-white", border: "border-purple-200" },
    { bg: "bg-orange-600", text: "text-white", border: "border-orange-200" },
    { bg: "bg-pink-600", text: "text-white", border: "border-pink-200" },
    { bg: "bg-indigo-600", text: "text-white", border: "border-indigo-200" },
    { bg: "bg-teal-600", text: "text-white", border: "border-teal-200" },
    { bg: "bg-red-600", text: "text-white", border: "border-red-200" },
    { bg: "bg-yellow-600", text: "text-white", border: "border-yellow-200" },
    { bg: "bg-cyan-600", text: "text-white", border: "border-cyan-200" },
  ];
  
  // Generate a hash from the name to get consistent color
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Use absolute value and modulo to get index
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}

// Function to fetch testimonials data from API
async function getTestimonialsData(): Promise<Testimonial[]> {
  try {
    const response = await fetch('/api/testimonials');
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching testimonials data:', error);
    // Fallback data
    return [
      { id: 1, quote: '"ZenithFilings made company registration incredibly simple. Their team guided us from start to finish, and we had our company registered in no time."', name: "Rahul Sarma", role: "CEO, Initechware", avatar: "RS" },
      { id: 2, quote: '"The GST filing process is outstanding. The support team handles everything, and the documentation was a breeze. The customer support is highly responsive!"', name: "Priya Patel", role: "Founder, Spindle", avatar: "PP" },
      { id: 3, quote: '"We needed trademark registration urgently, and ZenithFilings delivered. Their support was fast, and the customer service was excellent!"', name: "Vivek Singh", role: "SME, FoodCraft", avatar: "VS" },
    ];
  }
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [api, setApi] = React.useState<any>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    const fetchTestimonialsData = async () => {
      try {
        const data = await getTestimonialsData();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonialsData();
  }, []);

  // Auto-rotate carousel every 4 seconds, but stop when hovered
  React.useEffect(() => {
    if (!api || isHovered) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api, isHovered]);

  if (loading) {
    return (
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">Trusted by thousands of businesses across India</p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-48 bg-muted rounded-xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">Trusted by thousands of businesses across India</p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => {
                const avatarColor = getAvatarColor(testimonial.name);
                return (
                  <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 h-full flex flex-col">
                        {/* Quote Icon */}
                        <div className="flex justify-start mb-4">
                          <div className="p-2 rounded-full bg-primary/10">
                            <Quote className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        
                        {/* Rating Stars */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        
                        {/* Quote Text */}
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                            {testimonial.quote}
                          </p>
                        </div>
                        
                        {/* Author Info with Badge Style */}
                        <div className="flex items-center gap-3 mt-auto">
                          <Avatar className={`h-10 w-10 border ${avatarColor.bg} ${avatarColor.border}`}>
                            <AvatarFallback className={`${avatarColor.text} font-semibold`}>
                              {testimonial.avatar || testimonial.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            {/* Name Badge */}
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${avatarColor.bg} ${avatarColor.text} mb-1`}>
                              {testimonial.name}
                            </div>
                            {/* Role */}
                            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background" />
            <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background" />
          </Carousel>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.slice(0, 8).map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-muted-foreground/30 hover:bg-primary transition-colors"
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 