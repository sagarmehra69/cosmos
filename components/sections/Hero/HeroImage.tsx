import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center lg:-mt-20 xl:-mt-24">

      {/* Background Glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-violet-600/12 blur-[150px]" />

      {/* Outer Decorative Ring */}
      <div className="absolute h-[460px] w-[460px] rounded-full border border-violet-500/10" />

      {/* Gradient Ring */}
      <div className="relative rounded-full bg-gradient-to-br from-violet-500 via-violet-400/30 to-transparent p-[4px]">

        {/* Glass Circle */}
        <div className="rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-[0_0_80px_rgba(139,92,246,0.25)]">

          {/* Image */}
          <div className="relative flex h-[440px] w-[440px] items-center justify-center overflow-hidden rounded-full bg-[#09090f]">

            <Image
              src="/images/profile.jpeg"
              alt="Sagar Mehra"
              fill
              priority
              className="object-cover filter brightness-75"
              style={{
                objectPosition: "center center",
              }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}