import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ApplyForm } from "@/components/forms/apply-form";
import { PartnerForm } from "@/components/forms/partner-form";
import { VolunteerForm } from "@/components/forms/volunteer-form";

export const metadata = {
  title: "Get Involved",
  description:
    "Apply for programs, partner with us, volunteer your skills, or donate to support Empower Women Rwanda.",
};

export default function GetInvolvedPage() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-[#20603e]">Get Involved</h1>
      <p className="mt-2 max-w-prose text-muted-foreground">
        Join our mission to empower 1 million women in Rwanda through education,
        leadership and entrepreneurship.
      </p>

      <Tabs defaultValue="apply" className="mt-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="apply" id="apply">
            Apply
          </TabsTrigger>
          <TabsTrigger value="partner">Partner</TabsTrigger>
          <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
          <TabsTrigger value="donate" id="donate">
            Donate
          </TabsTrigger>
        </TabsList>

        <TabsContent value="apply" className="mt-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-[#20603e]">
                Eligibility
              </h2>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
                <li>Age 18–45, resident of Rwanda</li>
                <li>Motivated to start or grow a business</li>
                <li>Committed to the 8-month program</li>
                <li>Ready to empower other women</li>
              </ul>
              <h2 className="mt-6 text-xl font-semibold text-[#20603e]">
                Application Process
              </h2>
              <ol className="mt-2 list-decimal space-y-2 pl-5 text-muted-foreground">
                <li>Complete the online application form</li>
                <li>Community recommendation</li>
                <li>Interview</li>
                <li>Program placement</li>
              </ol>
            </div>
            <ApplyForm />
          </div>
        </TabsContent>

        <TabsContent value="partner" className="mt-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-[#20603e]">
                Become a Partner
              </h2>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
                <li>Corporate partnerships</li>
                <li>NGO collaborations</li>
                <li>Government partnerships</li>
                <li>Educational institution alliances</li>
              </ul>
            </div>
            <PartnerForm />
          </div>
        </TabsContent>

        <TabsContent value="volunteer" className="mt-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-[#20603e]">
                Volunteer with Us
              </h2>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
                <li>Training facilitation</li>
                <li>Mentorship programs</li>
                <li>Administrative support</li>
                <li>Community outreach</li>
              </ul>
            </div>
            <VolunteerForm />
          </div>
        </TabsContent>

        <TabsContent value="donate" className="mt-6">
          <div className="rounded-xl border p-4">
            <h2 className="text-xl font-semibold text-[#20603e]">
              Make a Donation
            </h2>
            <p className="mt-2 max-w-prose text-muted-foreground">
              Your support funds training, equipment, facilities, and
              scholarships. Contact us to discuss donation options or in‑kind
              support.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-block rounded-md bg-[#f7ce04] px-4 py-2 text-sm font-medium text-black hover:bg-[#e0bc05]"
            >
              Contact Us About Donations
            </a>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
