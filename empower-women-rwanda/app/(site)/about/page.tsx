import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Empower Women Rwanda — our mission, vision, approach, and leadership team.",
};

type Member = { name: string; role: string; imgQuery: string };

const team: Member[] = [
  {
    name: "Emmanuel Rwagasore (Emmy)",
    role: "Founder & Executive Director",
    imgQuery: "Founder%20portrait",
  },
  {
    name: "JP",
    role: "Operations Manager",
    imgQuery: "Operations%20manager%20portrait",
  },
  {
    name: "Andromaque",
    role: "Finance Director",
    imgQuery: "Finance%20director%20portrait",
  },
  {
    name: "Chancelline",
    role: "Marketing Director",
    imgQuery: "Marketing%20director%20portrait",
  },
  { name: "Vanson", role: "HR Director", imgQuery: "HR%20director%20portrait" },
  {
    name: "Benitha",
    role: "Monitoring & Evaluation Director",
    imgQuery: "Monitoring%20and%20evaluation%20portrait",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className=" bg-slate-900/90 py-10 mb-16">
        <header className="container mx-auto pr-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="pl-8">
              <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
              <p className=" text-gray-300 mb-6">
                Empower Women Rwanda is dedicated to unlocking the potential of
                women across Rwanda. We provide the comprehensive training,
                support, and mentorship they need to turn innovative ideas into
                thriving businesses, empowering them to become influential
                leaders and transform their communities.
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
            <div className="pl-20">
              <Image
                src="/woman in a field.png"
                width={600}
                height={400}
                alt="Community training with Rwandan women"
                className="w-full rounded-xl border-none object-cover shadow-lg"
              />
            </div>
          </div>
        </header>
      </section>
      <section className="container mx-auto px-6.5 mb-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Image
              src="/women-empowerment-1.jpg"
              width={640}
              height={440}
              alt="Community training with Rwandan women"
              className="w-full rounded-xl border-none object-cover shadow-lg"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-[#20603e] mb-6">
              About Empower Women Rwanda
            </h1>
            <p className=" text-gray-600 mb-6">
              Empower Women Rwanda is a non-profit social enterprise founded by
              Emmanuel Rwagasore that focuses on transforming the lives of
              Rwandan women by breaking barriers that prevent them from
              participating fully in the country's economic development.
            </p>
            <p className="text-gray-600">
              We provide comprehensive programs combining education, leadership
              training, entrepreneurship development, and economic support
              specifically designed to empower women in technology and business
              sectors.
            </p>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="bg-gradient-to-br from-[#20603e]/5 to-[#0b97d5]/5 py-16">
        <div className="container mx-auto px-0 pr-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white ml-7 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#20603e] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To promote women's empowerment in Rwanda through policy reform,
                fostering positive change, and advancing women's education and
                leadership to help them become future entrepreneurs and business
                owners.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0b97d5] mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To create a Rwanda where women play an equal role in leading
                economic and social development through education, leadership,
                and entrepreneurship, especially in technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Approach */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#20603e] mb-8 text-center">
          Our Approach
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#f7ce04] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-black">1</span>
            </div>
            <h3 className="text-xl font-semibold text-[#20603e] mb-3">
              Theory Phase
            </h3>
            <p className="text-gray-600">
              2 months of skills-based learning in business, technology, and
              leadership
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#0b97d5] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold text-[#20603e] mb-3">
              Practical Phase
            </h3>
            <p className="text-gray-600">
              6 months of hands-on implementation with mentorship support
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#20603e] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold text-[#20603e] mb-3">
              Ongoing Support
            </h3>
            <p className="text-gray-600">
              Community networks and continued guidance for long-term success
            </p>
          </div>
        </div>
      </section>
      {/* Impact Goal */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Our Impact Goal
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            We aim to reach 1 million women across Rwanda over five years,
            providing them with the tools, skills, and knowledge needed to
            contribute meaningfully to Rwanda's growing economy.
          </p>
          <div className="grid gap-6 sm:grid-cols-3 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0b97d5] mb-2">1M+</div>
              <div className="text-gray-300">Women to Empower</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f7ce04] mb-2">5</div>
              <div className="text-gray-300">Years Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#20603e] mb-2">30</div>
              <div className="text-gray-300">Districts Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#20603e] mb-8 text-center">
          Leadership Team
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl border-2 border-emerald-50 shadow-emerald-50 p-6 text-center hover:shadow-lg "
            >
              <Image
                src={`/abstract-geometric-shapes.png?height=200&width=200&query=${member.imgQuery}`}
                alt={member.name}
                width={200}
                height={200}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-[#20603e] mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
