"use client";

import { MapPin, Search } from "lucide-react";

export default function ServiceSearchBar() {
  return (
    <section className="relative z-20 -mt-6 bg-gradient-to-b from-brand-primary/10 to-transparent px-4 md:-mt-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-xl lg:flex-row lg:items-center">
          {/* Label */}
          <div className="shrink-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
              Service Area
            </p>

            <h3 className="text-xl font-black text-brand-primary">
              Find Waste Management
            </h3>
          </div>

          {/* Address */}
          <div className="relative flex-1">
            <MapPin
              className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-primary"
              size={20}
            />

            <input
              placeholder="Enter your address"
              className="h-14 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 text-sm font-medium text-slate-800 outline-none transition focus:border-brand-accent focus:bg-white"
            />
          </div>

          {/* Button */}
          <button className="flex h-14 items-center justify-center gap-2 rounded-xl bg-brand-accent px-8 font-bold text-white shadow-lg shadow-brand-accent/30 transition hover:scale-105">
            <Search size={18} />
            Find
          </button>
        </div>
      </div>
    </section>
  );
}