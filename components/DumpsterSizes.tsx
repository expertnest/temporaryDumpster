import Image from "next/image";
import {
  Sparkles,
  Hammer,
  Home,
  Building2,
  Truck,
  ArrowRight,
} from "lucide-react";

const dumpsters = [
  {
    size: "10 Yard Dumpster",
    image: "/10-yard.png",
    icon: Sparkles,
    bestFor: "Small Cleanups • Concrete • Dirt",
    description:
      "Perfect for small cleanups and concrete or dirt projects. Holds up to 3 pickup loads.",
  },
  {
    size: "15 Yard Dumpster",
    image: "/10-yard.png",
    icon: Home,
    bestFor: "Home Cleanouts • Garages • Basements",
    description:
      "Great for garage, basement, and household cleanouts. Fits about 4.5 pickup loads.",
  },
  {
    size: "20 Yard Dumpster",
    image: "/10-yard.png",
    icon: Hammer,
    bestFor: "Remodels • Roofing • Renovations",
    description:
      "Ideal for remodeling projects, roofing jobs, and larger residential upgrades.",
  },
  {
    size: "30 Yard Dumpster",
    image: "/10-yard.png",
    icon: Building2,
    bestFor: "Construction • Demolition • Large Projects",
    description:
      "Built for major construction, demolition, and commercial cleanup projects.",
  },
  {
    size: "40 Yard Dumpster",
    image: "/10-yard.png",
    icon: Truck,
    bestFor: "Commercial • Industrial • Major Cleanup",
    description:
      "Our largest dumpster option for large-scale commercial and industrial jobs.",
  },
];

const DumpsterSizes = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-12 md:mt-[-65px] sm:px-6 lg:px-8 lg:pb-24">
      {/* BACKGROUND ACCENTS */}

      <div className="pointer-events-none absolute left-[-150px] top-20 h-[350px] w-[350px] rounded-full bg-brand-primary/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-100px] bottom-20 h-[300px] w-[300px] rounded-full bg-brand-accent/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] md:mt-16">
        {/* HEADER */}

        <div className="text-center">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-brand-accent">
            Dumpster Rentals
          </p>

          <h2 className="text-3xl font-black leading-tight text-brand-primary sm:text-4xl">
            The{" "}
            <span className="text-brand-accent">
              Correct
            </span>{" "}
            Dumpster Type & Size for Any Trash Removal Project
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-accent" />

          <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
            From small cleanups to major construction projects, choose the
            dumpster size that fits your job perfectly.
          </p>
        </div>

        {/* CARDS */}

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-5">
          {dumpsters.map((dumpster) => {
            const Icon = dumpster.icon;
            const isFeatured = dumpster.size === "40 Yard Dumpster";

            return (
              <div
                key={dumpster.size}
                className={`
                  group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-brand-accent/40 hover:shadow-2xl
                  ${
                    isFeatured
                      ? "col-span-2 flex h-[170px] flex-row bg-gradient-to-r from-white to-brand-accent/5 sm:col-span-1 sm:h-[360px] sm:flex-col"
                      : "flex h-[290px] flex-col sm:h-[360px]"
                  }
                  xl:h-[390px]
                `}
              >
                {/* IMAGE */}

                <div
                  className={`
                    relative overflow-hidden bg-slate-200
                    ${
                      isFeatured
                        ? "h-full w-[42%] sm:h-40 sm:w-full xl:h-44"
                        : "h-28 sm:h-40 xl:h-44"
                    }
                  `}
                >
                  <Image
                    src={dumpster.image}
                    alt={dumpster.size}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/70 via-transparent to-transparent" />

                  <div className="absolute bottom-2 left-2 rounded-full bg-white px-2 py-1 text-[10px] font-black text-brand-primary shadow-lg sm:bottom-3 sm:left-3 sm:px-3 sm:py-1.5 sm:text-xs">
                    {dumpster.size}
                  </div>
                </div>

                {/* CONTENT */}

                <div className="flex flex-1 flex-col p-3 sm:p-5">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent sm:h-10 sm:w-10">
                      <Icon size={16} className="sm:h-5 sm:w-5" />
                    </div>

                    <div>
                      <p className="text-[8px] font-black uppercase tracking-[0.2em] text-brand-accent sm:text-[10px]">
                        Best For
                      </p>

                      <p className="line-clamp-2 text-[10px] font-bold leading-tight text-brand-primary sm:text-xs">
                        {dumpster.bestFor}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 line-clamp-2 text-[11px] font-medium leading-relaxed text-slate-600 sm:mt-4 sm:line-clamp-3 sm:text-sm">
                    {dumpster.description}
                  </p>

                  {/* CTA */}

                  <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-3 sm:pt-4">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-accent sm:text-xs">
                      Learn More
                    </span>

                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-accent text-white transition duration-300 group-hover:translate-x-1 sm:h-8 sm:w-8">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DumpsterSizes;