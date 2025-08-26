"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

      <div className="relative container mx-auto px-4 py-10 sm:py-4 lg:py-0 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* LEFT: Content */}
          <div className="lg:col-span-7 text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[50px]">
              {headline}
            </h1>
            <p className="mt-9 max-w-prose text-white/90 md:text-lg">
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

          {/* RIGHT: Enhanced Photo Stack */}
          <div className="lg:col-span-5 -mt-10 flex items-center justify-center relative">
            <PhotoStack
              images={[
                "/woman in a field.png",
                "/farmer using tablet.jpg",
                "/livestock farmer.jpg",
                "/happy women.jpg",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoStack({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextImage = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [images.length, isAnimating]);

  const prevImage = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [images.length, isAnimating]);

  const goToImage = useCallback(
    (index: number) => {
      if (isAnimating || index === currentIndex) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 800);
    },
    [currentIndex, isAnimating]
  );

  // Auto-advance images
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, [nextImage, autoPlay]);

  const handleUserInteraction = () => {
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <div className="relative w-90 h-100">
      {/* Navigation buttons */}
      <button
        onClick={() => {
          handleUserInteraction();
          prevImage();
        }}
        className="absolute -left-11 top-1/2 -translate-y-1/2 z-50 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 hover:scale-110"
        disabled={isAnimating}
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={() => {
          handleUserInteraction();
          nextImage();
        }}
        className="absolute -right-11 top-1/2 -translate-y-1/2 z-50 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 hover:scale-110"
        disabled={isAnimating}
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Photo stack */}
      <div className="relative w-full h-full cursor-pointer">
        <AnimatePresence mode="wait">
          {images.map((src, i) => {
            const isActive = i === currentIndex;
            const isPrev =
              i === (currentIndex - 1 + images.length) % images.length;
            const isNext = i === (currentIndex + 1) % images.length;

            if (!isActive && !isPrev && !isNext) return null;

            return (
              <motion.div
                key={`${src}-${currentIndex}`}
                initial={
                  isActive
                    ? {
                        x: 200,
                        y: -20,
                        rotate: 5,
                        scale: 0.9,
                        zIndex: 10,
                        opacity: 0.8,
                      }
                    : false
                }
                animate={{
                  x: isActive ? 0 : isPrev ? -80 : isNext ? 80 : 0,
                  y: isActive ? 0 : isPrev ? 10 : isNext ? 10 : 0,
                  rotate: isActive ? 0 : isPrev ? -3 : isNext ? 3 : 0,
                  scale: isActive ? 1 : 0.85,
                  zIndex: isActive ? 30 : isPrev ? 20 : isNext ? 10 : 0,
                  opacity: isActive ? 1 : 0.6,
                }}
                exit={{
                  x: -200,
                  y: 20,
                  rotate: -5,
                  scale: 0.9,
                  opacity: 0,
                  transition: { duration: 0.6, ease: "easeInOut" },
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  x: { type: "spring", stiffness: 100, damping: 20 },
                  rotate: { duration: 1 },
                }}
                className="absolute inset-0 flex items-center justify-center"
                onClick={() => {
                  if (isActive) {
                    handleUserInteraction();
                    nextImage();
                  } else {
                    handleUserInteraction();
                    goToImage(i);
                  }
                }}
              >
                <div className="bg-white p-1 shadow-2xl rounded-lg hover:shadow-3xl transition-shadow duration-300 transform">
                  <img
                    src={src}
                    alt=""
                    className="w-90 h-100 object-cover rounded-md"
                    draggable={false}
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Indicator dots */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              handleUserInteraction();
              goToImage(i);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "bg-[#f7ce04] scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
