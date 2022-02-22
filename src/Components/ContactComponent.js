import "./sass/contact.css";
import { ReactComponent as Mail } from "../svg/mail.svg";
import { ReactComponent as Linkedin } from "../svg/linkedin.svg";
import { ReactComponent as Github } from "../svg/github.svg";
export function Contact() {
  const openLink = (event) => {
    window.open(event);
  };
  return (
    <div className="wrapper" id="contact-container-wraper">
      <div id="contact-container">
        <div id="contact">
          <div id="contact-call">
            <h1>Let's talk</h1>
            <p>Ask me anything or just say hi...</p>
          </div>
          <div id="contact-details">
            <p id="p-mob">999-999-9999</p>
            <p id="p-mail">abhigyankvo@gmail.com</p>
          </div>
          <div id="contact-icons">
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

          <div id="contact-form">
            <div id="contact-name">
              <label htmlFor="name">NAME</label>
              <input type="name" placeholder="John Carter" />
            </div>
            <div id="contact-email">
              <label htmlFor="email">EMAIL</label>
              <input type="email" placeholder="john@gmail.com" />
            </div>
            <div id="contact-message">
              <label htmlFor="message">MESSAGE</label>
              <input type="message" placeholder="Hi There..." />
            </div>
            <div id="contact-submit">
              <button>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
