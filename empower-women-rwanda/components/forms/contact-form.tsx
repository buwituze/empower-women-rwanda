"use client";

import { useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { submitContact } from "@/app/(site)/actions";

export function ContactForm() {
  const { toast } = useToast();
  const [pending, start] = useTransition();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        start(async () => {
          const res = await submitContact(formData);
          if (res.ok) {
            toast({
              title: "Message sent",
              description: "We'll get back to you soon.",
            });
            form.reset();
          } else {
            toast({
              title: "Submission failed",
              description: res.error ?? "Please try again.",
              variant: "destructive",
            });
          }
        });
      }}
      className="rounded-xl border p-4"
      aria-label="Contact form"
    >
      <h3 className="mb-3 text-lg font-semibold text-[#20603e]">
        Contact Form
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
        <Select name="interestArea" defaultValue="Program Application">
          <SelectTrigger aria-label="Interest Area">
            <SelectValue placeholder="Interest Area" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Program Application">
              Program Application
            </SelectItem>
            <SelectItem value="Partnership">Partnership</SelectItem>
            <SelectItem value="Donation">Donation</SelectItem>
            <SelectItem value="Volunteering">Volunteering</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          name="message"
          placeholder="Your message"
          aria-label="Message"
          rows={4}
          required
        />
        <Select name="preferredContact" defaultValue="Email">
          <SelectTrigger aria-label="Preferred Contact Method">
            <SelectValue placeholder="Preferred Contact Method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Email">Email</SelectItem>
            <SelectItem value="Phone">Phone</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        disabled={pending}
        className="mt-4 bg-[#f7ce04] text-black hover:bg-[#e0bc05]"
      >
        {pending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
