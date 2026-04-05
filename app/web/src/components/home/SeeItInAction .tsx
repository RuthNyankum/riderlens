const clips = [
  {
    id: 1,
    label: "Helmet POV for immersive ride footage",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    accent: "bg-[#2b2d42]/70",
  },
  {
    id: 2,
    label: "Handlebar mount for stable road views",
    image:
      "https://images.unsplash.com/photo-1568772585407-9f595aedd0a7?w=800&auto=format&fit=crop",
    accent: "bg-[#00b4d8]/60",
  },
];

export default function SeeItInAction() {
  return (
    <section className="bg-dark-charcoal py-16">
      <div className="mx-auto max-w-350 px-6 md:px-10">
        <h2 className="mb-10 text-center font-['Montserrat'] text-2xl font-extrabold text-white md:text-3xl">
          See It In Action
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {clips.map(({ id, label, image, accent }) => (
            <div key={id} className="group relative overflow-hidden rounded-xl">
              <img
                src={image}
                alt={label}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Label overlay */}
              <div
                className={`absolute bottom-0 left-0 right-0 ${accent} px-4 py-3 backdrop-blur-sm`}
              >
                <p className="font-['Inter'] text-sm font-medium text-white">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
