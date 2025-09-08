"use client";

import { useTransition, useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { applyAction } from "@/app/(site)/actions";
import { cn } from "@/lib/utils";

const programOptions = [
  { value: "default", label: "Select Program" },
  { value: "agriculture", label: "Agriculture Program" },
  { value: "farming", label: "Farming Program" },
  { value: "business", label: "Business & Entrepreneurship Program" },
  { value: "etrade", label: "E-trade and Digital Business Program" },
];

export function ApplyForm() {
  const { toast } = useToast();
  const [pending, start] = useTransition();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectProgram = (value: string, label: string) => {
    setSelectedProgram(label);
    setDropdownOpen(false);
    // Set the hidden input value
    const hiddenInput = document.querySelector(
      'input[name="interestArea"]'
    ) as HTMLInputElement;
    if (hiddenInput) {
      hiddenInput.value = value;
    }
  };

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        formData.set("context", "Application");
        start(async () => {
          const res = await applyAction(formData);
          if (res.ok) {
            toast({
              title: "Application submitted",
              description: "We'll contact you soon.",
            });
            form.reset();
            setSelectedProgram("");
          } else {
            toast({
              title: "Submission failed",
              description: res.error ?? "Please try again.",
            });
          }
        });
      }}
      className="rounded-xl border-2 border-gray-100 p-10"
    >
      <h3 className="mb-3 text-lg font-semibold text-[#20603e]">
        Application Form
      </h3>
      <div className="grid gap-4">
        <Input
          name="fullName"
          placeholder="Full Name"
          aria-label="Full Name"
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          aria-label="Email"
          required
        />
        <Input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          aria-label="Phone Number"
          required
        />
        <Input
          name="district"
          placeholder="District"
          aria-label="District"
          required
        />

        {/* Custom Dropdown - Same approach as navbar */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            className={cn(
              "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              !selectedProgram && "text-muted-foreground"
            )}
            onClick={toggleDropdown}
            aria-label="Select Program"
          >
            <span>{selectedProgram || "Select Program"}</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                dropdownOpen && "rotate-180"
              )}
            />
          </button>

          {/* Hidden input for form submission */}
          <input type="hidden" name="interestArea" required />

          {/* Dropdown - Positioned absolutely to avoid layout shifts */}
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 shadow-lg rounded-md z-50">
              <div className="py-1">
                {programOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#20603e] hover:bg-gray-50 transition-colors duration-150"
                    onClick={() => selectProgram(option.value, option.label)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <Textarea
          name="message"
          placeholder="Tell us about your goals"
          aria-label="Message"
          rows={4}
          required
        />
      </div>
      <Button
        disabled={pending}
        className="mt-4 bg-[#f7ce04] text-black hover:bg-[#e0bc05]"
      >
        {pending ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
