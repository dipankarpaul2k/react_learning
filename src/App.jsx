import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
