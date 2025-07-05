"use client";

import React from "react";
import {
  NavigationMenuRoot,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationSubMenu,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type MenuItem = {
  label: string;
  href?: string;
  subItems?: MenuItem[];
};

const menuData: MenuItem[] = [
  { label: "Home", href: "#" },
  {
    label: "Services",
    subItems: [
      {
        label: "Startup",
        subItems: [
          { label: "Startup India", href: "#" },
          { label: "Trade License", href: "#" },
          { label: "FSSAI Registration", href: "#" },
          { label: "FSSAI License", href: "#" },
          { label: "Halal License & Certification", href: "#" },
          { label: "ICEGATE Registration", href: "#" },
          { label: "Import Export Code", href: "#" },
          { label: "Legal Entity Identifier Code", href: "#" },
          { label: "ISO Registration", href: "#" },
          { label: "PF Registration", href: "#" },
          { label: "ESI Registration", href: "#" },
          { label: "Professional Tax Registration", href: "#" },
          { label: "RCMC Registration", href: "#" },
          { label: "TN RERA Registration for Agents", href: "#" },
          { label: "12A and 80G Registration", href: "#" },
          { label: "12A Registration", href: "#" },
          { label: "80G Registration", href: "#" },
          { label: "APEDA Registration", href: "#" },
          { label: "Barcode Registration", href: "#" },
          { label: "BIS Registration", href: "#" },
          { label: "Certificate of Incumbency", href: "#" },
          { label: "Darpan Registration", href: "#" },
          { label: "Digital Signature", href: "#" },
          { label: "Shop Act Registration", href: "#" },
          { label: "Drug License", href: "#" },
          { label: "Udyam Registration", href: "#" },
          { label: "FCRA Registration", href: "#" },
          { label: "Fire License", href: "#" }
        ]
      },
      {
        label: "Registrations",
        subItems: [
          { label: "Trade License", href: "#" },
          { label: "ISO Registration", href: "#" },
          { label: "PF Registration", href: "#" },
          { label: "ESI Registration", href: "#" },
          { label: "Professional Tax Registration", href: "#" },
          { label: "RCMC Registration", href: "#" },
          { label: "TN RERA Registration for Agents", href: "#" }
        ]
      },
      {
        label: "Trademark",
        subItems: [
          { label: "12A Registration", href: "#" },
          { label: "80G Registration", href: "#" },
          { label: "APEDA Registration", href: "#" },
          { label: "Barcode Registration", href: "#" },
          { label: "BIS Registration", href: "#" },
          { label: "Certificate of Incumbency", href: "#" }
        ]
      },
      {
        label: "Goods & Services Tax",
        subItems: [
          { label: "Digital Signature", href: "#" },
          { label: "Shop Act Registration", href: "#" },
          { label: "Drug License", href: "#" },
          { label: "Udyam Registration", href: "#" },
          { label: "FCRA Registration", href: "#" },
          { label: "Fire License", href: "#" }
        ]
      },
      {
        label: "Income Tax",
    
      },
      {
        label: "MCA",
      },
      {
        label: "Consultation",
          },
      
    ]
  }
  ,
  {
    label: "Knowledge Center",
    subItems: [
      { label: "Blog", href: "#" },
      { label: "Guides", href: "#" },
      { label: "FAQs", href: "#" },
      {
        label: "More Services",
        subItems: [
          { label: "FSSAI License", href: "#" },
          { label: "MSME Registration", href: "#" },
        ],
      },
    ],
  },
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "#" },
];

export function NavBar() {
  const [open, setOpen] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggle = (key: string) => {
    setOpen((prev) => (prev === key ? null : key));
  };

  const renderDesktopMenu = (items: MenuItem[]) =>
    items.map((item) => {
      if (item.subItems) {
        return (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuTrigger
              onClick={() => toggle(item.label)}
              open={open === item.label}
            >
              {item.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent open={open === item.label}>
              {item.subItems.map((sub) =>
                sub.subItems ? (
                  <NavigationSubMenu key={sub.label} trigger={sub.label}>
                    {sub.subItems.map((subSub) => (
                      <NavigationMenuLink key={subSub.label} href={subSub.href}>
                        {subSub.label}
                      </NavigationMenuLink>
                    ))}
                  </NavigationSubMenu>
                ) : (
                  <NavigationMenuLink key={sub.label} href={sub.href}>
                    {sub.label}
                  </NavigationMenuLink>
                )
              )}
            </NavigationMenuContent>
          </NavigationMenuItem>
        );
      } else {
        return (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuLink href={item.href}>
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        );
      }
    });

  const renderMobileMenu = (items: MenuItem[]) =>
    items.map((item) => {
      if (item.subItems) {
        return (
          <NavigationSubMenu
            key={item.label}
            trigger={item.label}
            isMobile
            closeMobileMenu={() => setMobileOpen(false)}
          >
            {item.subItems.map((sub) =>
              sub.subItems ? (
                <NavigationSubMenu
                  key={sub.label}
                  trigger={sub.label}
                  isMobile
                  closeMobileMenu={() => setMobileOpen(false)}
                >
                  {sub.subItems.map((subSub) => (
                    <NavigationMenuLink
                      key={subSub.label}
                      href={subSub.href}
                      onClick={() => setMobileOpen(false)}
                    >
                      {subSub.label}
                    </NavigationMenuLink>
                  ))}
                </NavigationSubMenu>
              ) : (
                <NavigationMenuLink
                  key={sub.label}
                  href={sub.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {sub.label}
                </NavigationMenuLink>
              )
            )}
          </NavigationSubMenu>
        );
      } else {
        return (
          <NavigationMenuLink
            key={item.label}
            href={item.href}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </NavigationMenuLink>
        );
      }
    });

  // Reusable action buttons component
  const ActionButtons = ({ className = "" }: { className?: string }) => (
    <div className={cn("flex items-center gap-2", className)}>
      <Link href="/login">
        <Button variant="default">Login / Signup</Button>
      </Link>
      <div className="flex justify-end ml-4">
        <ModeToggle />
      </div>
    </div>
  );

  return (
    <>
      <div className={cn(
        "w-full text-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        "sticky top-0 z-50 transition-all duration-200",
        isSticky && "border-b border-border/40 shadow-sm"
      )}>
        <div className="flex items-center justify-between px-6 py-4">
          <div className="font-bold text-lg">ZenithFilings</div>

          {/* Desktop menu */}
          <div className="hidden md:flex">
            <NavigationMenuRoot>
              {renderDesktopMenu(menuData)}
            </NavigationMenuRoot>
          </div>

          {/* Desktop action buttons */}
          <ActionButtons className="hidden md:flex" />

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden focus:outline-none"
          >
            {mobileOpen ? (
              <X className="h-6 w-6 z-50" />
            ) : (
              <Menu className="h-6 w-6 z-50" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile side nav */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-background text-foreground shadow-lg transform transition-transform duration-300 z-50 p-6 space-y-2",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end">
          <X className="h-6 w-6 mr-4" onClick={() => setMobileOpen(false)} />
        </div>
        {renderMobileMenu(menuData)}

        <div className="mt-4 flex flex-col gap-2">
          <ActionButtons className="flex flex-col gap-2" />
        </div>
      </div>
    </>
  );
}
