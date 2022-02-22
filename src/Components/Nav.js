import { Link } from "react-scroll";
import "./sass/nav.css";
import "./sass/index.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ReactComponent as Mail } from "../svg/mail.svg";
import { ReactComponent as Linkedin } from "../svg/linkedin.svg";
import { ReactComponent as Github } from "../svg/github.svg";
const navItems = ["About", "Projects", "Articles", "Contact"];
const navRedirect = [
  "intro-container",
  "work-container-wrapper",
  "articles-container-wrapper",
  "contact-container-wraper",
];

const NavList = () => {
  return (
    <>
      {navItems.map((item, index) => (
        <div className="link">
          <Link
            to={navRedirect[index]}
            spy={true}
            smooth={true}
            duration={400}
            key={index}
          >
            {item}
          </Link>
        </div>
      ))}
    </>
  );
};

export function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 768);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const openLink = (event) => {
    window.open(event);
  };

  return (
    <div id="nav-container">
      <div id="logo">Abhigyan Verma</div>
      <motion.div id={isMobile ? "mobile-nav-links" : "nav-links"}>
        <button
          className={`menu-btn ${isMobile ? "show" : "hide"}`}
          style={{ color: "black" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
        {isOpen || !isMobile ? <NavList /> : null}
      </motion.div>
      <div className={isMobile ? "hide" : "nav-contacts"}>
        <Linkedin
          onClick={() => {
            openLink(
              "https://www.linkedin.com/in/abhigyan-kumar-verma-5815491b4/"
            );
          }}
        />
        <Github
          onClick={() => {
            openLink("https://github.com/abhigyankvo");
          }}
        />
        <Mail />
      </div>
    </div>
  );
}
