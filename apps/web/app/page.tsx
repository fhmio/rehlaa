import Link from "next/link";
import { Button, Card, CardContent, CardHeader } from "@visa/ui-web";
import { IconGlobe } from "@visa/icons";

async function getServices() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/services`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();
  return data.services as Array<{ id: string; slug: string; title: { ar: string; en: string }; country: string; priceFrom: number; duration: string }>;
}

export default async function HomePage() {
  const services = await getServices();
  return (
    <main>
      <h1 style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
        <IconGlobe width={28} height={28} /> بوابة التأشيرات — Rehlaa
      </h1>
      <div className="grid" style={{ marginTop: "1rem" }}>
        {services.map((s) => (
          <Card key={s.id}>
            <CardHeader>
              {s.title.ar} — {s.country}
            </CardHeader>
            <CardContent>
              <p>ابتداءً من {s.priceFrom} ر.س — المدة: {s.duration}</p>
              <div style={{ marginTop: ".5rem" }}>
                <Link href={`/catalog/services/${s.slug}`}>
                  <Button variant="primary">التفاصيل</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}


