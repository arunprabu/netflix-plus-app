// Component can be made up of JS, JSX and CSS (optional)
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"; // Importing styles for App comp
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import { ErrorBoundary } from "react-error-boundary";
import UsersPage from "./pages/UsersPage/UsersPage";
import AddUser from "./pages/UsersPage/AddUser/AddUser";
import UserDetails from "./pages/UsersPage/UserDetails/UserDetails";
import HocDemoPage from "./pages/HocDemoPage/HocDemoPage";
import TodosPage from "./pages/TodosPage/TodosPage";

// App Component Definition
// this is the ideal place for the layout
function App() {
  // must return JSX
  return (
    <BrowserRouter>
      <ErrorBoundary
        fallback={
          <div className="alert alert-danger">
            Something went wrong. Try again later
          </div>
        }
      >
        <Header></Header>

        <main className="mt-5 pt-2 container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/add" element={<AddUser />} />
            {/* URL Param - userId */}
            <Route path="/users/:userId" element={<UserDetails />} />
            <Route path="/hoc" element={<HocDemoPage />} />
            <Route path="/todos" element={<TodosPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </main>

        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

// exporting the component
export default App;
