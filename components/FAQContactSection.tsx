"use client";

import { useState } from "react";
import {
  ChevronDown,
  Send,
  HelpCircle,
  Trash2,
  Mail,
  Phone,
  User,
  CheckCircle,
  ShieldCheck,
  Truck,
  Clock,
  BadgeDollarSign,
  HardHat,
} from "lucide-react";

const services = [
  {
    title: "Residential Dumpster Rentals",
    text:
      "From garage cleanouts to major home renovations, our roll-off dumpsters make cleanup simple. We deliver on time and haul everything away when you're finished.",
  },
  {
    title: "Construction Dumpster Rentals",
    text:
      "Keep your jobsite clean and productive with dependable dumpsters built for contractors, remodelers, and builders.",
  },
  {
    title: "Yard Waste Dumpster Rentals",
    text:
      "Perfect for landscaping projects, tree removal, and outdoor upgrades. Dispose of yard debris quickly.",
  },
  {
    title: "Concrete & Heavy Debris",
    text:
      "Durable dumpsters designed for concrete, asphalt, dirt, and other heavy materials.",
  },
  {
    title: "Roofing Dumpster Rentals",
    text:
      "Reliable dumpster solutions for roof replacements, repairs, and property improvements.",
  },
];

export default function FAQContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-20 xl:py-24">

      {/* BG GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2F4D72_1px,transparent_1px),linear-gradient(to_bottom,#2F4D72_1px,transparent_1px)] bg-[size:45px_45px]" />
      </div>

      {/* BG DETAILS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[-10%] top-[20%] h-px w-[120%] rotate-[-8deg] bg-brand-primary/10" />
        <div className="absolute left-[-10%] top-[65%] h-px w-[120%] rotate-[6deg] bg-brand-accent/10" />

        <div className="absolute right-[8%] top-[12%] h-52 w-52 rounded-full border border-brand-primary/10" />
        <div className="absolute right-[13%] top-[17%] h-32 w-32 rounded-full border border-brand-primary/10" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.05)_100%)]" />
      </div>

      {/* GLOWS */}
      <div className="pointer-events-none absolute left-[-150px] top-20 h-[280px] w-[280px] rounded-full bg-brand-primary/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-[-100px] bottom-10 h-[250px] w-[250px] rounded-full bg-brand-accent/20 blur-[100px]" />

      {/* GRID FIXED */}
      <div
        className="
        relative
        mx-auto
        grid
        max-w-[1400px]
        gap-6
        py-6

        md:grid-cols-2
        xl:grid-cols-[350px_minmax(0,1fr)_450px]

        lg:gap-8
        xl:gap-10
      "
      >

        {/* FAQ */}
        <div className="border-b pb-6 md:border-b-0 md:border-r md:pr-6 xl:pr-10">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent text-white shadow-lg sm:h-12 sm:w-12">
              <HelpCircle size={20}/>
            </div>

            <div className="block">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent sm:text-xs">
                Customer Support
              </p>

              <h2 className="text-2xl font-black leading-tight text-brand-primary sm:text-3xl">
                Questions? We've Got Answers.
              </h2>
            </div>
          </div>

          <p className="mt-4 text-sm font-medium leading-6 text-slate-600 sm:mt-6 sm:leading-7">
            Not sure what dumpster size you need? Our team helps homeowners and contractors find the right cleanup solution.
          </p>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:mt-7 sm:p-6">

            <div className="flex items-center gap-2">
              <ShieldCheck size={19} className="text-brand-primary"/>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary sm:text-xs">
                Why Choose Us
              </p>
            </div>

            <div className="mt-4 space-y-3 sm:mt-5">
              <TrustItem icon={<Truck size={16}/>} text="Fast delivery & pickup"/>
              <TrustItem icon={<Clock size={16}/>} text="Flexible schedules"/>
              <TrustItem icon={<BadgeDollarSign size={16}/>} text="Upfront pricing"/>
            </div>

          </div>

        </div>

        {/* SERVICES */}
        <div className="border-b pb-6 md:pb-0 xl:border-b-0 xl:border-r xl:px-8">

          <div className="mb-4 flex items-center justify-between sm:mb-6">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-white shadow-lg sm:h-12 sm:w-12">
                <Trash2 size={20}/>
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-accent">
                  Dumpster Solutions
                </p>

                <h2 className="text-xl font-black text-brand-primary sm:text-2xl">
                  Our Services
                </h2>
              </div>
            </div>

            <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-[10px] font-black text-brand-primary">
              5 SERVICES
            </span>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            {services.map((service,index)=>(
              <ServiceCard key={index} title={service.title} text={service.text}/>
            ))}
          </div>

        </div>

        {/* CONTACT */}
        <div className="md:col-span-2 xl:col-span-1">

          <div className="relative overflow-hidden rounded-3xl bg-brand-primary p-5 shadow-2xl sm:p-8 lg:p-9">

            {/* GLOWS KEEP */}
            <div className="pointer-events-none absolute right-[-50px] top-[-50px] h-36 w-36 rounded-full bg-white/10 blur-3xl"/>
            <div className="pointer-events-none absolute bottom-[-70px] left-[-60px] h-48 w-48 rounded-full bg-brand-accent/40 blur-3xl"/>

            <div className="relative">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                  <HardHat size={20}/>
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 sm:text-xs">
                    Get Started
                  </p>

                  <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl">
                    Need A Dumpster?
                  </h2>
                </div>
              </div>

              <p className="mt-4 text-sm font-medium leading-6 text-white/75 sm:mt-5 sm:leading-7">
                Tell us about your cleanup project and we'll help you choose the right dumpster size and rental option.
              </p>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 sm:mt-6 sm:rounded-2xl sm:p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-brand-accent"/>
                  <p className="text-xs font-bold text-white sm:text-sm">
                    Same-day quotes available
                  </p>
                </div>
              </div>

              <form className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">

                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  <Input icon={<User size={16}/>} placeholder="Full Name"/>
                  <Input icon={<Phone size={16}/>} placeholder="Phone Number"/>
                </div>

                <Input icon={<Mail size={16}/>} placeholder="Email Address"/>

                <textarea
                  rows={2}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-white/20 bg-white/10 p-3 text-sm font-medium text-white placeholder:text-white/50 outline-none transition focus:border-brand-accent focus:bg-white/15 sm:rounded-2xl sm:p-4"
                />

                <button
                  type="button"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-brand-accent py-3.5 text-xs font-black uppercase tracking-wide text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl sm:rounded-2xl sm:py-4 sm:text-sm"
                >
                  REQUEST YOUR QUOTE
                  <Send size={16} className="transition-transform group-hover:translate-x-1"/>
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

