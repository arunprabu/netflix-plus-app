// Component can be made up of JS, JSX and CSS (optional)
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"; // Importing styles for App comp
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";

// App Component Definition
// this is the ideal place for the layout
function App() {
  // must return JSX
  return (
    <BrowserRouter>
      <Header></Header>

      <main className="mt-5 pt-2 container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

// exporting the component
export default App;
