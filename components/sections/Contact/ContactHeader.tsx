import Heading from "@/components/ui/Heading";
import { contact } from "@/data/contact";

export default function ContactHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Heading
        eyebrow={contact.eyebrow}
        title={contact.title}
      />

      <p className="mt-6 text-lg leading-8 text-slate-400">
        {contact.description}
      </p>
    </div>
  );
}