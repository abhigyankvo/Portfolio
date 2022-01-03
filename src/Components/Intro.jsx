import "./sass/intro.css";
import { ReactComponent as React } from "../svg/React.svg";
import { ReactComponent as Node } from "../svg/Node.svg";
import { ReactComponent as Grpc } from "../svg/Grpc.svg";
export function Intro() {
  return (
    <div id="intro-container">
      <p id="intro-title">About</p>
      <div>
        <h1 id="intro-heading">Hi, I’m Abhigyan. Nice to meet you.</h1>
        <p id="intro-content">
          I did my UG from NIT Jalandhar. Since the beginning, I have a great
          interest in technology. I have worked on frontend and backend web
          apps, written articles about interesting new technologies, and
          contributed to help improve open source projects. I'm quietly
          confident, naturally curious, and perpetually working on improving my
          chops one problem at a time.
        </p>
      </div>

      {/* <React id="hello" />
      <Node />
      <Grpc /> */}
    </div>
  );
}
