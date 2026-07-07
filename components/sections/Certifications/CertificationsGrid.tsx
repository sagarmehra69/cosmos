import { certifications } from "@/data/certifications";
import CertificationCard from "./CertificationCard";

export default function CertificationsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {certifications.map((certification) => (
        <CertificationCard
          key={certification.id}
          certification={certification}
        />
      ))}
    </div>
  );
}