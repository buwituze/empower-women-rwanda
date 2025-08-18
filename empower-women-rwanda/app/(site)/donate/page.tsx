export default function DonatePage() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-[#20603e]">Make a Donation</h1>
      <p className="mt-2 max-w-prose text-muted-foreground">
        Your support funds training programs, equipment, facilities, and
        scholarships to help women launch and grow their businesses.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-[#20603e]">
        How You Can Help
      </h2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
        <li>Program funding support</li>
        <li>Equipment donations</li>
        <li>Facility sponsorship</li>
        <li>Scholarship funding</li>
      </ul>

      <a
        href="/contact"
        className="mt-6 inline-block rounded-md bg-[#f7ce04] px-4 py-2 text-sm font-medium text-black hover:bg-[#e0bc05]"
      >
        Discuss Donation
      </a>
    </section>
  );
}
