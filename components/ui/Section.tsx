type SectionProps = {
  id?: string;
  children: React.ReactNode;
};

export default function Section({ id, children }: SectionProps) {
  return (
    <section
      id={id}
      className="relative flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        {children}
      </div>
    </section>
  );
}