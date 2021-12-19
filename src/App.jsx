import { Nav } from "./Components/Nav";
import { Hero } from "./Components/Hero";
import { Intro } from "./Components/Intro";
import { Work } from "./Components/Work";
import "./Components/sass/App.css";
function App() {
  return (
    <div id="main-container">
      <div id="main-hero">
        <Nav />
        <Hero />
      </div>
      <div id="main-intro">
        <Intro />
      </div>
      <div id="main-work">
        <Work />
      </div>
    </div>
  );
}

export default App;
