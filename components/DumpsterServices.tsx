import {
    Home,
    HardHat,
    Trees,
    Hammer,
    Layers,
    Trash2,
    ArrowRight,
  } from "lucide-react";
  
  
  const dumpsterServices = [
    {
      title: "Residential",
      subtitle: "Dumpster Rentals",
      icon: Home,
      iconColor: "text-[#2F4D72]",
    },
    {
      title: "Construction",
      subtitle: "Dumpster Rentals",
      icon: HardHat,
      iconColor: "text-[#B7791F]",
    },
    {
      title: "Yard Waste",
      subtitle: "Dumpster Rentals",
      icon: Trees,
      iconColor: "text-[#276749]",
    },
    {
      title: "Concrete",
      subtitle: "Dumpster Rentals",
      icon: Hammer,
      iconColor: "text-[#475569]",
    },
    {
      title: "Roofing",
      subtitle: "Dumpster Rentals",
      icon: Layers,
      iconColor: "text-[#334155]",
    },
    {
      title: "General Cleanout",
      subtitle: "Dumpster Rentals",
      icon: Trash2,
      iconColor: "text-[#B04444]",
    },
  ];
  
  
  const DumpsterRentalTypes = () => {
    return (
      <section
        className="
        relative
        overflow-hidden
        bg-slate-100
        px-4
        py-10
        sm:px-6
        lg:px-8
        lg:py-16
        "
      >
  
  
        {/* INDUSTRIAL BACKGROUND */}
  
        <div
          className="
          pointer-events-none
          absolute
          -left-40
          top-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-brand-primary/10
          blur-[140px]
          "
        />
  
  
        <div
          className="
          pointer-events-none
          absolute
          right-[-120px]
          top-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-brand-accent/10
          blur-[120px]
          "
        />
  
  
        <div
          className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-[120px]
          w-[70%]
          -translate-x-1/2
          bg-brand-primary/5
          blur-[80px]
          "
        />
  
  
  
        <div
          className="
          relative
          mx-auto
          max-w-[1400px]
          "
        >
  
  
  
          {/* HEADER */}
  
          <div className="text-center">
  
            <p
              className="
              mb-2
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-brand-accent
              "
            >
              Dumpster Rentals
            </p>
  
  
  
            <h2
              className="
              mx-auto
              max-w-4xl
              text-xl
              font-black
              leading-tight
              text-brand-primary
              sm:text-3xl
              "
            >
  
              Types Of{" "}
              <span className="text-brand-accent">
                Dumpster Rentals
              </span>{" "}
              Offered By Temporary Dumpster
  
            </h2>
  
  
  
            <div
              className="
              mx-auto
              mt-4
              h-1
              w-20
              rounded-full
              bg-brand-accent
              "
            />
  
          </div>
  
  
  
  
  
  
          {/* CARDS */}
  
          <div
            className="
            mt-10
  
            grid
            grid-cols-2
            gap-3
  
            sm:gap-5
  
            lg:flex
            lg:gap-5
  
            xl:grid
            xl:grid-cols-6
            "
          >
  
  
            {dumpsterServices.map((service)=>{
  
              const Icon = service.icon;
  
  
              return (
  
                <div
                  key={service.title}
                  className="
                  group
                  relative
                  flex
                  min-h-[190px]
                  flex-col
                  items-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-3
                  text-center
                  shadow-md
                  transition-all
                  duration-300
  
                  hover:-translate-y-2
                  hover:border-brand-accent/40
                  hover:shadow-xl
  
                  sm:min-h-[220px]
                  sm:rounded-3xl
                  sm:p-5
  
                  lg:min-w-[190px]
  
                  xl:min-w-0
                  "
                >
  
  
  
                  {/* TOP ACCENT */}
  
                  <div
                    className="
                    absolute
                    left-0
                    top-0
                    h-1
                    w-full
                    bg-brand-accent
                    scale-x-0
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                    "
                  />
  
  
  
  
  
  
                  {/* ICON */}
  
                  <div
                    className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-slate-50
  
                    sm:h-14
                    sm:w-14
                    "
                  >
  
                    <Icon
                      size={25}
                      strokeWidth={1.8}
                      className={`
                      ${service.iconColor}
                      transition-transform
                      duration-300
                      group-hover:scale-110
  
                      sm:h-8
                      sm:w-8
                      `}
                    />
  
                  </div>
  
  
  
  
  
  
  
                  {/* TITLE */}
  
                  <h3
                    className="
                    mt-3
                    text-sm
                    font-black
                    uppercase
                    leading-tight
                    tracking-tight
                    text-brand-primary
  
                    sm:mt-4
                    sm:text-base
                    "
                  >
  
                    {service.title}
  
                  </h3>
  
  
  
  
                  <span
                    className="
                    mt-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wide
                    text-slate-500
  
                    sm:text-xs
                    "
                  >
  
                    {service.subtitle}
  
                  </span>
  
  
  
  
  
  
                  {/* DIVIDER */}
  
                  <div
                    className="
                    mt-3
                    h-1
                    w-7
                    rounded-full
                    bg-brand-accent/60
  
                    sm:w-8
                    "
                  />
  
  
  
  
  
  
  
                  {/* CTA */}
  
                  <div
                    className="
                    mt-auto
                    flex
                    items-center
                    gap-1.5
                    pt-3
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-brand-accent
  
                    sm:pt-4
                    sm:text-[10px]
                    "
                  >
  
                    Learn More
  
                    <ArrowRight size={12}/>
  
                  </div>
  
  
                </div>
  
              );
  
            })}
  
  
          </div>
  
  
        </div>
  
  
      </section>
    );
  };
  
  
  export default DumpsterRentalTypes;