"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

// Dynamic navigation configuration
const navigationConfig = {
  logo: {
    src: "/EMPOWER.png", // Replace with your actual logo path
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
    { href: "/news", label: "Blog" },
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

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Fixed navbar with proper z-index */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-6">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <div className="relative flex items-center">
              <Image
                src={navigationConfig.logo.src}
                alt={navigationConfig.logo.alt}
                width={navigationConfig.logo.width}
                height={navigationConfig.logo.height}
                className="h-40 w-30 object-contain"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
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

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigationConfig.mainNav.map((item) => {
              if (item.dropdown) {
                return (
                  <DropdownMenu key={item.href}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={cn(
                          "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-[#0b97d5] rounded-md hover:bg-gray-50",
                          isActiveLink(item.href)
                            ? "text-[#0b97d5] bg-[#0b97d5]/5"
                            : "text-gray-700"
                        )}
                        aria-label={item.label}
                      >
                        {item.label}
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="min-w-64 mt-1 border shadow-lg bg-white/95 backdrop-blur-md"
                      sideOffset={4}
                    >
                      {item.dropdown.map((subItem) => (
                        <DropdownMenuItem key={subItem.href} asChild>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#0b97d5] hover:bg-[#0b97d5]/5 transition-colors duration-200"
                          >
                            {subItem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
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

          {/* Desktop Action Buttons */}
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

          {/* Mobile Menu Toggle */}
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

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="border-t bg-white/95 backdrop-blur-md lg:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navigationConfig.mainNav.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.href} className="space-y-1">
                      <div className="text-xs font-semibold uppercase text-gray-500 px-3 py-2">
                        {item.label}
                      </div>
                      {item.dropdown.map((subItem) => (
                        <MobileLink
                          key={subItem.href}
                          href={subItem.href}
                          onClick={closeMobileMenu}
                          label={subItem.label}
                          isActive={isActiveLink(subItem.href)}
                        />
                      ))}
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

              {/* Mobile Action Buttons */}
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

// Mobile Link Component
interface MobileLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

function MobileLink({ href, label, onClick, isActive }: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "block rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-200",
        isActive
          ? "text-[#0b97d5] bg-[#0b97d5]/5 border-l-2 border-[#0b97d5]"
          : "text-gray-700 hover:text-[#0b97d5] hover:bg-gray-50"
      )}
    >
      {label}
    </Link>
  );
}
