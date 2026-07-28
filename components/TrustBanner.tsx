import {
    MapPin,
    Users,
    Truck,
    ShieldCheck,
  } from "lucide-react";
  
  
  const stats = [
    {
      icon: MapPin,
      value: "100+",
      label: "Service Areas",
    },
    {
      icon: Users,
      value: "Thousands",
      label: "Happy Customers",
    },
    {
      icon: Truck,
      value: "On Time",
      label: "Reliable Delivery",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Satisfaction",
    },
  ];
  
  
  export default function WhyChooseBanner() {
    return (
      <section
        className="
        relative
        w-full
        overflow-hidden
        bg-brand-primary
        "
      >
  
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/10
          via-transparent
          to-black/10
          "
        />
  
  
        <div
          className="
          relative
          mx-auto
          max-w-[1500px]
          px-5
          py-7
          sm:px-6
          lg:px-8
          "
        >
  
  
          <div
            className="
            flex
            flex-col
            gap-7
            lg:flex-row
            lg:items-center
            lg:justify-between
            "
          >
  
  
            {/* LEFT CONTENT */}
  
            <div
              className="
              max-w-sm
              "
            >
  
              <div
                className="
                mb-2
                flex
                items-center
                gap-2
                "
              >
  
                <span
                  className="
                  h-1.5
                  w-8
                  rounded-full
                  bg-white
                  "
                />
  
                <p
                  className="
                  text-[11px]
                  font-extrabold
                  uppercase
                  tracking-[0.25em]
                  text-white/70
                  "
                >
                  Trusted Dumpster Rentals
                </p>
  
              </div>
  
  
              <h2
                className="
                text-xl
                font-black
               
                leading-tight
                tracking-tight
                text-white
                sm:text-2xl
                "
              >
                Why Choose Temporary Dumpster?
              </h2>
  
  
              <p
                className="
                mt-2
                text-sm
                font-medium
                leading-relaxed
                text-white/70
                "
              >
                Reliable service, fast delivery, and the right dumpster
                solution for every project.
              </p>
  
            </div>
  
  
  
  
  
            {/* STATS */}
  
            <div
              className="
              grid
              w-full
              grid-cols-2
              gap-3
              sm:grid-cols-4
              lg:w-auto
              lg:gap-0
              "
            >
  
              {stats.map((item, index)=>{
  
                const Icon = item.icon;
  
  
                return (
  
                  <div
                    key={item.label}
                    className={`
                    flex
                    items-center
                    gap-3.5
                    rounded-xl
                    bg-white/10
                    px-4
                    py-3
                    backdrop-blur-sm
                    lg:rounded-none
                    lg:bg-transparent
                    lg:px-8
                    ${
                      index !== stats.length - 1
                        ? "lg:border-r lg:border-brand-accent"
                        : ""
                    }
                    `}
                  >
  
  
                    {/* ICON */}
  
                    <div
                      className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/15
                      "
                    >
  
                      <Icon
                        size={28}
                        strokeWidth={3}
                        className="text-white"
                      />
  
                    </div>
  
  
  
  
  
                    {/* TEXT */}
  
                    <div>
  
                      <p
                        className="
                        text-lg
                        font-black
                        leading-none
                        text-white
                        "
                      >
                        {item.value}
                      </p>
  
  
                      <p
                        className="
                        mt-1
                        whitespace-nowrap
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-wider
                        text-white/70
                        "
                      >
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