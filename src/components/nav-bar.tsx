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
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { getIcon } from "@/lib/icons";
import type { LucideIcon } from "lucide-react";

type MenuItem = {
  label: string;
  href?: string;
  icon?: string;
  subItems?: MenuItem[];
};

// Function to fetch menu data from API
async function getMenuData(): Promise<MenuItem[]> {
  try {
    const response = await fetch('/api/menu');
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching menu data:', error);
    // Fallback data
    return [
      { label: "Home", href: "#" },
      { label: "Services", href: "#" },
      { label: "Contact", href: "#" },
    ];
  }
}

export function NavBar() {
  const [open, setOpen] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);
  const [menuData, setMenuData] = React.useState<MenuItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const data = await getMenuData();
        setMenuData(data);
      } catch (error) {
        console.error('Error fetching menu:', error);
        setError('Failed to load menu data');
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  const toggle = (key: string) => {
    setOpen((prev) => (prev === key ? null : key));
  };

  const renderDesktopMenu = (items: MenuItem[]) => {
    try {
      return items.map((item) => {
        if (item.subItems) {
          return (
            <NavigationMenuItem key={item.label}>
              {/* Parent label – clickable if href exists */}
              {item.href ? (
                <NavigationMenuLink
                  href={item.href}
                  icon={item.icon}
                  className="px-3 py-2 text-base font-medium flex items-center gap-3 rounded-md group"
                >
                  <span>{item.label}</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </NavigationMenuLink>
              ) : (
                <span
                  className="px-3 py-2 text-base font-medium flex items-center gap-3 rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground group"
                >
                  {item.icon && (() => {
                    try {
                      const IconComponent = getIcon(item.icon) as LucideIcon | undefined;
                      return IconComponent ? <IconComponent className="h-4 w-4" /> : null;
                    } catch (error) {
                      console.warn(`Icon "${item.icon}" not found`);
                      return null;
                    }
                  })()}
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </span>
              )}
              {/* Dropdown – opened via hover */}
              <NavigationMenuContent>
                {item.subItems.map((sub) =>
                  sub.subItems ? (
                    <NavigationSubMenu key={sub.label} trigger={sub.label} icon={sub.icon} href={sub.href}>
                      {sub.subItems.map((subSub) => (
                        <NavigationMenuLink key={subSub.label} href={subSub.href} icon={subSub.icon}>
                          {subSub.label}
                        </NavigationMenuLink>
                      ))}
                    </NavigationSubMenu>
                  ) : (
                    <NavigationMenuLink key={sub.label} href={sub.href} icon={sub.icon}>
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
              <NavigationMenuLink href={item.href} icon={item.icon}>
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        }
      });
    } catch (error) {
      console.error('Error rendering desktop menu:', error);
      return null;
    }
  };

  const renderMobileMenu = (items: MenuItem[]) => {
    try {
      return items.map((item) => {
      if (item.subItems) {
        return (
          <div key={item.label} className="flex flex-col">
            <div className="flex items-center gap-1">
              {item.href ? (
                <NavigationMenuLink href={item.href} icon={item.icon} onClick={() => setMobileOpen(false)} className="px-3 py-2 text-base font-medium">
                  {item.label}
                </NavigationMenuLink>
              ) : (
                <span className="px-3 py-2 text-base font-medium flex items-center gap-3">
                  {item.icon && (() => {
                    try {
                      const IconComponent = getIcon(item.icon) as LucideIcon | undefined;
                      return IconComponent ? <IconComponent className="h-4 w-4" /> : null;
                    } catch (error) {
                      console.warn(`Icon "${item.icon}" not found`);
                      return null;
                    }
                  })()}
                  {item.label}
                </span>
              )}
              <NavigationMenuTrigger
                onClick={() => toggle(item.label)}
                open={open === item.label}
                hasDropdown
                className="px-1"
                isMobile
                onMobileToggle={() => toggle(item.label)}
                closeMobileMenu={() => setMobileOpen(false)}
              >
                <span className="sr-only">Open submenu</span>
              </NavigationMenuTrigger>
            </div>
            {open === item.label && (
              <NavigationMenuContent open={open === item.label} isMobile>
                {item.subItems.map((sub) =>
                  sub.subItems ? (
                    <NavigationSubMenu key={sub.label} trigger={sub.label} icon={sub.icon} isMobile closeMobileMenu={() => setMobileOpen(false)}>
                      {sub.subItems.map((subSub) => (
                        <NavigationMenuLink key={subSub.label} href={subSub.href} icon={subSub.icon} onClick={() => setMobileOpen(false)}>
                          {subSub.label}
                        </NavigationMenuLink>
                      ))}
                    </NavigationSubMenu>
                  ) : (
                    <NavigationMenuLink key={sub.label} href={sub.href} icon={sub.icon} onClick={() => setMobileOpen(false)}>
                      {sub.label}
                    </NavigationMenuLink>
                  )
                )}
              </NavigationMenuContent>
            )}
          </div>
        );
      } else {
        return (
          <NavigationMenuLink
            key={item.label}
            href={item.href}
            icon={item.icon}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </NavigationMenuLink>
        );
      }
    });
    } catch (error) {
      console.error('Error rendering mobile menu:', error);
      return null;
    }
  };

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
        "w-full text-foreground  backdrop-blur supports-[backdrop-filter]:bg-background/60",
        "sticky top-0 z-50 transition-all duration-200",
        isSticky && "border-b border-border/40 shadow-sm"
      )}>
        <div className="flex items-center justify-between px-6 py-4">
          <div className="font-bold text-lg">ZenithFilings</div>

          {/* Desktop menu */}
          <div className="hidden md:flex">
            <NavigationMenuRoot>
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                  <span>Loading...</span>
                </div>
              ) : error ? (
                <div className="text-sm text-muted-foreground">Menu unavailable</div>
              ) : (
                renderDesktopMenu(menuData)
              )}
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
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
            <span>Loading...</span>
          </div>
        ) : error ? (
          <div className="text-sm text-muted-foreground">Menu unavailable</div>
        ) : (
          renderMobileMenu(menuData)
        )}

        <div className="mt-4 flex flex-col gap-2">
          <ActionButtons className="flex flex-col gap-2" />
        </div>
      </div>
    </>
  );
}
