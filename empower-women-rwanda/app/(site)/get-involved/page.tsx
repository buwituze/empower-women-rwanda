import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ApplyForm } from "@/components/forms/apply-form";
import { PartnerForm } from "@/components/forms/partner-form";
import { VolunteerForm } from "@/components/forms/volunteer-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Handshake,
  Users,
  Heart,
  Target,
  Calendar,
  Mail,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Get Involved",
  description:
    "Apply for programs, partner with us, volunteer your skills, or donate to support Empower Women Rwanda.",
};

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section - Same design as About page */}
      <section className="bg-slate-900/90 py-16 mb-16">
        <header className="container mx-auto pr-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="pl-8">
              <h1 className="text-4xl font-bold text-white mb-6">
                Get Involved
              </h1>
              <p className="text-gray-300 mb-6">
                Join our mission to empower over 1 million women in Rwanda
                through education, leadership and entrepreneurship. Together, we
                can break barriers and create lasting change in communities
                across Rwanda.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-[#f7ce04] text-black hover:bg-[#e0bc05]"
                >
                  <Link href="#apply">Apply to Programs</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white bg-white/10 text-white hover:bg-white/20"
                >
                  <Link href="#partner">Become a Partner</Link>
                </Button>
              </div>
            </div>
            {/* <div className="pl-20">
              <Image
                src="/placeholder-5j713.png"
                width={100}
                height={60}
                alt="Women empowerment training session"
                className="w-full rounded-xl border-none object-cover shadow-lg"
              />
            </div> */}
          </div>
        </header>
      </section>

      {/* Ways to Get Involved Cards */}
      <section className="container mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-[#20603e] mb-8 text-center">
          Ways to Make a Difference
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center p-6 border-2 border-emerald-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#20603e] rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#20603e] mb-3">Apply</h3>
            <p className="text-gray-600 mb-4">
              Join our 6-month program and gain entrepreneurship, business, and
              digital skills
            </p>
            <Button
              asChild
              className="bg-[#20603e] text-white hover:bg-[#20603e]/90"
            >
              <Link href="#apply">Apply Now</Link>
            </Button>
          </div>

          <div className="border-2 border-emerald-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#0b97d5] rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#0b97d5] mb-3">
              Partner
            </h3>
            <p className="text-gray-600 mb-4">
              Collaborate with us to expand our reach and create greater impact
            </p>
            <Button
              asChild
              className="bg-[#0b97d5] text-white hover:bg-[#0b97d5]/90"
            >
              <Link href="#partner">Partner With Us</Link>
            </Button>
          </div>

          <div className="text-center p-6 border-2 border-emerald-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#f7ce04] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-[#20603e] mb-3">
              Volunteer
            </h3>
            <p className="text-gray-600 mb-4">
              Share your skills and time to mentor and support women
              entrepreneurs
            </p>
            <Button
              asChild
              className="bg-[#f7ce04] text-black hover:bg-[#e0bc05]"
            >
              <Link href="#volunteer">Join as Volunteer</Link>
            </Button>
          </div>

          <div className="text-center p-6 border-2 border-emerald-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-600 mb-3">
              Donate
            </h3>
            <p className="text-gray-600 mb-4">
              Support our mission with financial contributions or in-kind
              donations
            </p>
            <Button
              asChild
              className="bg-slate-600 text-white hover:bg-slate-600/90"
            >
              <Link href="#donate">Make a Donation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Impact Section */}
      <section className="bg-gradient-to-br from-[#20603e]/5 to-[#0b97d5]/5 py-16 mb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#20603e] mb-4">
              Creating Lasting Impact
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses key barriers women face in
              entrepreneurship through targeted training, mentorship, and
              financial support.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#20603e] mb-3">
                Skills Development
              </h3>
              <p className="text-gray-600">
                Digital literacy, business management, agricultural techniques,
                and leadership skills training across agriculture, farming, and
                business sectors.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#0b97d5] mb-3">
                Financial Support
              </h3>
              <p className="text-gray-600">
                $70 startup grants per participant, access to microfinance, and
                support for cooperative farming initiatives.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#f7ce04] mb-3">
                Community Networks
              </h3>
              <p className="text-gray-600">
                Mentorship programs, peer support systems, and connections to
                markets and business opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Tabs Section */}
      <section className="container mx-auto px-6 mb-16">
        <Tabs defaultValue="apply" className="mt-6">
          <TabsList className="grid w-full grid-cols-4 bg-gray-50">
            <TabsTrigger
              value="apply"
              id="apply"
              className="data-[state=active]:bg-[#20603e] data-[state=active]:text-white"
            >
              Apply
            </TabsTrigger>
            <TabsTrigger
              value="partner"
              id="partner"
              className="data-[state=active]:bg-[#0b97d5] data-[state=active]:text-white"
            >
              Partner
            </TabsTrigger>
            <TabsTrigger
              value="volunteer"
              id="volunteer"
              className="data-[state=active]:bg-[#f7ce04] data-[state=active]:text-black"
            >
              Volunteer
            </TabsTrigger>
            <TabsTrigger
              value="donate"
              id="donate"
              className="data-[state=active]:bg-slate-600 data-[state=active]:text-white"
            >
              Donate
            </TabsTrigger>
          </TabsList>

          {/* Apply Content */}
          <TabsContent value="apply" className="mt-8">
            <div>
              {" "}
              {/* Application Process - Horizontal Steps */}
              <div className="bg-white mb-12">
                <h2 className="text-2xl font-semibold text-[#20603e] mb-6">
                  Application Process
                </h2>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="w-8 h-8 bg-[#20603e] text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                      1
                    </div>
                    <h3 className="font-semibold text-sm mb-1">
                      Online Application
                    </h3>
                    <p className="text-xs text-gray-600">
                      Complete the application form
                    </p>
                  </div>
                  <div className="flex-1 text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="w-8 h-8 bg-[#0b97d5] text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                      2
                    </div>
                    <h3 className="font-semibold text-sm mb-1">
                      Community Recommendation
                    </h3>
                    <p className="text-xs text-gray-600">
                      Get local leader endorsement
                    </p>
                  </div>
                  <div className="flex-1 text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="w-8 h-8 bg-[#f7ce04] text-black rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                      3
                    </div>
                    <h3 className="font-semibold text-sm mb-1">Interview</h3>
                    <p className="text-xs text-gray-600">
                      In-person or virtual interview
                    </p>
                  </div>
                  <div className="flex-1 text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                      4
                    </div>
                    <h3 className="font-semibold text-sm mb-1">Placement</h3>
                    <p className="text-xs text-gray-600">
                      Program placement notification
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-8">
                {/* Eligibility Requirements */}
                <div>
                  <h2 className="text-xl font-semibold text-[#20603e] mb-4">
                    Eligibility Requirements
                  </h2>
                  <p className="text-gray-600 mb-4">
                    To be eligible for our programs, you must meet the following
                    criteria:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        You can commit to the full 6-month program, which
                        includes 2 months of theory and 4 months of practical
                        work.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        You are a woman aged 18–45 and a resident of Rwanda as
                        this is where we operate currently.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        You are motivated to start or grow a business in
                        agriculture, farming, or other sectors.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        You come from an underserved community with limited
                        access to formal income or resources.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        You are willing to mentor and support other women
                        entrepreneurs after completing the program.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        You are committed to transforming your community and
                        showing the impact of the program on your business or
                        idea.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Program Benefits */}
                <div>
                  <h2 className="text-xl font-semibold text-[#20603e] mb-4">
                    What You'll Receive
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Our comprehensive program provides you with everything
                    needed to transform your economic future:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        6-month comprehensive training (theory + hands-on
                        practice)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        $70 startup grant to launch your business venture
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        Skills training in agriculture, farming, business
                        management, and digital literacy
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        Personal mentorship from successful entrepreneurs
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        Access to business networks, markets, and cooperative
                        farming opportunities
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        Ongoing support and lifetime access to alumni network
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        Certification upon successful program completion
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="self-start justify-end">
                <div className="bg-white rounded-xl ">
                  <ApplyForm />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Partner Section */}
          <TabsContent value="partner" className="mt-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-[#0b97d5] mb-6">
                    Partnership Opportunities
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-[#20603e] mb-3">
                        Corporate Partnerships
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Your corporate partnership directly funds training
                        programs, provides modern equipment, and connects our
                        trainees with industry mentors.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Fund digital training centers and equipment for
                            women in rural areas
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Provide expert mentors and industry connections for
                            program graduates
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Create employment pathways and business
                            opportunities for trained women
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#20603e] mb-3">
                        NGO Collaborations
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Joint programming amplifies our reach, allowing us to
                        support more women with comprehensive services.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Expand program reach to underserved communities
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Provide holistic support including health and legal
                            services
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Share resources to maximize impact per participant
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#20603e] mb-3">
                        Government Partnerships
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Collaboration with government agencies ensures our
                        programs align with national development goals and reach
                        policy-level impact.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Scale programs nationwide through government
                            networks
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Advocate for policies that remove barriers for women
                            entrepreneurs
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Connect trainees with government business support
                            programs
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#20603e] mb-3">
                        Educational Institutions
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Academic partnerships enhance our curriculum quality and
                        provide pathways for continued education.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Develop research-backed training curricula
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Provide certified training programs recognized by
                            industry
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Create scholarship opportunities for exceptional
                            participants
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-[#0b97d5] mb-4">
                    How Partnerships Transform Lives
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Every partnership directly translates to more women gaining
                    economic independence, building sustainable businesses, and
                    breaking the cycle of poverty in their communities.
                    Together, we're not just training individuals - we're
                    transforming entire families and communities across Rwanda.
                  </p>
                  <div className="bg-gradient-to-br from-[#0b97d5]/5 to-[#f7ce04]/5 rounded-xl p-4">
                    <p className="text-sm text-gray-600 font-medium">
                      "When you partner with us, you're directly enabling a
                      woman to receive her $70 startup grant, access modern
                      agricultural techniques, and build the digital skills
                      needed to compete in today's economy."
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-start justify-end">
                <div className="bg-white rounded-xl">
                  <PartnerForm />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Volunteer */}
          <TabsContent value="volunteer" className="mt-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-8">
                {/* Volunteer Requirements - Moved to top */}
                <div>
                  <h2 className="text-2xl font-semibold text-[#20603e] mb-4">
                    Volunteer Requirements
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Join our mission to empower women entrepreneurs across
                    Rwanda. Your time and expertise directly impact the women we
                    train, helping them build sustainable businesses and
                    transform their communities.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-gray-600 font-medium">
                          Minimum 3-month commitment
                        </span>
                        <p className="text-sm text-gray-500 mt-1">
                          Consistency is key for building trust with
                          participants and seeing meaningful progress in their
                          entrepreneurial journey
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-gray-600 font-medium">
                          Relevant skills or experience preferred
                        </span>
                        <p className="text-sm text-gray-500 mt-1">
                          Business, agriculture, digital skills, or teaching
                          experience helps you provide valuable guidance to
                          women starting their ventures
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-gray-600 font-medium">
                          Passion for women's empowerment
                        </span>
                        <p className="text-sm text-gray-500 mt-1">
                          Genuine commitment to supporting women overcome
                          barriers and achieve economic independence
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-gray-600 font-medium">
                          Ability to work in rural communities
                        </span>
                        <p className="text-sm text-gray-500 mt-1">
                          Many participants are in rural areas where your impact
                          is most needed - willingness to travel and work in
                          diverse settings
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Volunteer Roles */}
                <div>
                  <h2 className="text-2xl font-semibold text-[#20603e] mb-6">
                    How You Can Help Our Trainees
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-[#20603e] mb-3">
                        Training Facilitators
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Lead workshops that directly equip women with the
                        business skills, digital literacy, and agricultural
                        techniques they need to launch successful ventures.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Teach practical business planning and financial
                            management
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Provide hands-on digital skills training for market
                            access
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Share modern farming techniques that increase
                            productivity
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#20603e] mb-3">
                        Mentorship Program
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Provide one-on-one guidance that transforms women from
                        uncertain beginners into confident entrepreneurs ready
                        to launch their $70 startup ventures.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Guide business idea development and validation
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Support with startup grant application and business
                            launch
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Provide ongoing support during the 6-month practical
                            phase
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#20603e] mb-3">
                        Administrative Support
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Help streamline our operations so more resources go
                        directly to training women and supporting their
                        entrepreneurial dreams.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Track participant progress and success stories
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Coordinate training schedules and resource
                            distribution
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Manage startup grant disbursements and follow-up
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#20603e] mb-3">
                        Community Outreach
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Help identify and recruit women who need our programs
                        most, ensuring we reach those facing the greatest
                        barriers to economic participation.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Connect with women in underserved rural communities
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Build relationships with local leaders and
                            organizations
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">
                            Share success stories that inspire more women to
                            apply
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-6 border border-gray-200">
                  <h2 className="text-xl font-semibold text-[#20603e] mb-4">
                    Your Impact as a Volunteer
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Every hour you volunteer directly contributes to a woman's
                    journey from uncertainty to entrepreneurship. You're not
                    just teaching skills - you're helping break the cycle of
                    poverty and empowering entire families and communities.
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    "As a volunteer, you become part of each woman's success
                    story - from her first day of training to the moment she
                    launches her business with her $70 startup grant."
                  </p>
                </div>
              </div>

              <div className="self-start">
                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <VolunteerForm />
                </div>
              </div>
            </div>
          </TabsContent>

          {/*Donation*/}

          <TabsContent value="donate" className="mt-8">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8">
                {/* Impact Overview */}
                <div>
                  <h2 className="text-3xl font-semibold text-slate-600 mb-6">
                    Transform Lives Through Your Support
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    Every contribution, no matter the size, directly empowers
                    women in Rwanda to break barriers and build sustainable
                    businesses. Your support provides the training, resources,
                    and startup capital that transforms entrepreneurial dreams
                    into thriving enterprises.
                  </p>

                  <div className="bg-gradient-to-br from-slate-600/5 to-[#20603e]/5 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-semibold text-[#20603e] mb-3">
                      Together: Empowering over 1 Million Women
                    </h3>
                    <p className="text-gray-600">
                      With collective support from you, we aim to reach 1
                      million women across Rwanda over three years, providing
                      comprehensive training and startup grants to launch their
                      businesses. Every contribution matters.
                    </p>
                  </div>
                </div>

                {/* How Your Donation Helps */}
                <div>
                  <h2 className="text-2xl font-semibold text-slate-600 mb-4">
                    Your Contribution Creates Real Impact
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Whether large or small, every contribution directly supports
                    women entrepreneurs. Here's how different amounts help:
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-6 bg-gradient-to-r from-[#20603e]/10 to-transparent rounded-lg">
                      <h3 className="font-bold text-[#20603e] text-2xl mb-2">
                        $70
                      </h3>
                      <p className="text-gray-600 font-medium mb-2">
                        Startup grant for one woman
                      </p>
                      <p className="text-gray-500 text-sm">
                        Seed capital to launch a business after completing
                        training.
                      </p>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-[#0b97d5]/10 to-transparent rounded-lg">
                      <h3 className="font-bold text-[#0b97d5] text-2xl mb-2">
                        $200
                      </h3>
                      <p className="text-gray-600 font-medium mb-2">
                        Training materials & equipment
                      </p>
                      <p className="text-gray-500 text-sm">
                        Digital devices and practical tools for the 6-month
                        program.
                      </p>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-[#f7ce04]/10 to-transparent rounded-lg">
                      <h3 className="font-bold text-[#20603e] text-2xl mb-2">
                        $500
                      </h3>
                      <p className="text-gray-600 font-medium mb-2">
                        Complete program sponsorship
                      </p>
                      <p className="text-gray-500 text-sm">
                        Full training program plus startup grant for one woman.
                      </p>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-slate-500/10 to-transparent rounded-lg">
                      <h3 className="font-bold text-slate-600 text-2xl mb-2">
                        $2,500
                      </h3>
                      <p className="text-gray-600 font-medium mb-2">
                        Community training center
                      </p>
                      <p className="text-gray-500 text-sm">
                        Digital hub with computers and internet in rural areas.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-[#f7ce04]/10 to-[#20603e]/10 rounded-lg">
                    <p className="text-gray-600 text-center">
                      <strong>Every amount makes a difference.</strong> Can't
                      contribute these amounts? Any contribution helps us reach
                      more women and build stronger programs. We welcome
                      whatever you can offer.
                    </p>
                  </div>
                </div>

                {/* In-Kind Donations */}
                <div>
                  <h2 className="text-2xl font-semibold text-slate-600 mb-4">
                    Beyond Financial Support
                  </h2>
                  <p className="text-gray-600 mb-6">
                    In-kind donations help us maximize every contribution and
                    provide comprehensive support to women entrepreneurs.
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="font-semibold text-[#20603e] mb-3">
                        Equipment & Technology
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">
                            Computers, tablets, agricultural tools
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
                            Business mentorship and expertise
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">
                            Training materials and venue space
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Impact Stories */}
                <div className="bg-gradient-to-br from-[#20603e]/5 to-[#f7ce04]/10 rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-[#20603e] mb-4">
                    Your Support Creates Lasting Change
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Every contribution - whether it's covering a startup grant,
                    providing training materials, or supporting a full program -
                    transforms lives and builds stronger communities across
                    Rwanda.
                  </p>
                  <p className="text-gray-600">
                    <strong>
                      Your impact extends far beyond the individual:
                    </strong>{" "}
                    Each woman trained becomes a mentor to others, creates jobs
                    in her community, and raises the next generation with
                    entrepreneurial skills and economic independence.
                  </p>
                </div>
              </div>

              {/* Contact Information - Right Column */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl border-2 border-slate-600/10 p-6 sticky top-6">
                  <h2 className="text-xl font-semibold text-slate-600 mb-4">
                    Ready to Make an Impact?
                  </h2>
                  <p className="text-gray-600 mb-3">
                    Contact us to discuss your donation and learn more about how
                    your contribution will directly support women entrepreneurs
                    in Rwanda.
                  </p>

                  <p className="text-gray-900 mb-6">
                    Empowering one woman equals empowering entire communities.
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
                        <p className="text-sm text-gray-600">
                          +250 780 325 858 / +250 728 446 304
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-slate-600 text-white hover:bg-slate-600/90"
                    >
                      <Link href="#contact">Contact About Donations</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#20603e] text-[#20603e] hover:bg-[#20603e]/10"
                    >
                      <Link href="#contact">Discuss In-Kind Support</Link>
                    </Button>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-xs text-gray-500 text-center">
                      Empower Women Rwanda is committed to transparent use of
                      funds. All donations go directly to program implementation
                      and participant support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
