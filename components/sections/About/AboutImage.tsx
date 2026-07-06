import Card from "@/components/ui/Card";

export default function AboutImage() {
  return (
    <Card className="flex h-[500px] flex-col items-center justify-center text-center">

      <div className="mb-6 text-7xl">
        📷
      </div>

      <h3 className="text-3xl font-bold">
        Sagar Mehra
      </h3>

      <p className="mt-2 text-violet-400">
        Aspiring Data Analyst
      </p>

      <p className="mt-8 text-slate-500">
        Professional photo coming soon...
      </p>

    </Card>
  );
}