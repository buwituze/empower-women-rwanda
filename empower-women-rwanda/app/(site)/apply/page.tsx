import { ApplyForm } from "@/components/forms/apply-form";

export default function ApplyPage() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-[#20603e] mb-12">
        Apply for Our Programs
      </h1>
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
              <h3 className="font-semibold text-sm mb-1">Online Application</h3>
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
              To be eligible for our women empowerment program, you must meet
              the following criteria:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Women aged 18–45, resident of Rwanda
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Motivated to start or grow a business in agriculture, farming,
                  or other sectors
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Available for full 6-month program commitment (2 months
                  theory, 4 months practical)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  Willing to mentor and support other women entrepreneurs after
                  program completion
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  From underserved communities with limited access to formal
                  income or resources
                </span>
              </li>
            </ul>
          </div>

          {/* Program Benefits */}
          <div>
            <h2 className="text-xl font-semibold text-[#20603e] mb-4">
              Our Trains Receive
            </h2>
            <p className="text-gray-600 mb-4">
              Our comprehensive program provides you with everything needed to
              transform your economic future:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">
                  6-month comprehensive training (theory + hands-on practice)
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
                  Skills training in agriculture, farming, business management,
                  and digital literacy
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
                  Access to business networks, markets, and cooperative farming
                  opportunities
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
    </section>
  );
}
