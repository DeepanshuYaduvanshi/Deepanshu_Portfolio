import React from "react";
import imgg from "../assets/profile_Pic.jpg"
import {
  AiFillGithub,
  // AiFillInstagram,
  // AiFillYoutube,
  AiOutlineArrowUp,
  AiFillLinkedin
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={imgg}
          alt="Founder"
        />

        <h2>Deepanshu Yaduvanshi</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          {/* <a href="https://youtube.com/" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/" target={"blank"}>
            <AiFillInstagram />
          </a> */}
          <a href="https://github.com/DeepanshuYaduvanshi" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://linkedin.com/in/deepanshu-yaduvanshi-30aa29229" target={"blank"}>
            <AiFillLinkedin />
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