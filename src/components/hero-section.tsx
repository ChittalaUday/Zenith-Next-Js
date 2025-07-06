import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";


export function HeroSection() {
  return (
    <section className="relative w-full flex justify-center overflow-hidden pt-6 pb-12 sm:pb-20 lg:pb-24">
      {/* Container with max-width for larger screens */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center pt-6 pb-12">
          
          {/* Left Side - Content */}
          <div className="flex flex-col space-y-10 max-w-2xl">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
                Your Financial Future{" "}
                <span className="block text-primary ">Starts Here</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Experience financial mastery with FinTechPro's innovative B2B SaaS solutions. 
                Streamline your financial operations, gain real-time insights, and boost profitability effortlessly.
              </p>
            </div>

            {/* Email Signup Form */}
            <div className="space-y-4">
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="h-12 text-base bg-background border-border focus:ring-2 focus:ring-ring focus:border-ring"
                />
                <Button 
                  type="submit" 
                  size="lg"
                  className="h-12 px-8 text-base font-semibold shrink-0"
                >
                  Get started for free
                </Button>
              </form>
              
            
            </div>

            {/* Social Proof */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Avatar key={i} className="w-8 h-8 border-2 border-background">
                      <AvatarImage src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`} alt="User" />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
                    24.2k+ Reviews
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">10m+</span>
                    <span className="text-muted-foreground">Daily Transactions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-green-600">98.99%</span>
                    <span className="text-muted-foreground">ROI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Statistics Cards */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-[500px] flex items-center justify-center">
              
              {/* Card 1: Total visits - Top Center */}
              <Card className="absolute top-0 left-1/4 -translate-x-3/5 bg-card/95 backdrop-blur-sm border-border/50 shadow-xl w-64 sm:w-72 lg:w-80 z-30">
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Statistics</span>
                      <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold text-foreground">
                        Live
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">Total visits</h3>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold">325k</span>
                        <span className="text-sm font-medium text-green-600">+18.34%</span>
                      </div>
                    </div>
                    {/* Chart placeholder */}
                    <div className="w-full h-12 sm:h-16 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg flex items-end p-2">
                      <svg width="100%" height="100%" viewBox="0 0 200 60" fill="none" className="text-primary">
                        <polyline 
                          points="0,50 40,30 80,40 120,10 160,30 200,5" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none" 
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2: Views by country - Top Right */}
              <Card className="absolute top-20 left-1/2  right-0 bg-card/95 backdrop-blur-sm border-border/50 shadow-xl w-64 sm:w-72 lg:w-80 z-20">
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Statistics</span>
                      <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold text-foreground">
                        Global
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">Views by country</h3>
                      <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
                        {/* Pie chart placeholder */}
                        <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                          <svg width="64" height="64" viewBox="0 0 36 36" className="w-full h-full">
                            <circle cx="18" cy="18" r="16" fill="hsl(var(--muted))" />
                            <path d="M18 2 a 16 16 0 0 1 13.5 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="6" />
                            <path d="M18 2 a 16 16 0 1 0 13.5 24" fill="none" stroke="hsl(var(--secondary))" strokeWidth="6" />
                            <path d="M18 2 a 16 16 0 0 1 0 32" fill="none" stroke="hsl(var(--accent))" strokeWidth="6" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1 sm:gap-2 text-xs sm:text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary"></div>
                            <span>USA</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary"></div>
                            <span>Canada</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-accent"></div>
                            <span>U.K.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3: Real-time customers - Bottom Left */}
              <Card className="absolute bottom-0 left-0 bg-card/95 backdrop-blur-sm border-border/50 shadow-xl w-72 sm:w-80 lg:w-96 z-10">
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Statistics</span>
                      <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold text-foreground">
                        Real-time
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">Active customers</h3>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold">1,027</span>
                        <span className="text-sm font-medium text-green-600">+12.75%</span>
                      </div>
                    </div>
                    {/* Chart placeholder */}
                    <div className="w-full h-12 sm:h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-end p-2">
                      <svg width="100%" height="100%" viewBox="0 0 200 60" fill="none" className="text-primary">
                        <polyline 
                          points="0,50 40,40 80,30 120,50 160,20 200,40" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none" 
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}