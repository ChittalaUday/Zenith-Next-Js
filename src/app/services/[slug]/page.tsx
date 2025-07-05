"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";
import { getColorByString } from "@/lib/color";

export default function SubServicePage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;
  const [parent, setParent] = useState<any>(null);
  const [sub, setSub] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => {
        let found = false;
        for (let i = 0; i < data.data.length; i++) {
          const cat = data.data[i];
          if (cat.subServices) {
            for (let j = 0; j < cat.subServices.length; j++) {
              const s = cat.subServices[j];
              const sSlug = s.title.toLowerCase().replace(/\s+/g, "-");
              if (sSlug === slug) {
                setParent({ ...cat, colorIdx: i });
                setSub({ ...s, colorIdx: j });
                found = true;
                break;
              }
            }
          }
        }
        if (!found) setNotFound(true);
      });
  }, [slug]);

  if (notFound) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-6">The service you are looking for does not exist.</p>
        <Button onClick={() => router.push("/services")}>Back to Services</Button>
      </div>
    );
  }

  if (!parent || !sub) {
    return <div className="flex items-center justify-center min-h-[60vh]">Loading...</div>;
  }

  const Icon = LucideIcons[parent.icon as keyof typeof LucideIcons] || LucideIcons["Folder"];
  const isLucideIcon = typeof Icon === "function" && (Icon as any).displayName && (Icon as any).iconNode;
  const LucideIcon = isLucideIcon ? (Icon as React.ComponentType<any>) : null;

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12">
      <Card className="w-full max-w-2xl shadow-xl border-border/60 bg-card/90 backdrop-blur-lg">
        <CardHeader className="flex flex-row items-center gap-4 pb-4">
          <span className={`rounded-lg p-3 ${getColorByString(parent.title)}`}>
            {LucideIcon ? <LucideIcon className="w-8 h-8" /> : null}
          </span>
          <div>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              {sub.title}
              <Badge variant="secondary" className={`ml-2 px-3 py-1 ${getColorByString(sub.title)}`}>{sub.price}</Badge>
            </CardTitle>
            <CardDescription className="text-muted-foreground text-base">{parent.title}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pt-0 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Avatar className={`w-14 h-14 ${getColorByString(sub.title)}`}>
              <AvatarFallback>{sub.title.split(" ").map((w: string) => w[0]).join("").slice(0,2)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-lg font-semibold">{sub.title}</div>
              <div className="text-muted-foreground text-sm">{sub.desc}</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            {sub.documents && sub.documents.length > 0 && (
              <div className="flex flex-col gap-1">
                <span className="font-medium text-sm flex items-center gap-1"><LucideIcons.FileText className="w-4 h-4" /> Documents Required:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {sub.documents.map((doc: string) => (
                    <Badge key={doc} variant="outline" className={`px-2 py-1 ${getColorByString(doc)}`}>{doc}</Badge>
                  ))}
                </div>
              </div>
            )}
            {typeof sub.rating === "number" && (
              <div className="flex items-center gap-1 text-yellow-600 font-medium">
                <LucideIcons.Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                {sub.rating.toFixed(1)}
              </div>
            )}
            {sub.estimation && (
              <div className="flex items-center gap-1 text-muted-foreground">
                <LucideIcons.Clock className="w-4 h-4" />
                <span className="text-sm">{sub.estimation}</span>
              </div>
            )}
          </div>
          {sub.details && (
            <div className="prose prose-sm max-w-none text-foreground bg-muted/30 rounded-lg p-4">
              {sub.details}
            </div>
          )}
          <Button size="lg" className="w-full mt-2" variant="default">Get Started</Button>
          <Button size="lg" className="w-full" variant="outline" onClick={() => router.push("/services")}>Back to Services</Button>
        </CardContent>
      </Card>
    </div>
  );
} 