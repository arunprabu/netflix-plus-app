// Component can be made up of JS, JSX and CSS (optional)
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"; // Importing styles for App comp
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ErrorBoundary } from "react-error-boundary";
import { PageContext } from "./contexts/PageContext";
import AppRoutes from "./routes/AppRoutes";

// App Component Definition
// this is the ideal place for the layout

// Step 2 of any to any comp commn using context api
// Let's keep some data in a variable
const userStatus = {
  username: 'john', 
  isPremiumUser: true,
  lastLogin: new Date()
}

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
          {/* Step 2 of of any to any comp commn using context api continues... 
          -- Providing data here */}
          <PageContext.Provider value={userStatus}>
            {/* TODO: create a component for all these routes */}
            <AppRoutes />
          </PageContext.Provider>
        </main>

        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

// exporting the component
export default App;
