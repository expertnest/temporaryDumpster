"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  ArrowRight,
  Home,
  Trash2,
  MapPin,
  FileText,
  Building2,
} from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const navLinks = [
    { name: "Home", icon: <Home size={18} /> },
    { name: "Order Online", icon: <Trash2 size={18} /> },
    { name: "Services", icon: <Building2 size={18} /> },
    { name: "Dumpster Sizes", icon: <Trash2 size={18} /> },
    { name: "Service Areas", icon: <MapPin size={18} /> },
    { name: "Resources", icon: <FileText size={18} /> },
    { name: "About", icon: <Building2 size={18} /> },
    { name: "Blog", icon: <FileText size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="flex items-center justify-between px-5 py-2 sm:px-8 lg:px-10">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Temporary Dumpster"
            width={160}
            height={50}
            priority
            className="h-auto w-[110px] object-contain sm:w-[145px] lg:w-[160px]"
          />
        </Link>

        {/* DESKTOP */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href="#"
              className="relative text-base font-bold text-brand-primary transition hover:text-brand-accent after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-brand-accent after:transition-all hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
            aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-white lg:hidden"
        >
          <Menu size={22} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            />

            {/* PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[85%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            >
              {/* TOP */}
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={130}
                  height={42}
                />

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-slate-100 p-2 text-brand-primary"
                >
                  <X size={22} />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <p className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-slate-400">
                  Menu
                </p>

                <div className="space-y-2">
                  {navLinks.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <Link
                        href="#"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-4 rounded-xl px-4 py-3 text-base font-bold text-brand-primary transition hover:bg-slate-50 hover:text-brand-accent"
                      >
                        <span className="text-brand-accent">
                          {item.icon}
                        </span>
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-slate-200 p-6">
                <a
                  href="tel:18008008000"
                  className="mb-3 flex items-center justify-center gap-2 rounded-xl border border-brand-primary py-3 font-bold text-brand-primary"
                >
                  <Phone size={18} />
                  1-800-800-8000
                </a>

                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-brand-accent py-3.5 font-black text-white shadow-lg"
                >
                  GET A QUOTE
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;