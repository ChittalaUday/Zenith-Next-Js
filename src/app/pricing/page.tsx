import { NavBar } from "@/components/nav-bar";
import { FooterSection } from "@/components/footer-section";
import { ParticleBackground } from "@/components/particle-background";
import { FloatingElements } from "@/components/floating-elements";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star, Zap, Shield, Users } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Glow Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-primary/8 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-accent/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-3/4 w-64 h-64 bg-accent/4 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <ParticleBackground 
          particleCount={8} 
          floatingElementsCount={3}
        />
        <FloatingElements count={4} />
        <NavBar />
        
        {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] flex justify-center overflow-hidden pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative z-10 text-center space-y-8 py-20">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm font-medium">
                  Pricing Plans
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                  Choose Your{" "}
                  <span className="block text-primary">Compliance Plan</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Transparent pricing for all your business compliance needs. 
                  No hidden fees, no surprises. Choose the plan that fits your business.
                </p>
              </div>
              
              {/* Pricing Toggle */}
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-muted-foreground">Monthly</span>
                <div className="relative">
                  <input type="checkbox" id="billing-toggle" className="sr-only" />
                  <label htmlFor="billing-toggle" className="flex items-center cursor-pointer">
                    <div className="relative">
                      <div className="w-14 h-7 bg-muted rounded-full shadow-inner"></div>
                      <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-transform"></div>
                    </div>
                  </label>
                </div>
                <span className="text-sm font-medium">Yearly</span>
                <Badge variant="outline" className="text-xs">
                  Save 20%
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Basic Plan */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm relative">
                <CardHeader className="text-center pb-8">
                  <Badge variant="outline" className="w-fit mx-auto mb-4">
                    Basic
                  </Badge>
                  <CardTitle className="text-3xl font-bold">₹2,999</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    per month
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    Perfect for startups and small businesses
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Business Registration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">GST Registration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Basic Compliance Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Email Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Document Templates</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X className="w-5 h-5 text-red-500" />
                      <span className="text-sm text-muted-foreground">Priority Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X className="w-5 h-5 text-red-500" />
                      <span className="text-sm text-muted-foreground">Compliance Monitoring</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              {/* Professional Plan */}
              <Card className="border-primary/50 bg-card/50 backdrop-blur-sm relative scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
                <CardHeader className="text-center pb-8">
                  <Badge variant="outline" className="w-fit mx-auto mb-4">
                    Professional
                  </Badge>
                  <CardTitle className="text-3xl font-bold">₹5,999</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    per month
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    Ideal for growing businesses
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Everything in Basic</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Trademark Registration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">ISO Certification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Priority Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Compliance Monitoring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Quarterly Reviews</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Legal Consultation</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm relative">
                <CardHeader className="text-center pb-8">
                  <Badge variant="outline" className="w-fit mx-auto mb-4">
                    Enterprise
                  </Badge>
                  <CardTitle className="text-3xl font-bold">₹12,999</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    per month
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    For large corporations and enterprises
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Everything in Professional</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Dedicated Account Manager</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">24/7 Phone Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Custom Compliance Solutions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Monthly Reports</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Risk Assessment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Audit Support</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center space-y-8 mb-16">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  Service Packages
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Individual Service Pricing
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Need specific services? Choose from our à la carte options.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Business Registration",
                  price: "₹1,999",
                  description: "Complete business registration including PAN, TAN, and bank account setup",
                  features: ["PAN Application", "TAN Registration", "Bank Account Setup", "Digital Signature"]
                },
                {
                  icon: Zap,
                  title: "GST Registration",
                  price: "₹999",
                  description: "Quick and hassle-free GST registration for your business",
                  features: ["GST Application", "Document Verification", "Registration Certificate", "GST Training"]
                },
                {
                  icon: Star,
                  title: "Trademark Registration",
                  price: "₹6,999",
                  description: "Protect your brand with comprehensive trademark registration",
                  features: ["Trademark Search", "Application Filing", "Response Handling", "Registration Certificate"]
                },
                {
                  icon: Users,
                  title: "ISO Certification",
                  price: "₹15,999",
                  description: "Achieve international quality standards with ISO certification",
                  features: ["Gap Analysis", "Documentation", "Audit Support", "Certification"]
                },
                {
                  icon: Shield,
                  title: "Compliance Monitoring",
                  price: "₹2,999",
                  description: "Stay compliant with regular monitoring and updates",
                  features: ["Monthly Reports", "Deadline Alerts", "Compliance Updates", "Expert Consultation"]
                },
                {
                  icon: Star,
                  title: "Legal Consultation",
                  price: "₹1,999",
                  description: "Get expert legal advice for your business needs",
                  features: ["1-on-1 Consultation", "Legal Document Review", "Compliance Advice", "Follow-up Support"]
                }
              ].map((service, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{service.price}</div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" variant="outline">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center space-y-8 mb-16">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  FAQ
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Pricing Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Common questions about our pricing and services.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "Are there any hidden fees?",
                  answer: "No, our pricing is completely transparent. All fees are clearly listed and there are no hidden charges."
                },
                {
                  question: "Can I change my plan later?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
                },
                {
                  question: "Do you offer refunds?",
                  answer: "We offer a 30-day money-back guarantee for all our services. If you're not satisfied, we'll refund your payment."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets."
                },
                {
                  question: "Is there a setup fee?",
                  answer: "No setup fees for any of our plans. You only pay the advertised monthly or yearly subscription fee."
                }
              ].map((faq, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose the plan that's right for your business and start your compliance journey today.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base font-semibold">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="text-base font-semibold">
                  Schedule a Demo
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>30-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    </div>
  );
} 