import "./nav.css";
import "./index.css";
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
        <li>About</li>
        <li>Projects</li>
        <li>Articles</li>
        <li>Contact</li>
      </ul>
      <ul className="nav" id="nav-contact">
        <Linkedin />
        <Github />
        <Mail />
      </ul>
    </div>
  );
}
