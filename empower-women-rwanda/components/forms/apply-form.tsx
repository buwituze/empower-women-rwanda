"use client";

import { useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { applyAction } from "@/app/(site)/actions";

export function ApplyForm() {
  const { toast } = useToast();
  const [pending, start] = useTransition();

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
        <Input
          name="interestArea"
          placeholder="Interest Area (e.g., Agriculture, Digital Business)"
          required
        />
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
