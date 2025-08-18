import type React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award, MapPin } from "lucide-react";

type Props = {
  headline?: string;
  subheadline?: string;
  founded?: string;
};

export default function HeroV2({
  headline = "Empower Her Future Through Doing the Right Things",
  subheadline = "Transforming the lives of Rwandan women through education, entrepreneurship, and leadership development",
  founded = "Founded: January 15, 2024",
}: Props) {
  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen overflow-hidden bg-slate-900"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#f7ce04]/20 px-4 py-2 text-sm font-medium text-[#f7ce04] mb-6">
              <Award className="size-4" />
              {founded}
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {headline}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#f7ce04] text-black hover:bg-[#e0bc05] font-semibold"
              >
                <Link
                  href="/get-involved#apply"
                  className="inline-flex items-center gap-2"
                >
                  Apply for Programs
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-white/10 text-white hover:bg-white/20"
              >
                <Link href="/get-involved#donate">Support Our Mission</Link>
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard
                icon={<Target className="size-6" />}
                title="Target by 2027"
                value="1,000,000+"
                helper="Women empowered"
              />
              <StatCard
                icon={<Users className="size-6" />}
                title="Program Length"
                value="8 months"
                helper="Theory + Practice"
              />
              <StatCard
                icon={<Award className="size-6" />}
                title="Startup Grant"
                value="$70"
                helper="Per participant"
              />
              <StatCard
                icon={<MapPin className="size-6" />}
                title="Coverage"
                value="30"
                helper="Districts in Rwanda"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  title = "Title",
  value = "Value",
  helper = "Helper",
}: {
  icon: React.ReactNode;
  title?: string;
  value?: string;
  helper?: string;
}) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-sm hover:bg-white/15 transition-colors">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-[#f7ce04]">{icon}</div>
        <div className="text-sm font-medium text-white/80">{title}</div>
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm text-white/70">{helper}</div>
    </div>
  );
}
