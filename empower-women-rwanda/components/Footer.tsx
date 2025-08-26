import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/EMPOWER-footer.jpg"
                alt="Empower Women Rwanda Logo"
                width={210}
                height={180}
                className="rounded-lg"
              />
            </div>
            <p className="text-slate-400 text-sm">
              Transforming lives through education, leadership, and
              entrepreneurship across Rwanda.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Education & Skills
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Agriculture Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Leadership Training
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Entrepreneurship
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Partner
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Mentor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>+250 780 325 858 / 728 446 304</li>
              <li>empowerwomenrw@gmail.com</li>
              <li>Kigali, Rwanda</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Empower Women Rwanda. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
