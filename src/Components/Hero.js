import "./sass/hero.css";
import { Nav } from "./Nav";
import { Link } from "react-scroll";
function Hero() {
  return (
    <div id="hero-container">
      <div id="hero-left">
        <div>
          <h5 id="hero-tag">Full Stack Developer</h5>
          <h1 id="hero-heading">
            Making ideas into <span>Reality.</span>
          </h1>
          <Link
            activeClass="active"
            to="intro-container"
            spy={true}
            smooth={true}
            duration={400}
          >
            <button id="btn-works">My Works</button>
          </Link>

          <button id="btn-resume">Resume</button>
        </div>
      </div>
      <div id="hero-right"></div>
    </div>
  );
}
export function HeroComp() {
  return (
    <div id="hero-comp">
      <Nav />
      <Hero />
    </div>
  );
}
