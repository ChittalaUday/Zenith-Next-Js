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
      { label: "Company Registration", href: "#" },
      { label: "GST Registration", href: "#" },
      { label: "Trademark", href: "#" },
      {
        label: "More Services",
        subItems: [
          { label: "FSSAI License", href: "#" },
          { label: "MSME Registration", href: "#" },
        ],
      },
    ],
  },
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

  return (
    <>
      <div className="w-full border-b bg-background text-foreground">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="font-bold text-lg">ZenithFilings</div>

          {/* Desktop menu */}
          <div className="hidden md:flex">
            <NavigationMenuRoot>
              {renderDesktopMenu(menuData)}
            </NavigationMenuRoot>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="default">Login / Signup</Button>
            <div className="flex justify-end ml-4">
              <ModeToggle />
            </div>
          </div>

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
          <Button variant="default">Login / Signup</Button>
          <div className="flex justify-end">
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
