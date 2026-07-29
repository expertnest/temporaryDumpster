import {
    Star,
    Building2,
    MapPinned,
    Clock3,
  } from "lucide-react";
  
  const stats = [
    {
      icon: Star,
      value: "5-Star",
      label: "Customer Reviews",
    },
    {
      icon: Building2,
      value: "Trusted",
      label: "By Contractors",
    },
    {
      icon: MapPinned,
      value: "100+",
      label: "Service Locations",
    },
    {
      icon: Clock3,
      value: "Fast",
      label: "Dumpster Delivery",
    },
  ];
  
  export default function CustomerTrustBanner() {
    return (
      <section className="relative w-full overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
  
        <div className="relative mx-auto max-w-[1500px] px-5 py-8 sm:px-6 md:px-8 lg:px-8">
          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
  
            {/* LEFT */}
            <div className="w-full xl:max-w-sm">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-8 rounded-full bg-brand-accent" />
  
                <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/70">
                  Trusted Waste Solutions
                </p>
              </div>
  
              <h2 className="text-xl font-black leading-tight tracking-tight text-white sm:text-2xl">
                Trusted By Homeowners & Contractors
              </h2>
  
              <p className="mt-2 text-sm font-medium leading-relaxed text-white/70">
                Reliable dumpster rentals backed by great reviews,
                dependable service, and local support.
              </p>
            </div>
  
            {/* STATS */}
            <div className="grid w-full grid-cols-2 gap-4 xl:w-auto xl:grid-cols-4 xl:gap-0">
              {stats.map((item, index) => {
                const Icon = item.icon;
  
                return (
                  <div
                    key={item.label}
                    className={`
                      flex
                      min-h-[90px]
                      items-center
                      gap-3.5
                      rounded-xl
                      bg-white/10
                      px-4
                      py-3
                      backdrop-blur-sm
  
                      xl:min-h-0
                      xl:rounded-none
                      xl:bg-transparent
                      xl:px-8
                      xl:py-0
  
                      ${
                        index !== stats.length - 1
                          ? "xl:border-r xl:border-white/20"
                          : ""
                      }
                    `}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Icon
                        size={27}
                        strokeWidth={3}
                        className="text-white"
                      />
                    </div>
  
                    {/* ✅ FIXED TEXT WRAPPING */}
                    <div className="min-w-0 flex-1">
                      <p className="text-lg font-black leading-none text-white">
                        {item.value}
                      </p>
  
                      <p className="mt-1 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-white/70 leading-tight break-words">
                        {item.label}
                      </p>
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