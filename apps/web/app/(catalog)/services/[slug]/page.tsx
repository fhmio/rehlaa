import Link from "next/link";
import { Button, Card, CardContent, CardHeader } from "@visa/ui-web";

async function getService(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/services/${slug}`, {
    next: { revalidate: 30 },
  });
  if (!res.ok) return null;
  return (await res.json()) as any;
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const data = await getService(params.slug);
  if (!data) return <div>غير موجود</div>;
  const s = data.service as { slug: string; title: { ar: string }; country: string; priceFrom: number; duration: string };
  return (
    <main>
      <Card>
        <CardHeader>
          {s.title.ar} — {s.country}
        </CardHeader>
        <CardContent>
          <p>السعر من: {s.priceFrom} ر.س</p>
          <p>المدة المتوقعة: {s.duration}</p>
          <div style={{ marginTop: ".75rem" }}>
            <Link href={`/checkout/apply/${s.slug}`}>
              <Button variant="primary">قدّم الطلب</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}


