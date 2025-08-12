import { NextResponse } from "next/server";
import { ListServicesResponse } from "@visa/api";

const services = [
  { id: "1", slug: "umrah-visa", title: { ar: "تأشيرة عمرة", en: "Umrah Visa" }, country: "السعودية", priceFrom: 450, duration: "3-7 أيام", requirements: [], active: true, media: [] },
  { id: "2", slug: "visit-visa", title: { ar: "تأشيرة زيارة", en: "Visit Visa" }, country: "السعودية", priceFrom: 350, duration: "5-10 أيام", requirements: [], active: true, media: [] },
];

export async function GET() {
  return NextResponse.json(ListServicesResponse.parse({ services }));
}


