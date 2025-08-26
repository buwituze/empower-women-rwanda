import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function DonatePage() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-[#20603e]">Make a Donation</h1>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          {/* Impact Overview */}
          <div>
            <h2 className="text-3xl font-semibold text-slate-600 mb-6">
              Transform Lives Through Your Support
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Every donation directly empowers women in Rwanda to break
              barriers, start businesses, and transform their communities. Your
              support provides the training, resources, and capital that turns
              entrepreneurial dreams into reality.
            </p>

            <div className="bg-gradient-to-br from-slate-600/5 to-[#20603e]/5 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-[#20603e] mb-3">
                Our Goal: Empowering 1 Million Women
              </h3>
              <p className="text-gray-600">
                With your help, we're working to reach 1 million women across
                Rwanda over the next five years, providing each with
                comprehensive training and a $70 startup grant to launch their
                businesses.
              </p>
            </div>
          </div>

          {/* How Your Donation Helps */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-600 mb-6">
              How Your Donation Creates Real Impact
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-6 bg-gradient-to-r from-[#20603e]/10 to-transparent rounded-lg">
                <h3 className="font-bold text-[#20603e] text-2xl mb-2">$70</h3>
                <p className="text-gray-600 font-medium mb-2">
                  Complete startup grant for one woman
                </p>
                <p className="text-gray-500 text-sm">
                  Provides seed capital to launch a business in agriculture,
                  farming, or other sectors after completing our 6-month
                  training program.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-[#0b97d5]/10 to-transparent rounded-lg">
                <h3 className="font-bold text-[#0b97d5] text-2xl mb-2">$200</h3>
                <p className="text-gray-600 font-medium mb-2">
                  Training materials & equipment for one participant
                </p>
                <p className="text-gray-500 text-sm">
                  Covers digital devices, training materials, and practical
                  tools needed throughout the 8-month program.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-[#f7ce04]/10 to-transparent rounded-lg">
                <h3 className="font-bold text-[#20603e] text-2xl mb-2">$500</h3>
                <p className="text-gray-600 font-medium mb-2">
                  Complete program sponsorship for one woman
                </p>
                <p className="text-gray-500 text-sm">
                  Covers full 8-month training program plus $70 startup grant -
                  everything needed to transform one woman's economic future.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-slate-500/10 to-transparent rounded-lg">
                <h3 className="font-bold text-slate-600 text-2xl mb-2">
                  $2,500
                </h3>
                <p className="text-gray-600 font-medium mb-2">
                  Establishes one community training center
                </p>
                <p className="text-gray-500 text-sm">
                  Sets up a digital hub in rural areas with computers, internet
                  access, and training facilities for ongoing programs.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-[#20603e]/10 to-transparent rounded-lg md:col-span-2">
                <h3 className="font-bold text-[#20603e] text-2xl mb-2">
                  $15,000
                </h3>
                <p className="text-gray-600 font-medium mb-2">
                  Sponsors complete rural district program
                </p>
                <p className="text-gray-500 text-sm">
                  Funds training for 30 women including facilities, trainers,
                  materials, and startup grants - transforming an entire
                  community.
                </p>
              </div>
            </div>
          </div>

          {/* In-Kind Donations */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-600 mb-6">
              Other Ways to Support Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              Beyond financial contributions, in-kind donations help us stretch
              every dollar further and provide more comprehensive support to the
              women in our programs.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-[#20603e] mb-3">
                  Technology & Equipment
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Computers and tablets for digital skills training
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Agricultural tools and modern farming equipment
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Solar panels and renewable energy solutions
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#20603e] mb-3">
                  Professional Services
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Business mentorship and coaching expertise
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Training curriculum development
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Marketing and communication support
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#20603e] mb-3">
                  Facilities & Resources
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Venue space for training sessions and workshops
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Transportation for rural outreach programs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Office furniture and administrative supplies
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#20603e] mb-3">
                  Educational Materials
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Training manuals and educational resources
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Software licenses for business and design training
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Books and reference materials
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Impact Stories */}
          <div className="bg-gradient-to-br from-[#20603e]/5 to-[#f7ce04]/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-[#20603e] mb-4">
              Your Donation's Journey
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>When you donate $500</strong>, you're not just giving
                money - you're providing:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="text-gray-600">
                  • 2 months of comprehensive theory training for one woman
                </li>
                <li className="text-gray-600">
                  • 4 months of hands-on practical business development
                </li>
                <li className="text-gray-600">
                  • Digital skills training that opens new market opportunities
                </li>
                <li className="text-gray-600">
                  • Access to mentorship and ongoing support networks
                </li>
                <li className="text-gray-600">
                  • A $70 startup grant to launch her business venture
                </li>
                <li className="text-gray-600">
                  • The confidence and skills to become a community leader
                </li>
              </ul>
              <p className="text-gray-600 font-medium pt-2">
                This transforms not just one woman's life, but creates a ripple
                effect that benefits her family, community, and contributes to
                Rwanda's economic development.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information - Right Column */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border-2 border-slate-600/10 p-6 sticky top-6">
            <h2 className="text-xl font-semibold text-slate-600 mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us to discuss your donation and learn more about how your
              contribution will directly support women entrepreneurs in Rwanda.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#20603e]" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">
                    empowerwomenrw@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#20603e]" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-sm text-gray-600">+250 780 325 858</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-slate-600 text-white hover:bg-slate-600/90"
              >
                <Link href="/#contact">Contact About Donations</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-[#20603e] text-[#20603e] hover:bg-[#20603e]/10"
              >
                <Link href="/#contact">Discuss In-Kind Support</Link>
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Empower Women Rwanda is committed to transparent use of funds.
                All donations go directly to program implementation and
                participant support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
