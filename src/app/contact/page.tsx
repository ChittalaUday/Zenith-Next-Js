import { NavBar } from "@/components/nav-bar";
import { FooterSection } from "@/components/footer-section";
import { ParticleBackground } from "@/components/particle-background";
import { FloatingElements } from "@/components/floating-elements";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  Building2,
  Users,
  CheckCircle,
  Star
} from "lucide-react";

export default function ContactPage() {
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
          particleCount={10} 
          floatingElementsCount={3}
        />
        <FloatingElements count={5} />
        <NavBar />
        
        {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] flex justify-center overflow-hidden pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative z-10 text-center space-y-8 py-20">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm font-medium">
                  Get in Touch
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                  Let's Start Your{" "}
                  <span className="block text-primary">Compliance Journey</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Ready to simplify your business compliance? Our expert team is here to help. 
                  Reach out to us and let's discuss how we can support your business growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Send us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="Enter your first name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Enter your last name" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" placeholder="Enter your company name" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Required</Label>
                        <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm">
                          <option value="">Select a service</option>
                          <option value="startup">Startup Registration</option>
                          <option value="trademark">Trademark Registration</option>
                          <option value="gst">GST Registration</option>
                          <option value="compliance">Compliance Services</option>
                          <option value="consultation">Consultation</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your requirements..."
                          rows={4}
                        />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Contact Information</h2>
                  <p className="text-muted-foreground">
                    Get in touch with us through any of these channels. We're here to help!
                  </p>
                </div>
                
                <div className="space-y-6">
                  {/* Office Address */}
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">Main Office</h3>
                          <p className="text-sm text-muted-foreground">
                            123 Business Park, Tower A<br />
                            Sector 135, Noida<br />
                            Uttar Pradesh 201301, India
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Contact Numbers */}
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">Phone Numbers</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p>Main: +91 98765 43210</p>
                            <p>Support: +91 98765 43211</p>
                            <p>Sales: +91 98765 43212</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Email */}
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">Email Addresses</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p>General: info@zenithfilings.com</p>
                            <p>Support: support@zenithfilings.com</p>
                            <p>Sales: sales@zenithfilings.com</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Business Hours */}
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">Business Hours</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 9:00 AM - 2:00 PM</p>
                            <p>Sunday: Closed</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Stats */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center space-y-8 mb-16">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  Our Support
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Why Choose Our Support?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We're committed to providing exceptional support to all our clients.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Clock, value: "24/7", label: "Support Available", desc: "Round the clock assistance" },
                { icon: MessageSquare, value: "15min", label: "Response Time", desc: "Quick response guarantee" },
                { icon: Users, value: "50+", label: "Expert Team", desc: "Certified professionals" },
                { icon: Star, value: "4.9/5", label: "Customer Rating", desc: "Highly rated service" }
              ].map((stat, index) => (
                <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm font-medium mb-2">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.desc}</div>
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
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Find answers to common questions about our services.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "How long does the registration process take?",
                  answer: "Most registrations are completed within 7-15 business days, depending on the type of service and government processing times."
                },
                {
                  question: "What documents do I need to provide?",
                  answer: "Required documents vary by service type. Our team will provide a customized checklist based on your specific requirements."
                },
                {
                  question: "Do you provide post-registration support?",
                  answer: "Yes, we provide comprehensive post-registration support including compliance reminders and annual filing assistance."
                },
                {
                  question: "What are your payment terms?",
                  answer: "We offer flexible payment options including upfront payment, milestone-based payments, and EMI options for larger packages."
                },
                {
                  question: "Is my data secure with you?",
                  answer: "Absolutely. We use enterprise-grade security measures and comply with all data protection regulations to ensure your information is safe."
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

        <FooterSection />
      </div>
    </div>
  );
} 