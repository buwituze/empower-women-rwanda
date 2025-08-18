import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Stat = { label: string; value: string; helper?: string };

export function StatCards({
  stats = [
    { label: "Target by 2027", value: "1,000,000+", helper: "Women empowered" },
    {
      label: "Program Duration",
      value: "8 months",
      helper: "2 months theory + 6 months practice",
    },
    { label: "Startup Support", value: "$70", helper: "Grant per participant" },
    {
      label: "National Coverage",
      value: "30",
      helper: "Districts across Rwanda",
    },
  ],
}: {
  stats?: Stat[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <Card key={i} className="border-[#20603e]/15">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-500">{s.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#20603e]">{s.value}</div>
            {s.helper ? (
              <p className="mt-1 text-sm text-gray-600">{s.helper}</p>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
