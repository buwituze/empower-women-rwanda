import Image from "next/image";

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Our Impact & Goals
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Measuring success through tangible outcomes and sustainable change
            in women's lives across Rwanda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">1M</div>
            <div className="text-slate-900 font-semibold mb-1">
              Target Women
            </div>
            <div className="text-sm text-slate-600">To be reached by 2027</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-4xl font-bold text-green-600 mb-2">30</div>
            <div className="text-slate-900 font-semibold mb-1">Districts</div>
            <div className="text-sm text-slate-600">Across all of Rwanda</div>
          </div>
          <div className="text-center p-6 bg-yellow-50 rounded-xl">
            <div className="text-4xl font-bold text-yellow-600 mb-2">80%</div>
            <div className="text-slate-900 font-semibold mb-1">
              Success Rate
            </div>
            <div className="text-sm text-slate-600">
              Start their own businesses
            </div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="text-4xl font-bold text-purple-600 mb-2">$70</div>
            <div className="text-slate-900 font-semibold mb-1">
              Startup Grant
            </div>
            <div className="text-sm text-slate-600">Per participant</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Three-Year Implementation Plan
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Year 1: Foundation
                  </h4>
                  <p className="text-slate-600">
                    Establish 5 training centers and reach 200,000 women with
                    initial programs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Year 2: Expansion
                  </h4>
                  <p className="text-slate-600">
                    Expand to rural areas and support an additional 300,000
                    women.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-yellow-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Year 3: Completion
                  </h4>
                  <p className="text-slate-600">
                    Reach the final 500,000 women and achieve our 1 million
                    target.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Success stories"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
