import "./sass/work.css";
// import { ReactComponent as React } from "../svg/React.svg";
import cardImage from "../img/card-image2.jpg";

// const title = "Demo Project";
// const description =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aspernatur esse dolor assumenda ipsam fuga quia? Molestias labore obcaecati debitis.";
// const projectName = "Project";
// const tech = {
//   techa: "React",
//   techb: "HTML",
//   techc: "Sass",
// };
// const CardText = ({ title, description }) => {
//   return (
//     <div id="left">
//       <h1>{title}</h1>
//       <p>{description}</p>
//       <button id="btn-demo">Live Demo</button>
//       <button id="btn-git">Github</button>
//     </div>
//   );
// };
// const CardDesign = ({ projectName, tech, imgUrl }) => {
//   return (
//     <div id="right">
//       <div id="card">
//         <div id="card-info">
//           <h1>{projectName}</h1>
//           <p>HTML</p>
//           <p>Sass</p>
//           <p>React</p>
//         </div>
//         <img src={cardImage} alt="" />
//       </div>
//       {/* TODO--------Insert objects for blur effect */}
//       {/* <div id="one"></div> */}
//       {/* <div id="two"></div> */}
//     </div>
//   );
// };
// const MakeWork = ({ orientation }) => {
//   let work;
//   if (orientation) {
//     work = (
//       <div className="work text-first">
//         <CardText title={title} description={description} />
//         <div></div>
//         <CardDesign projectName={projectName} tech={tech} />
//       </div>
//     );
//   } else {
//     work = (
//       <div className="work design-first">
//         <CardDesign projectName={projectName} tech={tech} />
//         <div></div>
//         <CardText title={title} description={description} />
//       </div>
//     );
//   }
//   return work;
// };

function MakeWork1() {
  return (
    <div id="work">
      <div id="left">
        <h1>Demo Project</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nemo
          rerum, doloribus quod amet impedit.
        </p>
        <div id="btn">
          <button>Github</button>
          <button>Demo</button>
        </div>
      </div>
      <div id="right">
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
function MakeWork2() {
  return (
    <div id="work">
      <h1>Demo Project</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        repudiandae error dicta culpa excepturi sit rerum consectetur aliquam
        reiciendis incidunt facere aperiam recusandae consequatur, beatae dolore
        laudantium sint amet quo unde fugit minima quas provident a deleniti!
        Earum, ullam quibusdam!
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
  );
}

function MakeWork3() {
  return (
    <div id="work-container">
      <div id="work">
        <h1 id="work-heading">Demo Project</h1>
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
    <div id="work-container-wrapper">
      {/* <MakeWork1 /> */}
      <MakeWork3 />
      <MakeWork3 />
      <MakeWork3 />
    </div>
  );
}
