import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  headline?: string;
  subheadline?: string;
  founded?: string;
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
      {/* Background: layered gradients with subtle grid and curve */}
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

      <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 text-white">
            <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {headline}
            </h1>
            <p className="mt-4 max-w-prose text-white/90 md:text-lg">
              {subheadline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
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

          {/* Floating highlight cards */}
          <div className="lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Highlight
                title="Target by 2027"
                value="1,000,000+"
                helper="Women empowered"
              />
              <Highlight
                title="Program Length"
                value="8 months"
                helper="2 months theory + 6 months practice"
              />
              <Highlight
                title="Startup Grant"
                value="$70"
                helper="Per participant"
              />
              <Highlight
                title="Coverage"
                value="30"
                helper="Districts across Rwanda"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlight({
  title = "Title",
  value = "Value",
  helper = "Helper",
}: {
  title?: string;
  value?: string;
  helper?: string;
}) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur">
      <div className="text-xs uppercase tracking-wide text-white/80">
        {title}
      </div>
      <div className="mt-1 text-2xl font-bold">{value}</div>
      <div className="text-sm text-white/80">{helper}</div>
    </div>
  );
}
