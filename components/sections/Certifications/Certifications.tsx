import Section from "@/components/ui/Section";

import CertificationsHeader from "./CertificationsHeader";
import CertificationsGrid from "./CertificationsGrid";

export default function Certifications() {
  return (
    <Section id="certifications">
      <div className="space-y-16">
        <CertificationsHeader />
        <CertificationsGrid />
      </div>
    </Section>
  );
}