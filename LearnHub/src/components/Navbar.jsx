import { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          LearnHub
        </a>

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

          <a
            href="#courses"
            className="font-semibold hover:text-purple-600 transition"
          >
            Courses
          </a>

          <a
            href="#categories"
            className="font-semibold hover:text-purple-600 transition"
          >
            Categories
          </a>

          <a
            href="#testimonials"
            className="font-semibold hover:text-purple-600 transition"
          >
            Reviews
          </a>

          <a
            href="#companies"
            className="font-semibold hover:text-purple-600 transition"
          >
            Companies
          </a>

          <button className="relative">
            <FaShoppingCart className="text-2xl hover:text-purple-600 transition" />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              4
            </span>
          </button>

          <button className="border border-purple-500 text-purple-600 px-5 py-2 rounded-xl hover:bg-purple-50 transition">
            Login
          </button>

          <button className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition">
            Sign Up
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-5">

          <div className="flex flex-col gap-4">

            <a
              href="#courses"
              onClick={() => setMenuOpen(false)}
              className="font-semibold"
            >
              Courses
            </a>

            <a
              href="#categories"
              onClick={() => setMenuOpen(false)}
              className="font-semibold"
            >
              Categories
            </a>

            <a
              href="#testimonials"
              onClick={() => setMenuOpen(false)}
              className="font-semibold"
            >
              Reviews
            </a>

            <a
              href="#companies"
              onClick={() => setMenuOpen(false)}
              className="font-semibold"
            >
              Companies
            </a>

            <button className="border border-purple-500 text-purple-600 py-2 rounded-xl">
              Login
            </button>

            <button className="bg-purple-600 text-white py-2 rounded-xl">
              Sign Up
            </button>

          </div>

        </div>
      )}
    </nav>
  );
}