/* components unchanged */
function ServiceCard({ title, text }: { title:string; text:string }) {
  const [open,setOpen]=useState(false);

  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-xl sm:rounded-2xl">

      <button onClick={()=>setOpen(!open)} className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-5">

        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white sm:h-8 sm:w-8">
            <Trash2 size={14}/>
          </div>

          <span className="text-xs font-black text-brand-primary sm:text-sm">{title}</span>
        </div>

        <ChevronDown size={18} className={`transition ${open ? "rotate-180":""}`}/>
      </button>

      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="border-t px-4 py-3 text-xs text-slate-600 sm:text-sm">{text}</div>
        </div>
      </div>

    </div>
  );
}

function TrustItem({ icon, text }: { icon:React.ReactNode; text:string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">{icon}</div>
      <p className="text-xs font-bold text-brand-primary sm:text-sm">{text}</p>
    </div>
  );
}

function Input({ icon, placeholder }: { icon:React.ReactNode; placeholder:string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-3.5 py-3 focus-within:border-brand-accent focus-within:bg-white/15 sm:px-4 sm:py-3.5">
      <span className="text-white/60">{icon}</span>
      <input placeholder={placeholder} className="w-full bg-transparent text-sm text-white placeholder:text-white/50 outline-none"/>
    </div>
  );
}