import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const metadata = {
  title: "FAQ",
  description:
    "Answers to frequently asked questions about applications, program costs, locations, sectors, and duration.",
};

export default function FAQPage() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-[#20603e]">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="mt-6 w-full">
        <AccordionItem value="q1">
          <AccordionTrigger>Who can apply for the programs?</AccordionTrigger>
          <AccordionContent>
            Rwandan women aged 18-45 who are motivated to start or grow a
            business and can commit to our 8-month program.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger>How much does the program cost?</AccordionTrigger>
          <AccordionContent>
            All our programs are completely free. We also provide a $70 startup
            grant to each participant.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger>Where are programs offered?</AccordionTrigger>
          <AccordionContent>
            We operate in Kigali and are expanding to all 30 districts of
            Rwanda, with special focus on rural areas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q4">
          <AccordionTrigger>What sectors do you focus on?</AccordionTrigger>
          <AccordionContent>
            Agriculture, farming & livestock, business & entrepreneurship, and
            digital business & e-commerce.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q5">
          <AccordionTrigger>How long is the program?</AccordionTrigger>
          <AccordionContent>
            8 months total - 2 months theory and 6 months practical
            implementation.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
