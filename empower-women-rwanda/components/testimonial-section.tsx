import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Marie Uwimana",
    role: "Agriculture Program Graduate",
    content:
      "The program transformed my farming practices. I now use modern techniques and have access to digital markets. My income has tripled!",
    image: "Rwanda%20woman%20farmer%20success",
    rating: 5,
  },
  {
    name: "Grace Mukamana",
    role: "Digital Business Program Graduate",
    content:
      "Learning e-commerce and digital marketing opened new opportunities. I now run a successful online store and help other women start theirs.",
    image: "Rwanda%20woman%20entrepreneur%20success",
    rating: 5,
  },
  {
    name: "Jeanne Nyirahabimana",
    role: "Business Program Graduate",
    content:
      "The mentorship and business training gave me confidence to start my own company. Today, I employ 15 women in my community.",
    image: "Rwanda%20woman%20business%20owner",
    rating: 5,
  },
];

export function TestimonialSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#20603e]/5 to-[#0b97d5]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#20603e] mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the women whose lives have been transformed through our
            programs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Join hundreds of women who have transformed their lives
          </p>
          <a
            href="/get-involved#apply"
            className="inline-flex items-center gap-2 bg-[#f7ce04] hover:bg-[#e0bc05] text-black px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  role,
  content,
  image,
  rating,
}: {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}) {
  return (
    <Card className="h-full border-[#20603e]/10 hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={`/abstract-geometric-shapes.png?height=60&width=60&query=${image}`}
            alt={name}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-[#20603e]">{name}</h3>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="size-4 fill-[#f7ce04] text-[#f7ce04]" />
          ))}
        </div>

        <div className="relative">
          <Quote className="absolute -top-2 -left-2 size-6 text-[#0b97d5]/20" />
          <p className="text-gray-700 italic pl-4">{content}</p>
        </div>
      </CardContent>
    </Card>
  );
}
