"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { DollarSign, Truck, Star, Leaf } from "lucide-react";

const heroImages = [
  "/hero.png",
  "/residential.webp",
  "/hero6.webp",
  "/construction.webp",
  "/commercial.webp",
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-brand-primary pb-8 sm:pb-10 md:pb-12 2xl:pb-0">
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-[120px]" />

      <div className="pointer-events-none absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-brand-accent/10 blur-[100px]" />

      {/* MOBILE IMAGE */}
      <div className="relative h-[275px] overflow-hidden animate-fade-in 2xl:hidden">
        <div key={activeImage} className="absolute inset-0 animate-fade-in">
          <Image
            src={heroImages[activeImage]}
            alt="Dumpster rental service"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-brand-primary/20 to-transparent" />
        </div>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              aria-label={`Show image ${index + 1}`}
              aria-pressed={activeImage === index}
              onClick={() => setActiveImage(index)}
              className="flex h-10 w-10 items-center justify-center"
            >
              <span
                className={`rounded-full transition-all ${
                  activeImage === index
                    ? "h-2 w-8 bg-brand-accent"
                    : "h-2 w-2 bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* MAIN SPLIT HERO */}
      <div className="relative grid 2xl:grid-cols-[45%_55%]">
        {/* CONTENT */}
        <div className="flex w-full items-center px-4 py-8 text-left sm:px-6 md:px-10 2xl:min-h-[560px] 2xl:pl-8 2xl:pr-12 animate-fade-up">
          <div className="w-full max-w-none overflow-hidden">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-brand-accent">
              CLEANER TODAY. BETTER TOMORROW.
            </p>

            <h1 className="text-[2.15rem] font-black leading-[0.95] tracking-tight sm:text-5xl">
              <span className="block text-white">
                Temporary Dumpsters
              </span>

              <span className="mt-1 block">
                <span className="text-white">
                  for a{" "}
                </span>

                <span className="text-brand-accent">
                  Cleaner Tomorrow.
                </span>
              </span>
            </h1>

            <p className="mt-3 max-w-4xl text-base leading-snug text-white/80 sm:text-lg">
              Temporary Dumpster provides dumpster rental services nationwide.
              Contact us today for all your waste removal needs!
            </p>

            {/* BUTTONS */}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-lg bg-brand-accent px-8 py-3.5 font-bold text-white shadow-lg shadow-brand-accent/30 transition hover:scale-105">
                ORDER ONLINE
              </button>

              <button className="rounded-lg border-2 border-white/80 px-8 py-3.5 font-bold text-white transition hover:bg-white hover:text-brand-primary">
                GET A QUOTE
              </button>
            </div>

            {/* FEATURES */}
            <div className="mt-6 grid w-full grid-cols-2 gap-y-5 border-t border-white/20 pt-5 pl-6 md:pl-0 sm:grid-cols-4 sm:gap-x-6">
              <Feature
                icon={<DollarSign />}
                title="Upfront Pricing"
                text="No hidden fees"
                color="text-emerald-400"
              />

              <Feature
                icon={<Truck />}
                title="Fast Delivery"
                text="On your schedule"
                color="text-sky-400"
              />

              <Feature
                icon={<Star />}
                title="5-Star Rated"
                text="Trusted service"
                color="text-yellow-400"
              />

              <Feature
                icon={<Leaf />}
                title="Eco-Friendly"
                text="Waste solutions"
                color="text-lime-400"
              />
            </div>
          </div>
        </div>

        {/* DESKTOP IMAGE */}
        <div className="relative hidden self-stretch 2xl:block">
          <div className="absolute inset-0 overflow-hidden">
            <div key={activeImage} className="absolute inset-0 animate-fade-in">
              <div className="absolute inset-0 animate-hero-zoom">
                <Image
                  src={heroImages[activeImage]}
                  alt="Dumpster rental service"
                  fill
                  priority
                  sizes="55vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/75 via-brand-primary/25 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* DESKTOP DOTS */}
            <div className="absolute bottom-6 right-6 flex gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Show image ${index + 1}`}
                  aria-pressed={activeImage === index}
                  onClick={() => setActiveImage(index)}
                  className="flex h-10 w-10 items-center justify-center"
                >
                  <span
                    className={`rounded-full transition-all duration-300 ${
                      activeImage === index
                        ? "h-2 w-8 bg-brand-accent"
                        : "h-2 w-2 bg-white/60"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  text,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  color: string;
}) {
  return (
    <div className="flex min-w-0 items-start gap-3 animate-fade-up">
      <div className={`mt-1 h-6 w-6 shrink-0 ${color}`}>
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-sm font-bold text-white">
          {title}
        </p>

        <p className="text-xs text-white/60">
          {text}
        </p>
      </div>
    </div>
  );
}