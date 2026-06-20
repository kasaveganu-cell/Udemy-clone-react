export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Frontend Developer",
      review:
        "LearnHub helped me master React and build real-world projects. The courses are practical and easy to understand.",
      color: "bg-purple-500",
    },
    {
      name: "Priya Patil",
      role: "UI/UX Designer",
      review:
        "Amazing platform with modern UI and high-quality content. I improved my design skills significantly.",
      color: "bg-pink-500",
    },
    {
      name: "Akash More",
      role: "React Developer",
      review:
        "I got my internship after completing the Web Development track on LearnHub. Highly recommended!",
      color: "bg-indigo-500",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-20 bg-gray-100 rounded-3xl mx-6 md:mx-16">

      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          What Students Say
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          Thousands of learners trust LearnHub to achieve their career goals.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-16">

        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >

            <div className="text-yellow-500 text-2xl">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              "{item.review}"
            </p>

            <div className="mt-8 flex items-center gap-4">

              <div
                className={`w-14 h-14 rounded-full ${item.color}`}
              ></div>

              <div>
                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.role}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}