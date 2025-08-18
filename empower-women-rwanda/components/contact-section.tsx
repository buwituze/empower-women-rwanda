import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#20603e] mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your future or support our mission? We're here to
            help.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <ContactCard
            icon={<Mail className="size-6 text-[#0b97d5]" />}
            title="Email Us"
            content="empowerwomenrw@gmail.com"
            href="mailto:empowerwomenrw@gmail.com"
          />
          <ContactCard
            icon={<Phone className="size-6 text-[#f7ce04]" />}
            title="Call Us"
            content="+250 780 325 858"
            href="tel:+250780325858"
          />
          <ContactCard
            icon={<MapPin className="size-6 text-[#20603e]" />}
            title="Visit Us"
            content="Kigali, Rwanda"
            href="#"
          />
          <ContactCard
            icon={<Clock className="size-6 text-[#0b97d5]" />}
            title="Office Hours"
            content="Mon-Fri: 8AM-5PM"
            href="#"
          />
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0b97d5] hover:bg-[#0a88bf] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Send Us a Message
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  content,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  href: string;
}) {
  const CardWrapper = href === "#" ? "div" : Link;

  return (
    <CardWrapper
      href={href === "#" ? undefined : href}
      className={href !== "#" ? "block" : ""}
    >
      <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-6 text-center">
          <div className="mb-4 flex justify-center">{icon}</div>
          <h3 className="text-lg font-semibold text-[#20603e] mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{content}</p>
        </CardContent>
      </Card>
    </CardWrapper>
  );
}
