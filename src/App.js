import React from "react";
import "./App.css";
import ElisionLogo from "./assets/icons/elsn1.png";
import { ReactComponent as IconFacebook } from "./assets/icons/facebook.svg";
import { ReactComponent as IconGithub } from "./assets/icons/github.svg";
import { ReactComponent as IconTwitter } from "./assets/icons/twitter.svg";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">
              <img src={ElisionLogo} className="logo-main" alt="Elision Labs" />
            </a>
          </div>
          <div className="social">
            <a
              href="https://discord.gg/umdYPbRXa3"
              title="Discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFacebook className="icon" />
            </a>
            <a
              href="https://twitter.com/ElisionLabs"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTwitter className="icon" />
            </a>
            <a
              href="https://github.com/elision-labs/coming-soon"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Level up on the Open Web</h1>
            <p className="subtext">
              Sign up to have the chance to recieve some giveaways and be the
              first to know when we launch! Please e-mail us with any questions
              or feedback that you have. Feel free to donate to our project. The
              project hasn't recieved any funding so if you're an investor,
              e-mail us directly.
            </p>
          </div>
          <a href="mailto:user@example.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>
            Made by{" "}
            <a
              className="underlined"
              href="https://github.com/elision-labs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Elision Labs
            </a>{" "}
            |{" "}
            <a
              className="underlined"
              href="https://github.com/elision-labs"
              title="GitHub repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    );
  };
}

export default App;
