export function FooterSection() {
  return (
    <footer className="w-full py-10 px-4 md:px-12 bg-background border-t mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="font-bold text-lg mb-2">ZenithFilings</div>
          <p className="text-sm text-muted-foreground mb-4">Compliant partner for business growth. Get expert guidance for business compliance and registration services.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="text-sm flex flex-col gap-1">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Our Services</div>
          <ul className="text-sm flex flex-col gap-1">
            <li>Company Registration</li>
            <li>GST Registration</li>
            <li>FSSAI Registration</li>
            <li>Trademark</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact us</div>
          <ul className="text-sm flex flex-col gap-1">
            <li>support@zenithfilings.com</li>
            <li>+91-99999-43210</li>
            <li>123 Business Avenue, Bangalore, India</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground mt-8">© 2024 ZenithFilings. All rights reserved.</div>
    </footer>
  );
} 