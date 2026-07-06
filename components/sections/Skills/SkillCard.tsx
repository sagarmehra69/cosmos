import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

interface SkillCardProps {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export default function SkillCard({
  title,
  icon,
  description,
  skills,
}: SkillCardProps) {
  return (
    <Card className="space-y-6">
      <div>
        <div className="mb-3 text-4xl">{icon}</div>

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 text-slate-400">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge key={skill}>
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
}