import { Button } from "@/components/ui/button";

export function CallToActionSection() {
  return (
    <section className="w-full py-12 flex flex-col items-center bg-muted">
      <h2 className="text-2xl font-semibold mb-2 text-center">Ready to Start Your Business Journey?</h2>
      <p className="text-muted-foreground mb-6 text-center">Get expert assistance for all your business compliance needs in one place.</p>
      <div className="flex gap-4">
        <Button>Start Your Business</Button>
        <Button variant="outline">Schedule a Consultation</Button>
      </div>
    </section>
  );
} 