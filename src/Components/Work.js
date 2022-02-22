import "./sass/work.css";
function MakeWork() {
  return (
    <div id="work-container">
      <div id="work">
        <h2 id="work-heading">Demo Project</h2>
        <p id="work-summary">
          A webapp to increase reach for my father's travel bussiness and
          seamless travel experience for customers. Create using React, Sass and
          BeltText/Twillio.
        </p>
        <div id="btn">
          <button>Github</button>
          <button>Demo</button>
        </div>
        <div id="card">
          <div id="card-details">
            <h1>Project</h1>
            <p>HTML</p>
            <p>Sass</p>
            <p>React</p>
          </div>
          <div id="card-image"></div>
        </div>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <div className="wrapper" id="work-container-wrapper">
      <MakeWork />
      <MakeWork />
      <MakeWork />
    </div>
  );
}
