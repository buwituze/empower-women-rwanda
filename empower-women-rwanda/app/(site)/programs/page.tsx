export const metadata = {
  title: "Our Programs",
  description:
    "Explore our programs in Agriculture, Farming & Livestock, Business & Entrepreneurship, and Digital Business & E‑commerce.",
};

export default function ProgramsPage() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-[#20603e]">Our Programs</h1>
      <p className="mt-2 max-w-prose text-muted-foreground">
        We offer comprehensive programs across four key sectors, each designed
        to address the specific challenges women face in different industries.
      </p>

      <nav aria-label="Program sections" className="mt-4 flex flex-wrap gap-2">
        <a
          className="rounded-md border px-3 py-1 text-sm hover:bg-gray-50"
          href="#agriculture"
        >
          Agriculture
        </a>
        <a
          className="rounded-md border px-3 py-1 text-sm hover:bg-gray-50"
          href="#livestock"
        >
          Farming & Livestock
        </a>
        <a
          className="rounded-md border px-3 py-1 text-sm hover:bg-gray-50"
          href="#business"
        >
          Business & Entrepreneurship
        </a>
        <a
          className="rounded-md border px-3 py-1 text-sm hover:bg-gray-50"
          href="#digital"
        >
          Digital Business
        </a>
      </nav>

      <div id="agriculture" className="mt-10 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-[#20603e]">
          Modern Farming Excellence
        </h2>
        <p className="mt-2 max-w-prose text-muted-foreground">
          Transform your agricultural practices with cutting-edge techniques
          that increase productivity and sustainability.
        </p>
        <SubSection
          title="What You'll Learn"
          items={[
            "Modern farming techniques and sustainable practices",
            "Crop rotation and organic fertilizer use",
            "Pest management strategies",
            "Cooperative farming models",
            "Digital market access platforms",
          ]}
        />
        <SubSection
          title="Training Includes"
          items={[
            "Hands-on workshops in rural communities",
            "Partnership with Rwanda Institute of Conservation Agriculture (RICA)",
            "Mobile education units for remote areas",
            "Small-scale irrigation and water management",
            "Direct market connection through digital platforms",
          ]}
        />
        <SubSection
          title="Program Benefits"
          items={[
            "Increased crop yields and quality",
            "Access to broader markets",
            "Reduced farming costs through cooperatives",
            "Year-round cultivation capabilities",
          ]}
        />
      </div>

      <div id="livestock" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-[#20603e]">
          Sustainable Livestock & Agri‑Business
        </h2>
        <p className="mt-2 max-w-prose text-muted-foreground">
          Build profitable farming ventures with minimal startup capital and
          maximum impact.
        </p>
        <h3 className="mt-4 font-semibold">
          Poultry & Small Livestock Management
        </h3>
        <List
          items={[
            "Chicken, goat, pig, and rabbit farming",
            "Animal health and breeding techniques",
            "Veterinary support networks",
          ]}
        />
        <h3 className="mt-6 font-semibold">Value‑Added Agri‑Business</h3>
        <List
          items={[
            "Food processing and packaging",
            "Milk to cheese production",
            "Fruit to jam processing",
            "Product certification training",
          ]}
        />
        <h3 className="mt-6 font-semibold">Microcredit Access</h3>
        <List
          items={[
            "Small loan facilitation",
            "Savings group formation",
            "Financial management training",
          ]}
        />
        <h3 className="mt-6 text-xl font-semibold text-[#20603e]">
          Expected Outcomes
        </h3>
        <List
          items={[
            "Reliable income streams",
            "Food security for families",
            "Scalable business opportunities",
            "Diversified revenue sources",
          ]}
        />
      </div>

      <div id="business" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-[#20603e]">
          Build Your Business Empire
        </h2>
        <p className="mt-2 max-w-prose text-muted-foreground">
          Comprehensive business training designed to turn your ideas into
          successful enterprises.
        </p>
        <SubSection
          title="Core Training Modules"
          items={[
            "Business plan development",
            "Financial management and accounting",
            "Marketing and customer service",
            "Legal requirements and compliance",
          ]}
        />
        <h3 className="mt-6 font-semibold">Mentorship Programs</h3>
        <List
          items={[
            "Pairing with successful female entrepreneurs",
            "Regular guidance sessions",
            "Network building opportunities",
            "Problem-solving support",
          ]}
        />
        <h3 className="mt-6 font-semibold">Business Incubation Support</h3>
        <List
          items={[
            "Shared office spaces",
            "Equipment access",
            "Low-cost operational support",
            "Community of entrepreneurs",
          ]}
        />
        <SubSection
          title="What's Included"
          items={[
            "6-month comprehensive program",
            "$70 startup grant",
            "Ongoing mentorship",
            "Business network access",
            "Marketing support",
          ]}
        />
      </div>

      <div id="digital" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-[#20603e]">
          Master the Digital Economy
        </h2>
        <p className="mt-2 max-w-prose text-muted-foreground">
          Enter the growing digital marketplace with confidence and technical
          expertise.
        </p>
        <h3 className="mt-4 font-semibold">E‑commerce Platforms</h3>
        <List
          items={[
            "Online store setup and management",
            "Product photography and listing",
            "Order fulfillment systems",
            "Customer service excellence",
          ]}
        />
        <h3 className="mt-6 font-semibold">Digital Marketing</h3>
        <List
          items={[
            "Social media strategies",
            "Content creation for business",
            "Email marketing campaigns",
            "Online advertising basics",
          ]}
        />
        <h3 className="mt-6 font-semibold">Financial Technology</h3>
        <List
          items={[
            "Digital payment systems",
            "Mobile money integration",
            "Online banking for business",
            "Financial tracking tools",
          ]}
        />
        <h3 className="mt-6 text-xl font-semibold text-[#20603e]">
          Program Features
        </h3>
        <List
          items={[
            "Hands-on computer training",
            "Real online store creation",
            "Live mentorship sessions",
            "Digital marketing practice",
            "Technology equipment access",
          ]}
        />
      </div>
    </section>
  );
}

function SubSection({ title, items }: { title: string; items: string[] }) {
  return (
    <>
      <h3 className="mt-6 text-xl font-semibold text-[#20603e]">{title}</h3>
      <List items={items} />
    </>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 list-disc space-y-2 pl-5 text-muted-foreground">
      {items.map((i, idx) => (
        <li key={idx}>{i}</li>
      ))}
    </ul>
  );
}
