import { contacts } from "@/data/contact";
import ContactCard from "./ContactCard";
import ContactCTA from "./ContactCTA";

export default function ContactGrid() {
  return (
    <div className="mt-20">

      {/* Contact Cards */}

      <div className="grid gap-6 md:grid-cols-2">

        {contacts.map((contact) => (
          <ContactCard
            key={contact.title}
            contact={contact}
          />
        ))}

      </div>

      {/* CTA */}

      <div className="mt-12">

        <ContactCTA />

      </div>

    </div>
  );
}