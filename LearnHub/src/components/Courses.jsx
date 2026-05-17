import { FaStar } from "react-icons/fa";

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
  return (
    <section className="px-6 md:px-16 py-16 overflow-hidden">

      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Trending Courses
          </h2>

          <p className="text-gray-500 mt-3 text-lg">
            Learn premium tech skills from industry experts.
          </p>

        </div>

        <button className="bg-purple-600 text-white px-6 py-3 rounded-2xl hover:bg-purple-700 transition w-fit shadow-lg shadow-purple-500/20">
          View All
        </button>

      </div>

      {/* Course Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 items-stretch">

        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 flex flex-col min-h-[500px]"
          >

            {/* Image */}
            <div className="overflow-hidden">

              <img
                src={course.image}
                alt={course.title}
                className="h-56 w-full object-cover hover:scale-110 transition duration-500"
              />

            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">

              {/* Badge */}
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm inline-block w-fit">
                Bestseller
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold mt-4 text-gray-900 leading-snug">
                {course.title}
              </h3>

              {/* Author */}
              <p className="text-gray-500 mt-2">
                LearnHub Academy
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-4 text-yellow-500">

                <FaStar />

                <span className="font-semibold">
                  {course.rating}
                </span>

              </div>

              {/* Spacer */}
              <div className="flex-grow"></div>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-8">

                <h4 className="text-3xl font-bold text-purple-600">
                  {course.price}
                </h4>

                <button className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition shadow-lg shadow-purple-500/20">
                  Buy
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}