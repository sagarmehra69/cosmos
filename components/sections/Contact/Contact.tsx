import ContactHeader from "./ContactHeader";
import ContactGrid from "./ContactGrid";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/5 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">

        <ContactHeader />

        <ContactGrid />

      </div>

    </section>
  );
}