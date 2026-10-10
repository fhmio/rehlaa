"use client";
import { useState } from "react";
import { Button, Input, Card, CardContent, CardHeader, CardFooter } from "@visa/ui-web";
import { useRouter } from "next/navigation";

export default function ApplyPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passport, setPassport] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: params.slug, name, email, passport })
      });
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      router.push(`/account/profile?applicationId=${data.id}`);
    } catch (e) {
      alert("تعذر إرسال الطلب");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Card>
        <CardHeader>نموذج التقديم</CardHeader>
        <CardContent>
          <div style={{ display: "grid", gap: ".75rem" }}>
            <label>
              الاسم الكامل
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="الاسم" />
            </label>
            <label>
              البريد الإلكتروني
              <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
            </label>
            <label>
              رقم الجواز
              <Input value={passport} onChange={(e) => setPassport(e.target.value)} placeholder="P1234567" />
            </label>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={submit} variant="primary" disabled={loading}>
            {loading ? "جارٍ الإرسال..." : "إرسال"}
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}


