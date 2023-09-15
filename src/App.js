// Component can be made up of JS, JSX and CSS (optional)
import './App.css'; // Importing styles for App comp
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

// App Component Definition
// this is the ideal place for the layout
function App() {
  // must return JSX
  return (
    <div>
      <Header></Header>

      <main className='mt-5 pt-2'>
        <h1>Success!</h1>
        <p>Testing....!!!!</p>
      </main>

      <Footer />
    </div>
  );
}

// exporting the component
export default App;