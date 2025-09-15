import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ApplyForm } from "@/components/forms/apply-form";
import {
  Heart,
  Users,
  Smartphone,
  Package,
  TrendingUp,
  Target,
  Calendar,
  DollarSign,
  MapPin,
  Coins,
} from "lucide-react";

export const metadata = {
  title: "Our Programs",
  description: "Explore our 8 month Livestock Farming programs.",
};

export default function LivestockProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900/90 py-10 mb-16">
        <header className="container mx-auto pr-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="pl-8">
              <h1 className="text-4xl font-bold text-white mb-6">
                Livestock Farming Program
              </h1>
              <p className="text-gray-300 font-bold mb-6">
                Building Sustainable Enterprises Through Animal Husbandry
              </p>
              <p className="text-gray-300 mb-6">
                Start your journey in livestock farming and value-added
                agri-business. Begin with minimal capital, see quick returns,
                and scale up your enterprise over the years into a thriving,
                sustainable business.
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
                src="/livestock farming.jpg"
                width={600}
                height={400}
                alt="Women in livestock and agri-business"
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
                Why Livestock & Agri-Business Matter
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Small-scale livestock farming offers women a proven pathway to
                financial independence with low startup costs and quick returns.
                Our comprehensive program combines animal husbandry with
                value-added processing, strategic partnerships, and growth
                planning to help you build scalable enterprises that expand over
                the years.
              </p>
            </div>

            {/* Stats Cards - Simplified */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">6</div>
                <h3 className="font-semibold text-lg mb-2">Months Training</h3>
                <p className="text-gray-600">
                  Intensive program covering livestock management and business
                  development
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  $100
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Starter Capital Grant
                </h3>
                <p className="text-gray-600">
                  Initial funding to purchase livestock and basic equipment
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coins className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">3-6</div>
                <h3 className="font-semibold text-lg mb-2">Months ROI</h3>
                <p className="text-gray-600">
                  Quick return on investment with small-scale livestock farming
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
              Three Pillars of Success
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive approach to livestock farming and agri-business
              development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Poultry and Livestock Farming */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Poultry & Livestock Farming
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Master small-scale animal farming with chickens, goats,
                    pigs, and rabbits. Through our strategic partnerships with
                    local cooperatives, access affordable livestock and
                    comprehensive veterinary support to build enterprises that
                    grow from small ventures into profitable, sustainable
                    businesses.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Affordable livestock access through cooperative
                      partnerships
                    </li>
                    <li>• Professional veterinary support network</li>
                    <li>• Animal health and disease prevention training</li>
                    <li>• Breeding and reproduction management</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Value-Added Agri-Businesses */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                  <Package className="h-8 w-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Value-Added Agri-Business
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Transform raw agricultural products into higher-value goods
                    and multiply your profits. Through partnerships with
                    agro-industries and government programs, learn food
                    processing, certification, and cost-effective packaging
                    using local materials to maximize your competitive
                    advantage.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Government-supported processing training programs</li>
                    <li>• Food safety and product certification</li>
                    <li>• Local packaging solutions for cost efficiency</li>
                    <li>• Direct partnership with agro-industry buyers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Microcredit for Small Farming Ventures - Full Width */}
            <div className="bg-white rounded-lg p-8 shadow-sm lg:col-span-2">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Microcredit & Financial Support
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Access strategic financing through established microfinance
                    partnerships and women-centered savings groups. Learn smart
                    financial management and profit reinvestment strategies to
                    continuously scale your farming ventures from small startups
                    to thriving enterprises.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-2 text-gray-600">
                      <li>• Established microfinance partnerships</li>
                      <li>• Low-risk equipment financing</li>
                      <li>• Women-centered savings groups</li>
                    </ul>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Strategic profit reinvestment planning</li>
                      <li>• Business scaling and growth strategies</li>
                      <li>• Long-term financial independence path</li>
                    </ul>
                  </div>
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
                Build Your Agricultural Enterprise
              </h2>
              <p className="text-lg text-gray-600">
                Join women entrepreneurs creating sustainable income through
                livestock and agri-business
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Scalable Growth
                </h3>
                <p className="text-gray-600">
                  Build enterprises that expand from small ventures to thriving
                  businesses
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Food Security
                </h3>
                <p className="text-gray-600">
                  Provide reliable food source for your family
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Package className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Value Addition
                </h3>
                <p className="text-gray-600">
                  Higher profits through processed goods
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Coins className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Low Startup Cost
                </h3>
                <p className="text-gray-600">
                  Begin with minimal capital investment
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
                Ready to Start Your Livestock Enterprise?
              </h2>
              <p className="text-xl text-gray-600">
                Join our livestock and agri-business program and build your path
                to financial independence
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
