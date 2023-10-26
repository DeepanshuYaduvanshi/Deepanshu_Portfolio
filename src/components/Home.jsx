import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/profile_Pic.jpg";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);  // hook 
  const projectCount = useRef(null);  

  const animationClientsCount = () => {  // niche funtion de rkha h ye
    animate(0, 1500, {
      duration: 1, // 1sec
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()), // textcontent counting chlayega from 0 to v and fixed int value me count krega na ki decimal me
    });
  };
  const animationProjectsCount = () => {
    animate(0, 5, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      // bahr rhega name initially 
      initial: {
        x: "-100%",
        opacity: 0,
      },
      // bahr se ander aayega name 
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      // uper se niche aayega
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Deepanshu Yaduvanshi
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Coder"],
              autoStart: true,
              loop: true,
              cursor: "", // cursor nhi aayega
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:deepanshu_12011111@nitkkr.ac.in">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              {ratio < 10 && (
                <motion.span
                  whileInView={animationClientsCount} // jaise hi view krenge is element ko tabhi ander ka func call ho jayega and ye hmne uper bna rkha h
                  ref={clientCount}
                ></motion.span>
              )}
            </p>
            <span>DSA Problem Solved</span>
          </article>

          <aside>
            <article>
              <p>
                +
                {ratio < 10 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    5
                  </motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>
{/* data-special ya koi or name de do iski help se hm css me access kr skte isko */}
            <article data-special>  
              <p>Contact</p>
              <span>deepanshu_12011111@nitkkr.ac.in</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Deepanshu" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;