import "./sass/nav.css";
import "./sass/index.css";
import { ReactComponent as Mail } from "../svg/mail.svg";
import { ReactComponent as Linkedin } from "../svg/linkedin.svg";
import { ReactComponent as Github } from "../svg/github.svg";
export function Nav() {
  return (
    <div id="nav-container">
      <li id="logo">
        <span>Abhigyan</span> Verma
      </li>
      <ul className="nav" id="nav-links">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
      </ul>
      <ul className="nav" id="nav-contact">
        <Linkedin />
        <Github />
        <Mail />
      </ul>
    </div>
  );
}
