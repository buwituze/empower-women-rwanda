import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ApplyForm } from "@/components/forms/apply-form";
import {
  Smartphone,
  Monitor,
  CreditCard,
  Share2,
  Target,
  DollarSign,
  MapPin,
  TrendingUp,
  ShoppingCart,
  Mail,
  Camera,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "Our Programs",
  description: "Explore our 8 month Digital Business programs.",
};

export default function DigitalBusinessProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900/90 py-10 mb-16">
        <header className="container mx-auto pr-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="pl-8">
              <h1 className="text-4xl font-bold text-white mb-6">
                Digital Business Program
              </h1>
              <p className="text-gray-300 font-bold mb-6">
                Master the Digital Economy
              </p>
              <p className="text-gray-300 mb-6">
                Enter the growing digital marketplace with confidence and
                technical expertise. Learn to leverage digital tools, build
                online businesses, and access global markets without large
                capital investments in physical premises.
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
                src="/e-business lady.jpeg"
                width={600}
                height={400}
                alt="Women learning digital business skills"
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
                Digital Business Revolution
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Strengthen your digital capabilities to start online businesses
                and ventures. Our program reduces barriers to entry by teaching
                you to use social media, e-commerce platforms, and digital
                payment systems to market and sell products to larger markets.
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
                  Intensive digital skills and business development
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$70</div>
                <h3 className="font-semibold text-lg mb-2">Tech Setup Grant</h3>
                <p className="text-gray-600">
                  Initial funding for digital business setup
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  Global
                </div>
                <h3 className="font-semibold text-lg mb-2">Market Access</h3>
                <p className="text-gray-600">
                  Reach customers worldwide through digital platforms
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
              Four Pillars of Digital Success
            </h2>
            <p className="text-lg text-gray-600">
              Master every aspect of digital business from setup to scaling
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* E-commerce Platforms */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <ShoppingCart className="h-8 w-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    E-commerce Platforms
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Learn to set up and manage your online store from scratch.
                    Master product photography, listing optimization, order
                    fulfillment systems, and customer service excellence.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Online store setup and management</li>
                    <li>• Product photography and listing</li>
                    <li>• Order fulfillment and customer service</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Share2 className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Digital Marketing
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Master social media marketing strategies, content creation,
                    and online advertising. Learn to build your brand and reach
                    customers through digital channels effectively.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Social media marketing strategies</li>
                    <li>• Content creation and email campaigns</li>
                    <li>• Online advertising and brand building</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Financial Technology */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                  <CreditCard className="h-8 w-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Financial Technology
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Navigate digital payment systems, mobile money integration,
                    and online banking for business. Partner with local banks
                    and mobile money carriers for seamless transactions.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Digital payment system integration</li>
                    <li>• Mobile money and online banking</li>
                    <li>• Financial tracking and management tools</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technology Access */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start space-x-6">
                <div className="bg-cyan-100 p-3 rounded-lg flex-shrink-0">
                  <Monitor className="h-8 w-8 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Technology Access & Training
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Get hands-on experience with computers and technology.
                    Access equipment, create real online stores, and practice
                    with digital tools in our technology centers.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Hands-on computer training sessions</li>
                    <li>• Real online store creation practice</li>
                    <li>• Technology equipment access centers</li>
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
                Transform Your Digital Future
              </h2>
              <p className="text-lg text-gray-600">
                Join the digital economy and compete in the global marketplace
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Lower Startup Costs
                </h3>
                <p className="text-gray-600">
                  Start your business without large capital investments
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Globe className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Global Market Access
                </h3>
                <p className="text-gray-600">
                  Reach customers beyond your local community
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Smartphone className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Mobile-First Business
                </h3>
                <p className="text-gray-600">
                  Run your business efficiently from your smartphone
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Mail className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Digital Marketing Skills
                </h3>
                <p className="text-gray-600">
                  Master online marketing to grow your customer base
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
                Ready to Go Digital?
              </h2>
              <p className="text-xl text-gray-600">
                Join our digital business program and compete in the global
                digital economy
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
