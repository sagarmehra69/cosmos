import Section from "@/components/ui/Section";

import ContactHeader from "./ContactHeader";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="space-y-16">
        <ContactHeader />
        <ContactCard />
      </div>
    </Section>
  );
}