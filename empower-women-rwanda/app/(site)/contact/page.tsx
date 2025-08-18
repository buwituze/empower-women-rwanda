import { ContactForm } from "@/components/forms/contact-form";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Empower Women Rwanda. Email, phone, and office hours for support, donations, and partnerships.",
};

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-[#20603e]">Get in Touch</h1>
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-muted-foreground">
            Ready to transform your future or support our mission?
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <strong>Email:</strong> empowerwomenrw@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +250 780 325 858 | +250 728 446 304
            </li>
            <li>
              <strong>Location:</strong> Kigali, Rwanda
            </li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-[#20603e]">
            Office Hours
          </h2>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
            <li>Saturday: 9:00 AM - 1:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
