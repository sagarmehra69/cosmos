export default function ContactHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">

      {/* Section Label */}

      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
        Contact
      </p>

      {/* Heading */}

      <h2 className="mt-4 text-5xl font-black tracking-tight text-white">
        Let's Build Something Meaningful Together
      </h2>

      {/* Description */}

      <p className="mt-6 text-lg leading-8 text-slate-400">
        I'm actively seeking opportunities as a{" "}
        <span className="font-semibold text-white">
          Data Analyst
        </span>{" "}
        while continuously expanding my expertise in{" "}
        <span className="font-semibold text-white">
          Data Science
        </span>
        ,
        <span className="font-semibold text-white">
          {" "}Machine Learning
        </span>
        {" "}and{" "}
        <span className="font-semibold text-white">
          Artificial Intelligence
        </span>
        . If you have an exciting opportunity, collaboration, or project in
        mind, I'd be happy to connect.
      </p>

    </div>
  );
}