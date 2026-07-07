import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { Certification } from "@/data/certifications";

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  return (
    <Card className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold">
            {certification.title}
          </h3>

          <p className="mt-2 text-violet-400">
            {certification.issuer}
          </p>
        </div>

        <Badge>
          {certification.status}
        </Badge>
      </div>

      <p className="text-slate-400">
        {certification.issueDate}
      </p>

      <div className="flex flex-wrap gap-3">
        {certification.skills.map((skill) => (
          <Badge key={skill}>
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
}