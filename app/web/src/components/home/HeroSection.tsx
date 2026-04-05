import { CheckCircle } from "lucide-react";
import Button from "../ui/Button";
// import bgImage from "../assets/background.jpg";

const trustBadges = ["Free Shipping", "30-Day Returns", "2-Year Warranty"];

export default function HeroSection() {
  return (
    <section className="relative min-h-130 w-full overflow-hidden bg-dark-charcoal">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&auto=format&fit=crop')",
        }}
        aria-hidden="true"
      />
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        aria-hidden="true"
      /> */}
      <div
        className="absolute inset-0 bg-dark-charcoal/65"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-350 flex-col items-center px-6 pb-16 pt-24 text-center md:px-10">
        {/* Heading */}
        <h1 className="font-['Montserrat'] text-3xl font-extrabold leading-tight text-white md:text-5xl">
          Action Cameras &amp; Mounts
          <br />
          Built for Motorcycle Riders
        </h1>

        {/* Sub-heading */}
        <p className="mt-4 font-['Inter'] text-base font-normal text-white/80 md:text-lg">
          Capture every ride. Stable. Weatherproof. Secure.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/shop?category=action-cameras" size="lg">
            Shop Cameras
          </Button>
          <Button href="/shop?category=bike-mounts" variant="outline" size="lg">
            Shop Mounts
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-1.5 font-['Inter'] text-sm font-medium text-white/90"
            >
              <CheckCircle
                size={16}
                className="text-electric-blue"
                strokeWidth={2.5}
              />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
