import { adminGuides, businessGuides } from "@/utils/mock/data";
import { BusinessGuides, AdminGuides } from "@/components/cards";

interface GuidesPageProps {
  type: "business" | "business-admin";
  header: string;
  description: string;
}

export default function GuidesPage({ type, header, description }: Readonly<GuidesPageProps>) {
  return (
    <div className="p-8 gradient-bg min-h-screen">
      <div className="max-w-[1400px] mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold">{header}</h1>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
        {type === "business-admin" && (
          <div className="grid gap-6">
            {adminGuides.map((guide) => {
              return <AdminGuides key={guide.id} guide={guide} />;
            })}
          </div>
        )}
        {type === "business" && (
          <div className="grid gap-6">
            {businessGuides.map((guide) => {
              return <BusinessGuides key={guide.id} guide={guide} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
