const steps = [
  { icon: "1️⃣", title: "Step 1", desc: "Choose your service" },
  { icon: "2️⃣", title: "Step 2", desc: "Upload documents" },
  { icon: "3️⃣", title: "Step 3", desc: "Get your service delivered" },
];

export function HowItWorksSection() {
  return (
    <section className="w-full py-12 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
      <p className="text-muted-foreground mb-8 text-center">Simple steps to get your business compliant in no time.</p>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-3xl mb-2">{step.icon}</div>
            <div className="font-semibold mb-1">{step.title}</div>
            <div className="text-sm text-muted-foreground text-center">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 