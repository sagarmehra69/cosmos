

import Card from "@/components/ui/Card";
import { contact } from "@/data/contact";

import ContactLinks from "./ContactLinks";

export default function ContactCard() {
  return (
    <Card className="mx-auto max-w-4xl">

      <div className="space-y-8">

        <div className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-green-400">
          {contact.status}
        </div>

        <ContactLinks
          email={contact.email}
          location={contact.location}
          linkedin={contact.linkedin}
          github={contact.github}
        />

        <div className="flex flex-wrap gap-5">

          <a
            href={contact.resume}
            className="rounded-xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500"
          >
            Download Resume
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
          >
            Connect on LinkedIn
          </a>

        </div>

        <p className="text-sm text-slate-500">
          Usually responds within 24 hours.
        </p>

      </div>

    </Card>
  );
}