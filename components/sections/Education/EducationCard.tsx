import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { Education } from "@/data/education";

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({
  education,
}: EducationCardProps) {
  return (
    <Card className="space-y-6">

      <div className="flex flex-col justify-between gap-4 md:flex-row">

        <div>
          <h3 className="text-2xl font-bold">
            {education.degree}
          </h3>

          <p className="mt-2 text-violet-400">
            {education.institution}
          </p>
        </div>

        <div className="text-left md:text-right">
          <p className="font-semibold">
            {education.duration}
          </p>

          <p className="text-slate-400">
            {education.location}
          </p>
        </div>

      </div>

      <p className="leading-7 text-slate-400">
        {education.description}
      </p>

      <div className="flex flex-wrap gap-3">
        {education.coursework.map((course) => (
          <Badge key={course}>
            {course}
          </Badge>
        ))}
      </div>

    </Card>
  );
}