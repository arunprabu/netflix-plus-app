import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AddUser from "../pages/UsersPage/AddUser/AddUser";
import UserDetails from "../pages/UsersPage/UserDetails/UserDetails";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";
import UnitTestingDemoPage from "../pages/UnitTestingDemoPage/UnitTestingDemoPage";

// Implementing Lazy Loading
const UsersPage = lazy(() => import("../pages/UsersPage/UsersPage"));
const HocDemoPage = lazy(() =>
  import("../pages/HocDemoPage/HocDemoPage")
);
const TodosPage = lazy(() => import("../pages/TodosPage/TodosPage"));

const AppRoutes = () => {
  return (
    // Fallback UI will appear when the lazy components are loaded
    <Suspense fallback={<div className="spinner spinner-border text-success"></div>}>
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
        <Route path="/unit-testing-demo" element={<UnitTestingDemoPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
