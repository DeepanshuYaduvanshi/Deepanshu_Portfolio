import React from "react";
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
          src={"https://media.licdn.com/dms/image/D5603AQFgWZFUUA1Uug/profile-displayphoto-shrink_400_400/0/1687632715172?e=1694044800&v=beta&t=9fFAb9SqXIsI8ClvPE-FSFojpp8llcw_2t-sa0WCgns"}
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