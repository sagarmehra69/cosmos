import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center lg:-translate-y-10">

      {/* Background Glow */}
      <div className="absolute h-[460px] w-[460px] rounded-full bg-violet-600/20 blur-[130px]" />

      {/* Outer Decorative Ring */}
      <div className="absolute h-[390px] w-[390px] rounded-full border border-violet-500/20" />

      {/* Gradient Ring */}
      <div className="relative rounded-full bg-gradient-to-br from-violet-500 via-violet-400/30 to-transparent p-[4px]">

        {/* Glass Circle */}
        <div className="rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-[0_0_80px_rgba(139,92,246,0.25)]">

          {/* Image */}
          <div className="relative flex h-[360px] w-[360px] items-center justify-center overflow-hidden rounded-full bg-[#09090f]">

            <Image
              src="/images/profile.jpeg"
              alt="Sagar Mehra"
              fill
              priority
              className="object-contain scale-140"
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