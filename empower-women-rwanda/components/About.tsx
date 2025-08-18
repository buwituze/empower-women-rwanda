import { Users, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Creating a Rwanda where women play an equal role in leading economic
            and social development through education, leadership, and
            entrepreneurship.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">
                Breaking Barriers, Building Futures
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Empower Women Rwanda focuses on transforming the lives of
                Rwandan women by breaking the barriers that prevent them from
                participating fully in the country's economic development. We
                provide comprehensive support through education, leadership
                training, and entrepreneurship programs.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <div className="font-semibold text-slate-900">
                  Community Focus
                </div>
                <div className="text-sm text-slate-600">
                  Serving underserved communities
                </div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                <div className="font-semibold text-slate-900">
                  Economic Impact
                </div>
                <div className="text-sm text-slate-600">
                  Reducing unemployment & poverty
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Women learning technology skills"
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
