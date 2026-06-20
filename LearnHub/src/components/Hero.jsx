export default function Hero() {
  return (
    <section className="px-6 md:px-16 py-10">
      <div className="bg-[#1c1d3f] rounded-3xl overflow-hidden grid lg:grid-cols-2 items-center">

        {/* Left */}
        <div className="p-10 md:p-16 text-white">

          <span className="bg-purple-600 px-4 py-2 rounded-full text-sm font-medium">
            🚀 #1 Online Learning Platform
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-6">
            Reimagine your career in the AI era
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            Learn AI, Web Development, Python and trending skills
            from industry experts.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-purple-700 transition">
              Explore Courses
            </button>

            <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">

            <div>
              <h3 className="text-3xl font-bold text-purple-400">
                10K+
              </h3>
              <p className="text-gray-400">
                Students
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-400">
                500+
              </h3>
              <p className="text-gray-400">
                Courses
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-400">
                4.9★
              </h3>
              <p className="text-gray-400">
                Rating
              </p>
            </div>

          </div>

        </div>

        {/* Right */}
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
          alt="Hero"
          className="h-full w-full object-cover"
        />

      </div>
    </section>
  );
}