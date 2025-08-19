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
import { submitPartner } from "@/app/(site)/actions";

export function PartnerForm() {
  const { toast } = useToast();
  const [pending, start] = useTransition();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        start(async () => {
          const res = await submitPartner(formData);
          if (res.ok) {
            toast({
              title: "Thank you!",
              description: "We'll reach out to discuss partnership.",
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
      aria-label="Partner with us form"
    >
      <h3 className="mb-3 text-lg font-semibold text-[#20603e]">
        Partnership Form
      </h3>
      <div className="grid gap-4">
        <Input name="orgName" placeholder="Organization Name" required />
        <Input name="contactName" placeholder="Contact Person" required />
        <Input name="email" type="email" placeholder="Email Address" required />
        <Input name="phone" type="tel" placeholder="Phone Number" required />
        <Select name="partnershipType" defaultValue="Corporate">
          <SelectTrigger aria-label="Partnership Type">
            <SelectValue placeholder="Partnership Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Corporate">Corporate</SelectItem>
            <SelectItem value="NGO">NGO</SelectItem>
            <SelectItem value="Government">Government</SelectItem>
            <SelectItem value="Educational">Educational</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          name="message"
          placeholder="Describe your interests and how you'd like to collaborate"
          rows={4}
          required
        />
      </div>
      <Button
        disabled={pending}
        className="mt-4 bg-[#0b97d5] hover:bg-[#0a88bf]"
      >
        {pending ? "Sending..." : "Submit Partnership"}
      </Button>
    </form>
  );
}
