import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-200">

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          LearnHub
        </h1>

        {/* Search */}
        <div className="hidden lg:flex items-center border border-gray-300 rounded-full px-5 py-3 w-[420px] bg-white shadow-sm">

          <FaSearch className="text-gray-400 text-lg" />

          <input
            type="text"
            placeholder="Search for courses"
            className="outline-none ml-3 w-full bg-transparent text-gray-700"
          />

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          <button className="font-semibold hover:text-purple-600 transition">
            Courses
          </button>

          <button className="font-semibold hover:text-purple-600 transition">
            My Learning
          </button>

          <button className="relative">
            <FaShoppingCart className="text-2xl hover:text-purple-600 transition" />
          </button>

          <button className="border border-gray-300 px-5 py-2 rounded-xl hover:bg-gray-100 transition font-medium">
            Login
          </button>

          <button className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition font-medium shadow-lg shadow-purple-500/20">
            Sign Up
          </button>

        </div>

        {/* Mobile Menu */}
        <button className="md:hidden text-2xl">
          <FaBars />
        </button>

      </div>

    </nav>
  );
}