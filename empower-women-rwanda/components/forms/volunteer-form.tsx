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
import { submitVolunteer } from "@/app/(site)/actions";

export function VolunteerForm() {
  const { toast } = useToast();
  const [pending, start] = useTransition();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        start(async () => {
          const res = await submitVolunteer(formData);
          if (res.ok) {
            toast({
              title: "Thanks for volunteering!",
              description: "We will contact you soon.",
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
      className="rounded-xl border p-4"
      aria-label="Volunteer form"
    >
      <h3 className="mb-3 text-lg font-semibold text-[#20603e]">
        Volunteer Form
      </h3>
      <div className="grid gap-4">
        <Input name="fullName" placeholder="Full Name" required />
        <Input name="email" type="email" placeholder="Email Address" required />
        <Input name="phone" type="tel" placeholder="Phone Number" required />
        <Select name="volunteerArea" defaultValue="Training facilitation">
          <SelectTrigger aria-label="Volunteer Area">
            <SelectValue placeholder="Volunteer Area" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Training facilitation">
              Training facilitation
            </SelectItem>
            <SelectItem value="Mentorship">Mentorship</SelectItem>
            <SelectItem value="Administration">Administration</SelectItem>
            <SelectItem value="Community outreach">
              Community outreach
            </SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          name="message"
          placeholder="Tell us how you'd like to support"
          rows={4}
          required
        />
      </div>
      <Button
        disabled={pending}
        className="mt-4 bg-[#20603e] hover:bg-[#1b5234]"
      >
        {pending ? "Sending..." : "Submit Volunteer Interest"}
      </Button>
    </form>
  );
}
