"use client";

import * as React from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function NavigationMenuRoot({
  children,
  className,
}: React.ComponentPropsWithoutRef<"nav">) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={cn("hidden md:flex items-center gap-1", className)}>
        {children}
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 border-b bg-background">
        <div className="text-lg font-semibold">Logo</div>{" "}
        {/* Replace with your logo or text */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Open mobile menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background border-l shadow-lg overflow-y-auto">
            {/* Close button inside sidebar, top left */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 "
                aria-label="Close mobile menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile menu items */}
            <div className="flex flex-col px-4 pb-4 space-y-2">
              {React.Children.map(children, (child) =>
                React.isValidElement(child)
                  ? React.cloneElement(child, {
                      isMobile: true,
                      closeMobileMenu: () => setIsMobileMenuOpen(false),
                    } as any)
                  : child
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function NavigationMenuItem({
  children,
  className,
  isMobile,
  closeMobileMenu,
}: React.ComponentPropsWithoutRef<"div"> & {
  isMobile?: boolean;
  closeMobileMenu?: () => void;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    timeoutRef.current = setTimeout(() => setIsHovered(false), 150);
  };

  const handleMobileToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (isMobile) {
    return (
      <div className={cn("w-full", className)}>
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                isHovered: isOpen,
                isMobile: true,
                onMobileToggle: handleMobileToggle,
                closeMobileMenu,
              } as any)
            : child
        )}
      </div>
    );
  }

  return (
    <div
      className={cn("relative group", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { isHovered } as any)
          : child
      )}
    </div>
  );
}

export function NavigationMenuTrigger({
  children,
  onClick,
  open,
  isHovered,
  className,
  hasDropdown = true,
  isMobile,
  onMobileToggle,
  closeMobileMenu,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  open?: boolean;
  isHovered?: boolean;
  className?: string;
  hasDropdown?: boolean;
  isMobile?: boolean;
  onMobileToggle?: () => void;
  closeMobileMenu?: () => void;
}) {
  const isOpen = open || isHovered;

  const handleClick = () => {
    if (isMobile && hasDropdown) {
      onMobileToggle?.();
    } else {
      onClick?.();
      if (isMobile && !hasDropdown) {
        closeMobileMenu?.();
      }
    }
  };

  if (isMobile) {
    return (
      <button
        onClick={handleClick}
        className={cn(
          "flex items-center justify-between w-full px-3 py-3 text-sm font-medium transition-colors rounded-md",
          "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
          "focus:outline-none ",
          className
        )}
      >
        <span>{children}</span>
        {hasDropdown && (
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
        "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        isOpen && !hasDropdown && "bg-accent text-accent-foreground",
        className
      )}
    >
      {children}
      {hasDropdown && (
        <ChevronDown
          className={cn(
            "ml-1 h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      )}
    </button>
  );
}

export function NavigationMenuContent({
  children,
  open,
  isHovered,
  className,
  isMobile,
}: {
  children: React.ReactNode;
  open?: boolean;
  isHovered?: boolean;
  className?: string;
  isMobile?: boolean;
}) {
  const isVisible = open || isHovered;
  if (!isVisible) return null;

  if (isMobile) {
    return (
      <div className={cn("w-full mt-2 space-y-1", className)}>
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { isMobile: true } as any)
            : child
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "absolute left-0 top-full mt-2 w-48 rounded-md border bg-popover text-popover-foreground shadow-md z-50",
        "animate-in fade-in zoom-in-95 duration-200",
        className
      )}
    >
      <div className="py-1">{children}</div>
    </div>
  );
}

export function NavigationMenuLink({
  href,
  children,
  className,
  onClick,
  isMobile,
  closeMobileMenu,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isMobile?: boolean;
  closeMobileMenu?: () => void;
}) {
  const Component = href ? "a" : "button";

  const handleClick = () => {
    onClick?.();
    if (isMobile) {
      closeMobileMenu?.();
    }
  };

  if (isMobile) {
    return (
      <Component
        href={href}
        onClick={handleClick}
        className={cn(
          "block w-full text-left px-4 py-3 text-sm transition-colors rounded-md",
          "hover:bg-accent hover:text-accent-foreground",
          "focus:outline-none focus:bg-accent focus:text-accent-foreground",
          className
        )}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      href={href}
      onClick={handleClick}
      className={cn(
        "block w-full text-left px-3 py-2 text-sm transition-colors rounded-sm",
        "hover:bg-accent hover:text-accent-foreground",
        "focus:outline-none focus:bg-accent focus:text-accent-foreground",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function NavigationSubMenu({
  trigger,
  children,
  isMobile,
  closeMobileMenu,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  isMobile?: boolean;
  closeMobileMenu?: () => void;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [position, setPosition] = React.useState<"left" | "right">("right");
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const submenuRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);

    if (submenuRef.current) {
      const rect = submenuRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      const spaceRight = screenWidth - rect.right;
      const spaceLeft = rect.left;
      if (spaceRight < 200 && spaceLeft > 200) {
        setPosition("left");
      } else {
        setPosition("right");
      }
    }
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    timeoutRef.current = setTimeout(() => setIsHovered(false), 150);
  };

  const handleMobileToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="w-full">
        <div
          onClick={handleMobileToggle}
          className="flex w-full items-center justify-between px-4 py-3 text-sm transition-colors rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground focus:outline-none"
        >
          <span>{trigger}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </div>

        {isOpen && (
          <div className="flex flex-col w-full pl-4 mt-1 space-y-1 border-l border-muted">
            {React.Children.map(children, (child) =>
              React.isValidElement(child)
                ? React.cloneElement(child, {
                    isMobile: true,
                    closeMobileMenu,
                  } as any)
                : child
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={submenuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "flex w-full items-center justify-between px-3 py-2 text-sm transition-colors rounded-sm hover:bg-accent hover:text-accent-foreground cursor-pointer"
        )}
      >
        {trigger}
        <ChevronRight className="ml-1 h-4 w-4" />
      </div>

      {isHovered && (
        <div
          className={cn(
            "absolute top-0 w-48 rounded-md border bg-popover text-popover-foreground shadow-md z-50 animate-in fade-in zoom-in-95 duration-200",
            position === "right" ? "left-full ml-2" : "right-full mr-2"
          )}
        >
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
}
