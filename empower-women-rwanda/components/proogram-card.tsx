import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = {
  title?: string;
  description?: string;
  href?: string;
  imageQuery?: string;
};

export function ProgramCard({
  title = "Program Title",
  description = "Short description of the program.",
  href = "/programs",
  imageQuery = "Rwanda%20women%20training%20program",
}: Props) {
  return (
    <Link href={href} className="group">
      <Card className="h-full overflow-hidden bg-white border-[#20603e]/15  transition-shadow group-hover:shadow-md">
        <div className="relative">
          <Image
            src={`/placeholder.svg?height=180&width=520&query=${imageQuery}`}
            width={520}
            height={180}
            alt={title}
            className="h-44 w-full object-cover"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
