// import { Nav } from "./Components/Nav";
import { HeroComp } from "./Components/Hero";
import { Intro } from "./Components/Intro";
import { Work } from "./Components/Work";
import { Articles } from "./Components/Articles";
import { Contact } from "./Components/ContactComponent";
function App() {
  return (
    <div id="main-container">
      <HeroComp />
      <Intro />
      <Work />
      <Articles />
      <Contact />
    </div>
  );
}

export default App;
