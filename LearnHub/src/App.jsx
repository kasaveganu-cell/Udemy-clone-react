import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Courses from "./components/Courses";
import TrustedCompanies from "./components/TrustedCompanies";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-slate-50 overflow-x-hidden">

      {/* Floating Background */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="fixed bottom-0 right-0 w-72 h-72 bg-pink-500 opacity-20 blur-[120px] rounded-full"></div>

      <Navbar />

      <main className="relative z-10">

        <Hero />

        <Categories />

        <Courses />

        <TrustedCompanies />

        <Testimonials />

      </main>

      <Footer />

    </div>
  );
}