"use client";

// one with eh shuffle

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  headline?: string;
  subheadline?: string;
};

export default function HeroV2({
  headline = "Empowering Rwandan Women to Lead in Business and Technology",
  subheadline = "Transforming the lives of Rwandan women through education, entrepreneurship, and leadership development",
}: Props) {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-slate-900" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
          aria-hidden
        />
      </div>

      <div className="relative container mx-auto px-4 py-16 sm:py-4 lg:py-0 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* LEFT: Content */}
          <div className="lg:col-span-7 text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {headline}
            </h1>
            <p className="mt-4 max-w-prose text-white/90 md:text-lg">
              {subheadline}
            </p>
            <div className="mt-13 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#f7ce04] text-black hover:bg-[#e0bc05]"
              >
                <Link href="/get-involved#apply">Apply for Programs</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white bg-white/10 text-white hover:bg-white/20"
              >
                <Link href="/get-involved#donate">Support Our Mission</Link>
              </Button>
            </div>
          </div>

          {/* RIGHT: Polaroid Shuffle */}
          <div className="lg:col-span-5 flex items-end  justify-end relative">
            <PhotoStack
              images={[
                "/woman in a field.png",
                "/farmer using tablet.jpg",
                "/livestock farmer.jpg",
                "happy women.jpg",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoStack({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative items-end w-120 h-130">
      <AnimatePresence>
        {images.map((src, i) => {
          // Figure out offset relative to current
          const offset = (i - index + images.length) % images.length;

          return (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={{
                opacity: offset === 0 ? 1 : 0.5,
                y: offset * 10,
                scale: offset === 0 ? 1 : 0.9,
                zIndex: images.length - offset,
                rotate: offset === 0 ? 0 : offset % 2 === 0 ? -3 : 3,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white flex items-end justify-end p-2 shadow-xl rounded-sm">
                <img
                  src={src}
                  alt=""
                  className="w-100 h-90 object-cover rounded-sm"
                />
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
