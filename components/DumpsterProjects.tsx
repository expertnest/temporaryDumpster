import Image from "next/image";
import {
  Check,
  HardHat,
  House,
  Building2,
  ArrowRight,
} from "lucide-react";

const benefits = [
  "The right size and type of container for any project.",
  "On-time delivery to keep your project moving.",
  "Roll-off containers help keep your site safe and clean.",
  "Eco-friendly solutions for responsible disposal.",
  "Residential, construction, and commercial rentals.",
];

const projectTypes = [
  {
    title: "Construction",
    image: "/construction.webp",
    icon: HardHat,
    description:
      "Keep your job site organized with dependable dumpster delivery and pickup built for demanding projects.",
  },
  {
    title: "Residential",
    image: "/residential.webp",
    icon: House,
    description:
      "From renovations to cleanouts, get the right dumpster size without delays or complications.",
  },
  {
    title: "Commercial",
    image: "/commercial.webp",
    icon: Building2,
    description:
      "Reliable waste solutions designed for businesses, contractors, and large-scale operations.",
  },
];

export default function DumpsterProjects() {
  return (
    <section className="relative overflow-hidden bg-brand-primary px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      {/* INDUSTRIAL GRID */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* ANGLED PANELS */}

      <div className="pointer-events-none absolute right-0 top-0 hidden h-[520px] w-[60%] bg-white/5 lg:block [clip-path:polygon(30%_0,100%_0,100%_100%,0_65%)]" />

      <div className="pointer-events-none absolute right-0 top-24 hidden h-[130px] w-[45%] bg-brand-accent opacity-80 lg:block [clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)]" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid gap-12 2xl:grid-cols-[38%_62%] 2xl:items-center">
          {/* LEFT CONTENT */}

          <div className="w-full">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-accent/40 bg-brand-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
              <HardHat size={14} />
              Roll-Off Dumpster Rentals
            </div>

            <h2 className="max-w-xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
              Your Guide To{" "}
              <span className="text-brand-accent">
                Hassle-Free
              </span>{" "}
              Debris Removal
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
              Reliable roll-off dumpster rentals designed for construction,
              residential cleanup, and commercial projects. Built around
              dependable service, safety, and efficiency.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-l-2 border-brand-accent pl-3"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-accent bg-brand-accent/10 text-brand-accent">
                    <Check size={14} />
                  </div>

                  <span className="text-sm font-semibold text-white/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-accent px-7 py-3.5 text-xs font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-brand-accent/30 transition hover:-translate-y-1 hover:bg-brand-accent-hover"
            >
              Explore Services
              <ArrowRight size={15} />
            </a>
          </div>

          {/* PROJECT CARDS */}

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {projectTypes.map((project) => {
              const Icon = project.icon;

              return (
                <div
                  key={project.title}
                  className="group flex min-h-[360px] flex-col overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-brand-accent hover:shadow-brand-accent/30"
                >
                  {/* IMAGE */}

                  <div className="relative h-40 overflow-hidden sm:h-44 lg:h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent text-white shadow-lg shadow-brand-accent/40">
                        <Icon size={21} />
                      </div>

                      <h3 className="text-xl font-black tracking-tight text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="flex flex-1 flex-col p-5">
                    <div className="h-1 w-14 rounded-full bg-brand-accent" />

                    <p className="mt-5 text-sm leading-relaxed text-slate-600">
                      {project.description}
                    </p>

                    <div className="mt-auto flex items-center gap-2 pt-6 text-[11px] font-black uppercase tracking-[0.2em] text-brand-accent">
                      View Details
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}