import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonial() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from the women whose lives have been transformed through our
            programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "The entrepreneurship program gave me the confidence and skills
                to start my own agricultural business. Now I employ 5 other
                women in my community."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">MK</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    Marie Kagabo
                  </div>
                  <div className="text-sm text-slate-600">
                    Agricultural Entrepreneur
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "Through the digital skills training, I learned to use
                technology to market my products online. My income has tripled
                in just one year."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-semibold">AU</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    Alice Uwimana
                  </div>
                  <div className="text-sm text-slate-600">
                    Tech Entrepreneur
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "The leadership training helped me become a community leader. I
                now advocate for women's rights and help other women access
                opportunities."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-yellow-600 font-semibold">DN</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    Diane Nyirahabimana
                  </div>
                  <div className="text-sm text-slate-600">Community Leader</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
