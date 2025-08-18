import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export const metadata = {
  title: "Stories & Updates",
  description:
    "Read success stories from our participants and the latest updates from Empower Women Rwanda.",
};

export default function StoriesPage() {
  const posts = [
    { title: "Program launches", date: "—", href: "#" },
    { title: "Partnership announcements", date: "—", href: "#" },
    { title: "Community events", date: "—", href: "#" },
    { title: "Policy advocacy wins", date: "—", href: "#" },
  ];
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-[#20603e]">Stories & Updates</h1>
      <Tabs defaultValue="stories" className="mt-6">
        <TabsList>
          <TabsTrigger value="stories">Success Stories</TabsTrigger>
          <TabsTrigger value="news">News</TabsTrigger>
        </TabsList>

        <TabsContent value="stories" className="mt-6">
          <p className="text-muted-foreground">
            Featured success stories will appear here as programs progress.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <article key={i} className="rounded-xl border p-4">
                <h2 className="font-semibold">Story Title</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Coming soon.
                </p>
              </article>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="news" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <article key={i} className="rounded-xl border p-4">
                <h2 className="font-semibold">{p.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.date}</p>
                <Link
                  href={p.href}
                  className="mt-3 inline-block text-sm text-[#0b97d5] hover:underline"
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
