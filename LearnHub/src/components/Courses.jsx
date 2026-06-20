
import { useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const courses = [
  {
    title: "AI Engineer Bootcamp",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    price: "₹799",
    rating: "4.8",
  },
  {
    title: "Python Masterclass",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop",
    price: "₹999",
    rating: "4.9",
  },
  {
    title: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
    price: "₹699",
    rating: "4.7",
  },
  {
    title: "React JS Guide",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
    price: "₹899",
    rating: "4.9",
  },
];

export default function Courses() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (course) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(course);

    localStorage.setItem("cart", JSON.stringify(cart));

    setMessage(`✅ ${course.title} purchased successfully!`);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <section className="px-6 md:px-16 py-16 overflow-hidden">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Trending Courses
          </h2>

          <p className="text-gray-500 mt-3 text-lg">
            Learn premium tech skills from industry experts.
          </p>
        </div>

        <button className="bg-purple-600 text-white px-6 py-3 rounded-2xl hover:bg-purple-700 transition">
          View All
        </button>

      </div>

      <div className="mt-8">
        <input
          type="text"
          placeholder="Search Courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-purple-600"
        />
      </div>

      {message && (
        <div className="mt-4 bg-green-100 text-green-700 px-4 py-3 rounded-xl">
          {message}
        </div>
      )}

      <p className="mt-4 text-gray-600">
        {filteredCourses.length} Courses Found
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 items-stretch">

        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 flex flex-col min-h-[500px]"
          >

            <div className="overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="h-56 w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm inline-block w-fit">
                Bestseller
              </span>

              <h3 className="text-2xl font-bold mt-4 text-gray-900 leading-snug">
                {course.title}
              </h3>

              <p className="text-gray-500 mt-2">
                LearnHub Academy
              </p>

              <div className="flex items-center gap-2 mt-4 text-yellow-500">
                <FaStar />
                <span className="font-semibold">
                  {course.rating}
                </span>
              </div>

              <div className="flex-grow"></div>

              <div className="flex items-center justify-between mt-8">

                <h4 className="text-3xl font-bold text-purple-600">
                  {course.price}
                </h4>

                <button
                  onClick={() => addToCart(course)}
                  className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition"
                >
                  <FaShoppingCart />
                  Enroll Now
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

