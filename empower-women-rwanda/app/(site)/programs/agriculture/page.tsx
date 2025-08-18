export default function AgricultureProgramPage() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-[#20603e]">
        Modern Farming Excellence
      </h1>
      <p className="mt-2 max-w-prose text-muted-foreground">
        Transform your agricultural practices with cutting-edge techniques that
        increase productivity and sustainability.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-[#20603e]">
            What You'll Learn
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Modern farming techniques and sustainable practices</li>
            <li>Crop rotation and organic fertilizer use</li>
            <li>Pest management strategies</li>
            <li>Cooperative farming models</li>
            <li>Digital market access platforms</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-[#20603e]">
            Training Includes
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Hands-on workshops in rural communities</li>
            <li>
              Partnership with Rwanda Institute of Conservation Agriculture
              (RICA)
            </li>
            <li>Mobile education units for remote areas</li>
            <li>Small-scale irrigation and water management</li>
            <li>Direct market connection through digital platforms</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-[#20603e]">
            Program Benefits
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Increased crop yields and quality</li>
            <li>Access to broader markets</li>
            <li>Reduced farming costs through cooperatives</li>
            <li>Year-round cultivation capabilities</li>
          </ul>
        </div>
        <aside className="lg:pl-6">
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold text-[#20603e]">Program Snapshot</h3>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li>
                <strong>Duration:</strong> 8 months
              </li>
              <li>
                <strong>Grant:</strong> $70 per participant
              </li>
              <li>
                <strong>Coverage:</strong> All 30 districts
              </li>
            </ul>
            <a
              href="/apply"
              className="mt-4 inline-block rounded-md bg-[#0b97d5] px-4 py-2 text-sm font-medium text-white hover:bg-[#0a88bf]"
            >
              Apply Now
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
