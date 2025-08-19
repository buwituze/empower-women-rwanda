import type React from "react";
import HeroV2 from "@/components/HeroSection";
import { ProgramCard } from "@/components/proogram-card";
import { TestimonialSection } from "@/components/testimonial-section";
import { FAQSection } from "@/components/faq-section";
import Contact from "@/components/contact-section";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Target, Lightbulb, Heart } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Home",
  description:
    "Empowering Rwandan women through education, leadership, and entrepreneurship to lead in technology and business.",
};

export default function HomePage() {
  return (
    <>
      <HeroV2 />

      {/* Who We Are Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Creating a Rwanda where women play an equal role in leading
              economic and social development through education, leadership, and
              entrepreneurship.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  Breaking Barriers, Building Futures
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Empower Women Rwanda focuses on transforming the lives of
                  Rwandan women by breaking the barriers that prevent them from
                  participating fully in the country's economic development. We
                  provide comprehensive support through education, leadership
                  training, and entrepreneurship programs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Users className="h-8 w-8 text-blue-600 mb-2" />
                  <div className="font-semibold text-slate-900">
                    Community Focus
                  </div>
                  <div className="text-sm text-slate-600">
                    Serving underserved communities
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                  <div className="font-semibold text-slate-900">
                    Economic Impact
                  </div>
                  <div className="text-sm text-slate-600">
                    Reducing unemployment & poverty
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Women learning technology skills"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-4 mb-12">
            <div className="text-center">
              <h2 className="text-3xl text-center font-bold text-[#0b97d5] mb-2">
                Our Programs
              </h2>
              <p className="text-gray-300">
                Comprehensive training across four key sectors
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="bg-gradient-to-r from-[#f7ce04] to-[#0b97d5] border-none hover:border-[#0b97d5] items-center text-black hover:bg-[#0b97d5]/10"
            >
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProgramCard
              title="Agriculture Empowerment"
              description="Modern, sustainable techniques to increase productivity and access digital markets."
              href="/programs#agriculture"
              imageQuery="Rwanda%20modern%20farming%20women"
            />
            <ProgramCard
              title="Farming & Livestock"
              description="Poultry & small livestock management plus value‑added agri‑business skills."
              href="/programs#livestock"
              imageQuery="Rwanda%20women%20livestock%20poultry"
            />
            <ProgramCard
              title="Business & Entrepreneurship"
              description="Business fundamentals, finance, marketing, mentorship, and incubation."
              href="/programs#business"
              imageQuery="Rwanda%20women%20entrepreneurship%20training"
            />
            <ProgramCard
              title="Digital Business & E‑commerce"
              description="E‑commerce, digital marketing, and fintech to master the digital economy."
              href="/programs#digital"
              imageQuery="Rwanda%20women%20digital%20business"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <Contact />
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-lg font-semibold text-[#20603e] mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
