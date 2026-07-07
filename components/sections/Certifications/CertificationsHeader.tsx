import Heading from "@/components/ui/Heading";

export default function CertificationsHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Heading
        eyebrow="MISSION CERTIFICATIONS"
        title="Continuous Learning"
      />

      <p className="mt-6 text-lg leading-8 text-slate-400">
        I believe technology evolves every day. Certifications help me validate
        my knowledge while continuously improving my skills in data analytics,
        cloud computing, and artificial intelligence.
      </p>
    </div>
  );
}