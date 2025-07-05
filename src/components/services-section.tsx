import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  { title: "Company Registration", desc: "Register your business: Private Limited, LLP, OPC, or Partnership firm.", icon: "🏢" },
  { title: "GST Registration", desc: "Complete GST registration, filings, and compliance.", icon: "🧾" },
  { title: "Trademark", desc: "Protect your brand identity with our comprehensive trademark services.", icon: "™️" },
  { title: "FSSAI License", desc: "Obtain food safety license for your business operations.", icon: "🍽️" },
];

export function ServicesSection() {
  return (
    <section className="w-full py-12 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
      <p className="text-muted-foreground mb-8 text-center">Comprehensive business solutions to help you start and grow your business with ease.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl mb-8">
        {services.map((service, i) => (
          <Card key={i} className="flex flex-col items-start">
            <CardHeader>
              <span className="text-2xl">{service.icon}</span>
              <CardTitle className="mt-2">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-sm">{service.desc}</p>
              <a href="#" className="text-sm underline">Know More</a>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button variant="outline">View All Services</Button>
    </section>
  );
} 