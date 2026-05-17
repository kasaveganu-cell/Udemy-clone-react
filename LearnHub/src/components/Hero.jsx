export default function Hero() {
  return (
    <section className="px-6 md:px-16 py-10">

      <div className="bg-[#1c1d3f] rounded-3xl overflow-hidden grid lg:grid-cols-2 items-center">

        {/* Left */}
        <div className="p-10 md:p-16 text-white">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Reimagine your career in the AI era
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            Learn AI, Web Development, Python and trending skills
            from industry experts.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
            Explore Courses
          </button>

        </div>

        {/* Right */}
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />

      </div>

    </section>
  );
}