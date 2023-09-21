// Component can be made up of JS, JSX and CSS (optional)
import "./App.css"; // Importing styles for App comp
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

// App Component Definition
// this is the ideal place for the layout
function App() {
  // must return JSX
  return (
    <div>
      <Header></Header>

      <main className="mt-5 pt-2 container">
        <HomePage />
      </main>

      <Footer />
    </div>
  );
}

// exporting the component
export default App;
