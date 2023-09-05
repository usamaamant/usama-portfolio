import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { FaEnvelope,FaGithub, FaLinkedin,FaInstagram} from "react-icons/fa";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          
          <span className="primaryText">
            Let's build something <br />
            amazing together.<br />
          </span>
         
        </div>

        <div className={css.right}>
        <div className="f-icons">
       
          <a href="mailto:usamaamanat786@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope color="black"  size={"5rem"} />
          </a>
          <a href="https://www.instagram.com/usama_ali7/" target="_blank" rel="noreferrer">
            <FaInstagram color="black" size={"5rem"} />
          </a>
          <a href="https://github.com/usamaamant" target="_blank" rel="noreferrer">
            <FaGithub color="black" size={"5rem"} />
          </a>
          <a href="https://www.linkedin.com/in/usama-amanat-ali-924643128/" target="_blank" rel="noreferrer">
          <FaLinkedin color="black" size={"5rem"} />          </a>
        </div>
     </div>

       
      </motion.div>
    </motion.section>
  );
};

export default Footer;
