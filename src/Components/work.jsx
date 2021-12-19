import "./sass/work.css";
import { ReactComponent as React } from "../svg/React.svg";
import cardImage from "../img/card-image2.jpg";

const title = "Demo Project";
const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aspernatur esse dolor assumenda ipsam fuga quia? Molestias labore obcaecati debitis.";
const projectName = "Project";
const tech = {
  techa: "React",
  techb: "HTML",
  techc: "Sass",
};
const CardText = ({ title, description }) => {
  return (
    <div id="left">
      <h1>{title}</h1>
      <p>{description}</p>
      <button id="btn-demo">Live Demo</button>
      <button id="btn-git">Github</button>
    </div>
  );
};
const CardDesign = ({ projectName, tech, imgUrl }) => {
  return (
    <div id="right">
      <div id="card">
        <div id="card-info">
          <h1>{projectName}</h1>
          <p>HTML</p>
          <p>Sass</p>
          <p>React</p>
        </div>
        <img src={cardImage} alt="" />
      </div>
      {/* TODO--------Insert objects for blur effect */}
      <div id="one"></div>
      <div id="two"></div>
    </div>
  );
};
const MakeWork = ({ orientation }) => {
  let work;
  if (orientation) {
    work = (
      <div className="work text-first">
        <CardText title={title} description={description} />
        <div></div>
        <CardDesign projectName={projectName} tech={tech} />
      </div>
    );
  } else {
    work = (
      <div className="work design-first">
        <CardDesign projectName={projectName} tech={tech} />
        <div></div>
        <CardText title={title} description={description} />
      </div>
    );
  }
  return work;
};

export function Work() {
  return (
    <div id="work-container">
      <MakeWork orientation={true} />
      <MakeWork orientation={false} />
    </div>
  );
}
