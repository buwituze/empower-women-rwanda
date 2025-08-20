"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationConfig = {
  logo: {
    src: "/EMPOWER.png",
    alt: "Empower Women Rwanda",
    width: 120,
    height: 32,
    fallbackText: "Empower Women Rwanda",
  },
  mainNav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    {
      href: "/programs",
      label: "Our Programs",
      dropdown: [
        { href: "/programs/agriculture", label: "Agriculture Empowerment" },
        { href: "/programs/farming-livestock", label: "Farming & Livestock" },
        {
          href: "/programs/business-entrepreneurship",
          label: "Business & Entrepreneurship",
        },
        {
          href: "/programs/digital-business",
          label: "Digital Business & E‑commerce",
        },
      ],
    },
    { href: "/get-involved", label: "Get Involved" },
    // { href: "/news", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ],
  actionButtons: [
    {
      href: "/apply",
      label: "Apply",
      variant: "primary",
      className: "bg-[#f7ce04] text-black hover:bg-[#e0bc05] border-0",
    },
    {
      href: "/donate",
      label: "Donate",
      variant: "outline",
      className:
        "border-[#0b97d5] text-[#0b97d5] hover:bg-[#0b97d5]/10 bg-transparent",
    },
  ],
};

const brandColors = {
  primary: "#0b97d5",
  secondary: "#f7ce04",
  accent: "#e0bc05",
};

export default function NavBar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProgramsOpen(false);
  };

  const toggleMobilePrograms = () => {
    setMobileProgramsOpen(!mobileProgramsOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <div className="relative flex items-center">
              <Image
                src={navigationConfig.logo.src}
                alt={navigationConfig.logo.alt}
                width={navigationConfig.logo.width}
                height={navigationConfig.logo.height}
                className="h-40 w-30 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-lg font-bold text-[${brandColors.primary}]">${navigationConfig.logo.fallbackText}</span>`;
                  }
                }}
                priority
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigationConfig.mainNav.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.href} className="relative">
                    <button
                      className={cn(
                        "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-[#0b97d5] rounded-md hover:bg-gray-50",
                        isActiveLink(item.href)
                          ? "text-[#0b97d5] bg-[#0b97d5]/5"
                          : "text-gray-700",
                        desktopDropdownOpen && "text-[#0b97d5] bg-[#0b97d5]/5"
                      )}
                      aria-label={item.label}
                      onMouseEnter={() => setDesktopDropdownOpen(true)}
                      onMouseLeave={() => setDesktopDropdownOpen(false)}
                      onClick={() =>
                        setDesktopDropdownOpen(!desktopDropdownOpen)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          desktopDropdownOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Desktop Dropdown - Positioned absolutely to avoid layout shifts */}
                    {desktopDropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 min-w-64 bg-white/95 backdrop-blur-md border shadow-lg rounded-md z-50"
                        onMouseEnter={() => setDesktopDropdownOpen(true)}
                        onMouseLeave={() => setDesktopDropdownOpen(false)}
                      >
                        <div className="py-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#0b97d5] hover:bg-[#0b97d5]/5 transition-colors duration-200"
                              onClick={() => setDesktopDropdownOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-[#0b97d5] rounded-md hover:bg-gray-50",
                    isActiveLink(item.href)
                      ? "text-[#0b97d5] bg-[#0b97d5]/5"
                      : "text-gray-700"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden gap-3 lg:flex">
            {navigationConfig.actionButtons.map((button) => (
              <Button
                key={button.href}
                asChild
                variant={button.variant as "default" | "outline"}
                size="sm"
                className={cn("transition-all duration-200", button.className)}
              >
                <Link href={button.href}>{button.label}</Link>
              </Button>
            ))}
          </div>

          <Button
            size="sm"
            variant="ghost"
            className="lg:hidden p-2"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t bg-white/95 backdrop-blur-md lg:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navigationConfig.mainNav.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.href} className="space-y-1">
                      <button
                        onClick={toggleMobilePrograms}
                        className={cn(
                          "flex items-center justify-between w-full text-left rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-200",
                          isActiveLink(item.href)
                            ? "text-[#0b97d5] bg-[#0b97d5]/5 border-l-2 border-[#0b97d5]"
                            : "text-gray-700 hover:text-[#0b97d5] hover:bg-gray-50"
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            mobileProgramsOpen && "rotate-180"
                          )}
                        />
                      </button>

                      {/* Mobile Programs Dropdown */}
                      {mobileProgramsOpen && (
                        <div className="ml-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                          {item.dropdown.map((subItem) => (
                            <MobileLink
                              key={subItem.href}
                              href={subItem.href}
                              onClick={closeMobileMenu}
                              label={subItem.label}
                              isActive={isActiveLink(subItem.href)}
                              isSubItem={true}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    label={item.label}
                    isActive={isActiveLink(item.href)}
                  />
                );
              })}

              <div className="pt-4 space-y-2">
                {navigationConfig.actionButtons.map((button) => (
                  <Button
                    key={button.href}
                    asChild
                    variant={button.variant as "default" | "outline"}
                    size="sm"
                    className={cn(
                      "w-full transition-all duration-200",
                      button.className
                    )}
                  >
                    <Link href={button.href} onClick={closeMobileMenu}>
                      {button.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

interface MobileLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  isActive?: boolean;
  isSubItem?: boolean;
}

function MobileLink({
  href,
  label,
  onClick,
  isActive,
  isSubItem = false,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "block rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-200",
        isSubItem && "text-xs pl-4",
        isActive
          ? "text-[#0b97d5] bg-[#0b97d5]/5 border-l-2 border-[#0b97d5]"
          : "text-gray-700 hover:text-[#0b97d5] hover:bg-gray-50"
      )}
    >
      {label}
    </Link>
  );
}
