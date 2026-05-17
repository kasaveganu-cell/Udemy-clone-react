export default function Categories() {
  return (
    <section className="px-6 md:px-16 py-10">

      <h2 className="text-5xl font-bold mb-10">
        Skills to transform your career
      </h2>

      <div className="flex gap-5 flex-wrap">

        {[
          "Artificial Intelligence",
          "Python",
          "Web Development",
          "UI/UX",
          "Cloud",
        ].map((item) => (
          <button
            key={item}
            className="border px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white transition"
          >
            {item}
          </button>
        ))}

      </div>

        </section>
  );
}