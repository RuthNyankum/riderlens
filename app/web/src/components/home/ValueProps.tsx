import { Bike, Waves, CloudRain } from "lucide-react";

const values = [
  {
    icon: <Bike size={28} strokeWidth={1.8} className="text-white" />,
    title: "Built for Riders",
    description:
      "Every product designed and tested by real motorcycle enthusiasts on real roads.",
  },
  {
    icon: <Waves size={28} strokeWidth={1.8} className="text-white" />,
    title: "Vibration-Safe Systems",
    description:
      "Advanced dampening technology keeps your footage smooth at any speed.",
  },
  {
    icon: <CloudRain size={28} strokeWidth={1.8} className="text-white" />,
    title: "Weather-Ready",
    description:
      "Rain, dust, or shine — our gear is built to handle every condition you ride through.",
  },
];

export default function ValueProps() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-350 px-6 md:px-10">
        {/* Section heading */}
        <h2 className="mb-12 text-center font-['Montserrat'] text-2xl font-extrabold text-dark-gray md:text-3xl">
          Why RiderLens?
        </h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {values.map(({ icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center">
              {/* Icon badge */}
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-orange">
                {icon}
              </div>
              <h3 className="mb-3 font-['Montserrat'] text-lg font-bold text-dark-gray">
                {title}
              </h3>
              <p className="font-['Inter'] text-[0.9375rem] leading-relaxed text-medium-gray">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
