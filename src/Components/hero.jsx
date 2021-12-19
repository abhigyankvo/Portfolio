import "./sass/hero.css";
export function Hero() {
  return (
    <div id="hero-container">
      <div id="hero-left">
        <div>
          <h5 id="hero-tag">Full Stack Developer</h5>
          <h1 id="hero-heading">
            Making ideas into <span>Reality.</span>
          </h1>
          <button id="btn-works">My Works</button>
          <button id="btn-resume">Resume</button>
        </div>
      </div>
      <div id="hero-right"></div>
    </div>
  );
}
