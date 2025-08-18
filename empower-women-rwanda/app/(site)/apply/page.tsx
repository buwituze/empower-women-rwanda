import { ApplyForm } from "@/components/forms/apply-form";

export default function ApplyPage() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-[#20603e]">
        Apply for Our Programs
      </h1>
      <div className="mt-4 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-[#20603e]">Eligibility</h2>
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
            <li>Provide a community recommendation</li>
            <li>Attend an interview</li>
            <li>Receive program placement</li>
          </ol>
        </div>
        <div>
          <ApplyForm />
        </div>
      </div>
    </section>
  );
}
