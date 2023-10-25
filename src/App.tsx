import Gallery from "./components/gallery";
import Header from "./components/header";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="max-h-screen overflow-y-scroll ">
      <Navbar />
      <main>
        <Header />
        <Gallery />
      </main>
    </div>
  );
}

export default App;
