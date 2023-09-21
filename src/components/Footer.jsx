import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="Founder" />

        <h2>Shresthya Senapati</h2>
        <p>
          "Make Your Own Way."
        </p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/nayak-soumya-ranjan" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/soumya_nayak.raju" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/SoumyaNayak2000" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
