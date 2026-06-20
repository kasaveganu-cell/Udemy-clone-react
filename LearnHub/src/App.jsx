import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import TrustedCompanies from "./components/TrustedCompanies";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="categories">
        <Categories />
      </div>

      <div id="courses">
        <Courses />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="companies">
        <TrustedCompanies />
      </div>

      <Footer />
    </>
  );
}

export default App;