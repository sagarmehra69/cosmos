import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { Experience } from "@/data/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <Card className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold">
              {experience.role}
            </h3>

            {experience.current && (
              <Badge>
                Current
              </Badge>
            )}
          </div>

          <p className="mt-2 text-violet-400 font-medium">
            {experience.company}
          </p>
        </div>

        <div className="text-left md:text-right">
          <p className="font-semibold">
            {experience.duration}
          </p>

          <p className="text-slate-400">
            {experience.location}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            {experience.type}
          </p>
        </div>
      </div>

      <p className="leading-7 text-slate-400">
        {experience.description}
      </p>

      <div className="flex flex-wrap gap-3">
        {experience.technologies.map((technology) => (
          <Badge key={technology}>
            {technology}
          </Badge>
        ))}
      </div>
    </Card>
  );
}