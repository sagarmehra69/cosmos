import {
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Target,
} from "lucide-react";

import Card from "@/components/ui/Card";

const profileItems = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "Bachelor of Computer Applications",
  },
  {
    icon: BriefcaseBusiness,
    label: "Current Role",
    value: "Data Analyst Intern",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Uttarakhand, India",
  },
  {
    icon: Target,
    label: "Career Goal",
    value: "Data Analyst → AI Engineer",
  },
];

export default function AboutProfile() {
  return (
    <Card
      className="
        relative

        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-white/[0.03]

        p-8

        backdrop-blur-xl
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -right-24
          -top-24

          h-64
          w-64

          rounded-full

          bg-violet-500/10

          blur-3xl
        "
      />

      {/* Header */}

      <div className="relative">
        <span
          className="
            inline-flex
            rounded-full

            border
            border-violet-500/20

            bg-violet-500/10

            px-4
            py-1.5

            text-xs
            font-semibold

            uppercase
            tracking-[0.2em]

            text-violet-300
          "
        >
          Professional Snapshot
        </span>

        <h3
          className="
            mt-6

            text-3xl
            font-bold

            text-white
          "
        >
          Sagar Mehra
        </h3>

        <p
          className="
            mt-2

            text-base

            text-slate-400
          "
        >
          Aspiring Data Analyst focused on building scalable analytics,
          business intelligence dashboards, and AI-powered solutions.
        </p>
      </div>

      {/* Divider */}

      <div className="my-8 h-px bg-white/10" />

      {/* Information */}

      <div className="space-y-6">
        {profileItems.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="
              flex
              items-start
              gap-4
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-xl

                bg-violet-500/10

                text-violet-400
              "
            >
              <Icon size={20} />
            </div>

            <div>
              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                {label}
              </p>

              <p
                className="
                  mt-1

                  font-medium

                  text-white
                "
              >
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom */}

      <div className="mt-10">
        <div
          className="
            rounded-2xl

            border
            border-violet-500/15

            bg-violet-500/5

            p-5
          "
        >
          <p
            className="
              text-sm
              uppercase
              tracking-[0.2em]

              text-violet-300
            "
          >
            Current Focus
          </p>

          <p
            className="
              mt-3

              leading-7

              text-slate-300
            "
          >
            Building production-ready data analytics projects using
            <span className="font-semibold text-white"> Python</span>,
            <span className="font-semibold text-white"> SQL</span>,
            <span className="font-semibold text-white"> Power BI</span>,
            and modern AI technologies.
          </p>
        </div>
      </div>
    </Card>
  );
}