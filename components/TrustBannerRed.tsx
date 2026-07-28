import {
    PhoneCall,
    Truck,
    BadgeDollarSign,
    ArrowRight,
  } from "lucide-react";
  
  
  const trustItems = [
    {
      icon: Truck,
      title: "Fast Delivery",
      text: "On Your Schedule",
    },
    {
      icon: BadgeDollarSign,
      title: "Upfront Pricing",
      text: "No Hidden Fees",
    },
  ];
  
  
  
  export default function TrustBannerRed() {
  
  
  return (
  
  <section
  className="
  relative
  w-full
  overflow-hidden
  bg-brand-accent
  "
  >
  
  
  
  
  
  {/* INDUSTRIAL OVERLAY */}
  
  <div
  className="
  pointer-events-none
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
  max-w-lg
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
  
  bg-white
  "
  />
  
  
  
  <p
  className="
  text-[11px]
  
  font-extrabold
  
  uppercase
  
  tracking-[0.25em]
  
  text-white/75
  "
  >
  Roll-Off Dumpster Rentals
  </p>
  
  
  
  </div>
  
  
  
  
  
  
  <div
  className="
  flex
  
  items-center
  
  gap-3
  "
  >
  
  
  <div
  className="
  flex
  
  h-12
  
  w-12
  
  shrink-0
  
  items-center
  
  justify-center
  
  bg-white
  
  text-brand-accent
  
  shadow-md
  "
  >
  
  <PhoneCall
  size={24}
  strokeWidth={3}
  />
  
  </div>
  
  
  
  
  
  
  <div>
  
  
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
  Ready To Get Started?
  </h2>
  
  
  
  
  
  <p
  className="
  mt-1
  
  text-sm
  
  font-medium
  
  leading-relaxed
  
  text-white/85
  "
  >
  Call Temporary Dumpster today to book your roll-off dumpster rental!
  </p>
  
  
  
  </div>
  
  
  
  
  </div>
  
  
  
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  {/* FEATURES */}
  
  <div
  className="
  flex
  
  flex-col
  
  gap-5
  
  
  sm:flex-row
  
  sm:gap-8
  
  
  lg:border-l
  
  lg:border-white/30
  
  lg:pl-8
  "
  >
  
  
  {
  trustItems.map((item,index)=>{
  
  
  const Icon = item.icon;
  
  
  return (
  
  <div
  key={index}
  
  className="
  flex
  
  items-center
  
  gap-3
  "
  >
  
  
  
  
  
  <div
  className="
  flex
  
  h-11
  
  w-11
  
  shrink-0
  
  items-center
  
  justify-center
  
  bg-white/15
  
  text-white
  "
  >
  
  <Icon
  size={23}
  strokeWidth={2.8}
  />
  
  </div>
  
  
  
  
  
  
  
  <div>
  
  <p
  className="
  text-sm
  
  font-black
  
  uppercase
  
  tracking-wide
  
  text-white
  "
  >
  {item.title}
  </p>
  
  
  
  
  <p
  className="
  text-sm
  
  font-semibold
  
  text-white/75
  "
  >
  {item.text}
  </p>
  
  
  
  </div>
  
  
  
  
  </div>
  
  
  )
  
  })
  
  }
  
  
  
  </div>
  
  
  
  
  
  
  
  
  
  {/* BUTTON */}
  
  <button
  className="
  group
  
  flex
  
  items-center
  
  justify-center
  
  gap-3
  
  bg-white
  
  px-7
  
  py-3.5
  
  text-sm
  
  font-black
  
  tracking-wide
  
  text-brand-accent
  
  shadow-lg
  
  transition
  
  hover:bg-slate-100
  "
  >
  
Request a Quote
  
  
  <ArrowRight
  size={18}
  
  strokeWidth={3}
  
  className="
  transition
  
  group-hover:translate-x-1
  "
  />
  
  
  </button>
  
  
  
  
  
  
  
  
  </div>
  
  
  
  
  
  
  </div>
  
  
  
  </section>
  
  
  )
  
  }