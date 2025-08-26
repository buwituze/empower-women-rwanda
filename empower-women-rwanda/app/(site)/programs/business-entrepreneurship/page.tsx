import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ApplyForm } from "@/components/forms/apply-form";
import {
  Briefcase,
  Users,
  Target,
  TrendingUp,
  Calendar,
  DollarSign,
  MapPin,
  Lightbulb,
  Building,
  Network,
  Handshake,
} from "lucide-react";

export const metadata = {
  title: "Our Programs",
  description: "Explore our 8 month Business & Entrepreneurship programs.",
};

export default function BusinessEntrepreneurshipProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900/90 py-10 mb-16">
        <header className="container mx-auto pr-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="pl-8">
              <h1 className="text-4xl font-bold text-white mb-6">
                Business Entrepreneurship Program
              </h1>
              <p className="text-gray-300 font-bold mb-6">
                Build Your Business Empire
              </p>
              <p className="text-gray-300 mb-6">
                Transform your business ideas into thriving enterprises with
                comprehensive training, mentorship, and support. Join Rwanda's
                entrepreneurial revolution and build the business of your dreams
                with confidence and expertise.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-[#f7ce04] text-black hover:bg-[#e0bc05]"
                >
                  <Link href="#apply">Apply</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white bg-white/10 text-white hover:bg-white/20"
                >
                  <Link href="#learn-more">Learn more</Link>
                </Button>
              </div>
            </div>
            <div className="pl-20">
              <Image
                src="/placeholder-5j713.png"
                width={100}
                height={60}
                alt="Women entrepreneurs in business meeting"
                className="w-full rounded-xl border-none object-cover shadow-lg"
              />
            </div>
          </div>
        </header>
      </section>

      {/* Program Overview */}
      <section id="learn-more" className="py-0">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#20603e] mb-6">
                Empowering Female Entrepreneurs
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Supporting women to become successful in the business sector
                through comprehensive training, mentorship, and networking
                opportunities. Our program provides practical interventions that
                deliver long-term benefits for aspiring women entrepreneurs
                across all sectors.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">6</div>
                <h3 className="font-semibold text-lg mb-2">Months Training</h3>
                <p className="text-gray-600">
                  Comprehensive business development program
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$70</div>
                <h3 className="font-semibold text-lg mb-2">Startup Grant</h3>
                <p className="text-gray-600">
                  Initial funding to launch your business venture
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">30</div>
                <h3 className="font-semibold text-lg mb-2">
                  Districts Coverage
                </h3>
                <p className="text-gray-600">
                  Nationwide business support network
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Program Areas - 2x2 Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">
              Four Pillars of Business Success
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive approach covers every aspect of successful
              entrepreneurship
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Business Management Training */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <Briefcase className="h-8 w-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Business Management Training
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Master the fundamentals of running a successful business,
                    from planning to execution. Learn practical skills in areas
                    like food processing, handicrafts, and retail management.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Business plan development workshops</li>
                    <li>• Financial management and accounting</li>
                    <li>• Marketing and customer service excellence</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mentorship Programs */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Handshake className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Mentorship Programs
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Connect with successful female entrepreneurs in Rwanda and
                    overseas. Gain access to valuable business knowledge and
                    avoid common pitfalls through experienced guidance.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Pairing with experienced business leaders</li>
                    <li>• Mentorship circles and networking events</li>
                    <li>• Online platform connections globally</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Incubators */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                  <Building className="h-8 w-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Low-Cost Business Incubators
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Access shared resources including office space, equipment,
                    and mentoring in neighborhood incubators. Start your
                    business with lower costs and better growth opportunities.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Shared office spaces and equipment</li>
                    <li>• Partnership with local governments</li>
                    <li>• Community of like-minded entrepreneurs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* National Partnerships */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="bg-cyan-100 p-3 rounded-lg flex-shrink-0">
                  <Network className="h-8 w-8 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    National Export Connections
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Connect directly with Rwanda's National Agricultural Export
                    Board (NAEB) and other key institutions. Access export
                    opportunities and expand your business beyond local markets.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Direct connection to NAEB programs</li>
                    <li>• Export market access and training</li>
                    <li>• International business opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#20603e] mb-6">
                Build Your Business Future
              </h2>
              <p className="text-lg text-gray-600">
                Join successful women entrepreneurs who have transformed their
                lives through our program
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Business Growth Support
                </h3>
                <p className="text-gray-600">
                  Comprehensive support to scale your business successfully
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Lightbulb className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Innovation Training
                </h3>
                <p className="text-gray-600">
                  Learn cutting-edge business strategies and innovation
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Users className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Professional Networks
                </h3>
                <p className="text-gray-600">
                  Build lasting partnerships with entrepreneurs and mentors
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Ongoing Support
                </h3>
                <p className="text-gray-600">
                  Continuous mentorship and business development assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#20603e] mb-4">
                Ready to Launch Your Business?
              </h2>
              <p className="text-xl text-gray-600">
                Join our entrepreneurship program and turn your business dreams
                into reality
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <ApplyForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
