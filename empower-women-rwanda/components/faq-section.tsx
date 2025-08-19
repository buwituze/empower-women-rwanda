import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    question: "Who can apply for the programs?",
    answer:
      "Rwandan women aged 18-45 who are motivated to start or grow a business and can commit to our 8-month program.",
  },
  {
    question: "How much does the program cost?",
    answer:
      "All our programs are completely free. We also provide a $70 startup grant to each participant.",
  },
  {
    question: "Where are programs offered?",
    answer:
      "We operate in Kigali and are expanding to all 30 districts of Rwanda, with special focus on rural areas.",
  },
  {
    question: "What sectors do you focus on?",
    answer:
      "Agriculture, farming & livestock, business & entrepreneurship, and digital business & e-commerce.",
  },
  {
    question: "How long is the program?",
    answer:
      "8 months total - 2 months theory and 6 months practical implementation.",
  },
];

export function FAQSection() {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#20603e] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our programs
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-[#20603e]/10"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Have more questions?{" "}
              <span>
                {" "}
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-[#0b97d5] hover:text-[#0a88bf] font-medium"
                >
                  Reach out to us
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
