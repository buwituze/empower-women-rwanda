import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ApplyForm } from "@/components/forms/apply-form";
import {
  Leaf,
  Users,
  Smartphone,
  Droplets,
  TrendingUp,
  Target,
  Calendar,
  DollarSign,
  MapPin,
} from "lucide-react";

export default function AgricultureProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900/90 py-10 mb-16">
        <header className="container mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="pl-8">
              <h1 className="text-4xl font-bold text-white mb-6">
                Agriculture Program
              </h1>
              <p className="text-gray-300 font-bold mb-6">
                Cultivating Success Through Innovation
              </p>
              <p className="text-gray-300 mb-6">
                Transform your farming practices with modern techniques,
                sustainable approaches, and digital market access. Join Rwanda's
                agricultural revolution and increase your income by up to 40%.
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
                alt="Women farmers learning modern techniques"
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
                Why Agriculture Matters
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Agriculture employs over 70% of Rwandan women, particularly in
                rural areas. Our program introduces high-impact, practical
                interventions that boost productivity, sustainability, and
                market access for women farmers across all 30 districts of
                Rwanda.
              </p>
            </div>

            {/* Stats Cards - Simplified */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">8</div>
                <h3 className="font-semibold text-lg mb-2">Months Training</h3>
                <p className="text-gray-600">
                  Comprehensive program covering all aspects of modern farming
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$70</div>
                <h3 className="font-semibold text-lg mb-2">
                  Grant per Participant
                </h3>
                <p className="text-gray-600">
                  Financial support to kickstart your agricultural journey
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
                  Nationwide program reaching every corner of Rwanda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Program Areas - 2x2 Grid with Full Width */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">
              Four Pillars of Success
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive approach covers every aspect of modern
              agriculture
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Modern Farming Techniques */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Modern Farming Techniques
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Master sustainable farming practices, crop rotation, organic
                    fertilizers, and integrated pest management to boost your
                    agricultural output without heavy financial investment.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Hands-on workshops in rural communities</li>
                    <li>
                      • Partnership with Rwanda Institute of Conservation
                      Agriculture (RICA)
                    </li>
                    <li>• Mobile education units for remote areas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cooperative Farming */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Cooperative Farming
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Join forces with other women farmers to pool resources,
                    share costs, and increase bargaining power. Learn
                    cooperative management and access group lending
                    opportunities.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Reduced individual farming costs</li>
                    <li>• Shared equipment and labor resources</li>
                    <li>• Group access to markets and buyers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Digital Market Access */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                  <Smartphone className="h-8 w-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Digital Market Access
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Connect directly with buyers through mobile technology.
                    Bypass middlemen and access urban markets, restaurants, and
                    grocery stores for better prices and consistent sales.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Mobile app training for direct sales</li>
                    <li>• Connection to urban grocery stores</li>
                    <li>• Restaurant and bulk buyer partnerships</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Water Management */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="bg-cyan-100 p-3 rounded-lg flex-shrink-0">
                  <Droplets className="h-8 w-8 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Water Management
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Learn affordable irrigation techniques including rainwater
                    harvesting and low-cost drip systems. Extend your growing
                    seasons and cultivate crops year-round.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Rainwater harvesting systems</li>
                    <li>• Low-cost drip irrigation setup</li>
                    <li>• Year-round cultivation techniques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits - Simplified */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#20603e] mb-6">
                Transform Your Future
              </h2>
              <p className="text-lg text-gray-600">
                Join thousands of women who have already transformed their lives
                through our program
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  40% Income Increase
                </h3>
                <p className="text-gray-600">
                  Average income boost for program graduates
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Year-Round Harvest
                </h3>
                <p className="text-gray-600">
                  Extend growing seasons with proper irrigation
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Users className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Stronger Networks
                </h3>
                <p className="text-gray-600">
                  Build lasting partnerships with other farmers
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Smartphone className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Direct Market Access
                </h3>
                <p className="text-gray-600">
                  Bypass middlemen and increase profits
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section - Clean Design */}
      <section id="apply" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#20603e] mb-4">
                Ready to Transform Your Farm?
              </h2>
              <p className="text-xl text-gray-600">
                Join our agriculture program and start your journey to financial
                independence
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
