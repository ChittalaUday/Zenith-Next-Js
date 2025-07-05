import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { quote: '"ZenithFilings made company registration incredibly simple. Their team guided us from start to finish, and we had our company registered in no time."', name: "Rahul Sarma", role: "CEO, Initechware" },
  { quote: '"The GST filing process is outstanding. The support team handles everything, and the documentation was a breeze. The customer support is highly responsive!"', name: "Priya Patel", role: "Founder, Spindle" },
  { quote: '"We needed trademark registration urgently, and ZenithFilings delivered. Their support was fast, and the customer service was excellent!"', name: "Vivek Singh", role: "SME, FoodCraft" },
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-2">What Our Clients Say</h2>
      <p className="text-muted-foreground mb-8 text-center">Trusted by thousands of businesses across India</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {testimonials.map((t, i) => (
          <Card key={i}>
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="text-sm">{t.quote}</div>
              <div className="font-semibold text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 