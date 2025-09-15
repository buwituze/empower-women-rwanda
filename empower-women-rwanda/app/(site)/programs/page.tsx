import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Heart,
  Briefcase,
  Smartphone,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  Target,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Our Programs",
  description:
    "Transform your future with our comprehensive training programs in Agriculture, Livestock, Business, and Digital Commerce. Choose your path to financial independence.",
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className=" bg-slate-900/90 py-10 mb-6">
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
                src="/placeholder-5j713.png"
                width={100}
                height={60}
                alt="Community training with Rwandan women"
                className="w-full rounded-xl border-none object-cover shadow-lg"
              />
            </div>
          </div>
        </header>
      </section>
      <section className="py-14">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-[#20603e] mb-6">
              Choose Your Path to Success
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Comprehensive 6-month training programs designed specifically for
              women. Each program includes hands-on training, mentorship,
              startup capital, and ongoing support.
            </p>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">6 Months</div>
                <div className="text-gray-900 text-sm">Training Duration</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">$70-100</div>
                <div className="text-gray-900 text-sm">Startup Grant</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">30</div>
                <div className="text-gray-900 text-sm">Districts Covered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Target className="h-8 w-8 text-[#f7ce04] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-gray-900 text-sm">Job-Ready Skills</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Programs Grid */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Four Pathways to Independence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the program that aligns with your interests and goals. Each
              offers comprehensive training, mentorship, and the tools you need
              to build a sustainable business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Agriculture Program */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-green-100 p-4 rounded-xl">
                    <Leaf className="h-10 w-10 text-green-600" />
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Modern Agriculture
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Transform your farming with sustainable techniques,
                  cooperative models, and digital market access. Increase yields
                  by up to 40% while reducing costs.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Sustainable farming techniques & crop rotation
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Cooperative farming & resource sharing
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Digital market platforms & direct sales
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Water management & irrigation systems
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 text-white group-hover:bg-green-700 transition-colors"
                >
                  <Link
                    href="/programs/agriculture"
                    className="flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Livestock Program */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-red-100 p-4 rounded-xl">
                    <Heart className="h-10 w-10 text-red-600" />
                  </div>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                    Quick ROI
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Livestock & Agri-Business
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Start with small-scale livestock farming and value-added
                  processing. Low startup costs with returns visible in 3-6
                  months.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Poultry, goat, pig & rabbit farming
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Food processing & value addition
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Veterinary support networks
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Microcredit access & savings groups
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-red-600 hover:bg-red-700 text-white group-hover:bg-red-700 transition-colors"
                >
                  <Link
                    href="/programs/livestock"
                    className="flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Business Program */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <Briefcase className="h-10 w-10 text-blue-600" />
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    High Growth
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Business & Entrepreneurship
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Turn your business ideas into thriving enterprises with
                  comprehensive training, mentorship, and access to established
                  business networks.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Business plan development & strategy
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Financial management & accounting
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Mentorship from successful entrepreneurs
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Business incubator support
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:bg-blue-700 transition-colors"
                >
                  <Link
                    href="/programs/business-entrepreneurship"
                    className="flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Digital Business Program */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-purple-100 p-4 rounded-xl">
                    <Smartphone className="h-10 w-10 text-purple-600" />
                  </div>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    Future Ready
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Digital Business & E-commerce
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Enter the digital economy with confidence. Build online
                  businesses, master e-commerce, and access global markets from
                  anywhere.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    E-commerce platform setup & management
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Digital marketing & social media
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Mobile payment systems integration
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Technology access & training centers
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white group-hover:bg-purple-700 transition-colors"
                >
                  <Link
                    href="/programs/digital-business"
                    className="flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Our Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Women Choose Our Programs
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Designed specifically for women, with practical support that
              addresses real challenges.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Proven Results
                </h3>
                <p className="text-gray-600 text-sm">
                  40% average income increase for graduates
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Community Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Strong networks of female entrepreneurs
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Financial Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Startup grants and microcredit access
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ongoing Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Mentorship that continues after graduation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 bg-slate-900/98 text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Choose your program and take the first step toward financial
              independence. Applications are open for the next cohort starting
              soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#f7ce04] text-black hover:bg-[#e0bc05] text-lg px-8 py-3"
              >
                <Link href="#programs">Choose Your Program</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#20603e] text-lg px-8 py-3"
              >
                <Link href="/contact">Get More Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
