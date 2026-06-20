import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1c1d3f] to-[#111827] text-white px-6 md:px-16 py-16 mt-20">

      <div className="grid md:grid-cols-4 gap-12">

        {/* Logo */}
        <div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            LearnHub
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Learn trending skills and grow your career with premium online courses from industry experts.
          </p>

          <div className="flex gap-4 mt-6 text-2xl">
            <FaGithub className="hover:text-purple-400 cursor-pointer transition" />
            <FaLinkedin className="hover:text-purple-400 cursor-pointer transition" />
            <FaInstagram className="hover:text-purple-400 cursor-pointer transition" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-2xl font-bold mb-6">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4 text-gray-400">
            <button className="hover:text-white text-left">About</button>
            <button className="hover:text-white text-left">Courses</button>
            <button className="hover:text-white text-left">Careers</button>
            <button className="hover:text-white text-left">Contact</button>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-2xl font-bold mb-6">
            Categories
          </h3>

          <div className="flex flex-col gap-4 text-gray-400">
            <button className="hover:text-white text-left">AI & ML</button>
            <button className="hover:text-white text-left">Web Development</button>
            <button className="hover:text-white text-left">UI/UX Design</button>
            <button className="hover:text-white text-left">Cloud Computing</button>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-bold mb-6">
            Stay Updated
          </h3>

          <p className="text-gray-400 mb-5">
            Subscribe to get latest course updates.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-3 rounded-xl text-black outline-none"
          />

          <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 transition px-5 py-3 rounded-xl">
            Subscribe
          </button>
        </div>

      </div>

      <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

        <p className="text-gray-400">
          © 2026 LearnHub. All rights reserved.
        </p>

        <div className="flex gap-6 text-gray-400">
          <button className="hover:text-white">Privacy Policy</button>
          <button className="hover:text-white">Terms</button>
          <button className="hover:text-white">Support</button>
        </div>

      </div>

    </footer>
  );
}