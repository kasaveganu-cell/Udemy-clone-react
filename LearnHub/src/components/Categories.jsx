export default function Categories() {
  const categories = [
    {
      title: "Artificial Intelligence",
      icon: "🤖",
    },
    {
      title: "Python",
      icon: "🐍",
    },
    {
      title: "Web Development",
      icon: "💻",
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
    },
    {
      title: "Cloud Computing",
      icon: "☁️",
    },
    {
      title: "Cyber Security",
      icon: "🔒",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-16 bg-gray-50">
      <div className="text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Skills to Transform Your Career
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          Choose your favorite domain and start learning today.
        </p>

      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-14">

        {categories.map((item) => (
          <div
            key={item.title}
            className="bg-white p-6 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center"
          >

            <div className="text-5xl mb-4">
              {item.icon}
            </div>

            <h3 className="font-semibold text-gray-800">
              {item.title}
            </h3>

          </div>
        ))}

      </div>
    </section>
  );
}