"use client";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import home from "@/app/images/home1.jpg";
import Typewriter from "typewriter-effect";

const Herosection = () => {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <h3>Hello, It&#39;s Me</h3>
        <h1>Faryal Junaid</h1>
        <h3>
          And I&#39;m a
          <span>
            <Typewriter
              options={{
                strings: [
                  "Front-End Developer!!",
                  "UI/UX Designer!!",
                  "Coder!!",
                  "Programmer!!",
                  "Online Tutor!!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h3>
        <p>
          Welcome to my portfolio!!
          <br />
          showcasing my expertise and accomplishments.
          
          I've developed a passion for delivering high-quality work
          that exceeds expectations.
        </p>
        <div className="social-media">
          <a href="https://github.com/faryal16" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/bint_e_farzana/" target="_blank">
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/faryal-junaid-06780b2b4/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <a href="/Cv.pdf.pdf" className="btn">
          Download CV
        </a>
      </div>

      <div className="home-img">
        <Image src={home} alt="home image" />
      </div>
    </div>
  );
};

export default Herosection;
