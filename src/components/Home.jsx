import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight,BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png"

const Home = () => {

    const ClientCount = useRef(null)
    const ProjectCount = useRef(null)
    const animationClientsCount= ()=>{
        animate(0,100,{
            duration:1,
            onUpdate:(v)=>(ClientCount.current.textContent = v.toFixed())
        })
    }
    const animationProjectsCount= ()=>{
        animate(0,500,{
            duration:1,
            onUpdate:(v)=>(ProjectCount.current.textContent = v.toFixed())
        })
    }
  // initial={{
  //     x:"-100%",
  //     opacity:0,
  //   }}

  //     whileInView={{
  //         x:0,
  //         opacity:1,

  //     }}
  const animationObj = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
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
          <motion.h1 {...animationObj.h1}>
            Hi, I Am <br /> Shresthya Senapati
          </motion.h1>
          <Typewriter
            options={{
              strings: [
                "Coder",
                " A FrontEnd Developer",
                "A Designer",
              ],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "Typewriterpara",
            }}
          />
          <div>
            <a href="mailto:senapatishresthya@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              +<motion.span whileInView={animationClientsCount} ref={ClientCount}></motion.span>
            </p>
            <span>Clients Worldwide</span>
          </article>
          <aside>
            <article>
              <p>
                +< motion.span whileInView={animationProjectsCount} ref={ProjectCount}></motion.span>
              </p>
              <span>Projects Done</span>
            </article>
            <article data-special>
              <p>
                Contact
              </p>
              <span>senapatishresthya@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Shresthya" />
      </section>
      <BsChevronDown/>
    </div>
  );
};

export default Home;
