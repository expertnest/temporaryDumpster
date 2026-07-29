import Image from "next/image";
import { Phone, ShoppingCart } from "lucide-react";

const TopUtilityBar = () => {
  return (
    <div className="top-utility-bar hidden lg:block">
      <div className="flex w-full items-center justify-between gap-2 bg-brand-primary px-3 py-2 text-white sm:px-8">
        {/* Left Actions */}
        <div className="flex items-center gap-2">
          {/* Order */}
          <button className="flex items-center justify-center gap-1.5 rounded-full bg-brand-accent px-5 py-2 text-sm font-black text-white transition hover:bg-brand-accent-hover">
            <ShoppingCart size={15} strokeWidth={2.5} />
            <span>Order Online</span>
          </button>

          {/* Phone */}
          <a
            href="tel:18008008000"
            className="flex items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-black text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            <Phone size={15} strokeWidth={2.5} />
            <span>1-800-800-8000</span>
          </a>
        </div>

        {/* Google Rating */}
        <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
          <Image
            src="/googleimg.webp"
            alt="Google Reviews"
            width={55}
            height={20}
            className="h-5 w-auto object-contain"
          />

          <span className="text-xs tracking-wide text-yellow-400">
            ★★★★★
          </span>

          <span className="text-xs font-black">5.0</span>
        </div>
      </div>
    </div>
  );
};

export default TopUtilityBar;