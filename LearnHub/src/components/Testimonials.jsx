export default function Testimonials() {
  return (
    <section className="px-6 md:px-16 py-20 bg-gray-100 rounded-3xl mx-6 md:mx-16">

      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        What Students Say
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300">

          <h1 className="text-yellow-500 text-2xl">
            ⭐⭐⭐⭐⭐
          </h1>

          <p className="mt-6 text-lg leading-9 text-gray-700">
            "This platform helped me learn React easily and improve my frontend skills."
          </p>

          <div className="mt-8 flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-purple-500"></div>

            <div>
              <h3 className="font-bold text-xl">
                Rahul Sharma
              </h3>

              <p className="text-gray-500">
                Frontend Developer
              </p>
            </div>

          </div>

        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300">

          <h1 className="text-yellow-500 text-2xl">
            ⭐⭐⭐⭐⭐
          </h1>

          <p className="mt-6 text-lg leading-9 text-gray-700">
            "Amazing UI and best coding courses. I loved the overall learning experience."
          </p>

          <div className="mt-8 flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-pink-500"></div>

            <div>
              <h3 className="font-bold text-xl">
                Priya Patil
              </h3>

              <p className="text-gray-500">
                UI/UX Designer
              </p>
            </div>

          </div>

        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300">

          <h1 className="text-yellow-500 text-2xl">
            ⭐⭐⭐⭐⭐
          </h1>

          <p className="mt-6 text-lg leading-9 text-gray-700">
            "I got my internship after learning web development from LearnHub."
          </p>

          <div className="mt-8 flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-indigo-500"></div>

            <div>
              <h3 className="font-bold text-xl">
                Akash More
              </h3>

              <p className="text-gray-500">
                React Developer
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}