import "@/app/services/services.css"
import { FaBookReader, FaCode, FaPaintBrush } from "react-icons/fa";
const services = () => {
  return (
    <section className="services" id="services">
        <h2 className="heading">Our <span>Services</span></h2>

        <div className="services-contanier">
            <div className="services-box">
            <FaCode className="icon"/>
                <h3>Web Development</h3>
                <p>Web development is the process of building, programming, and maintaining websites and web applications. Website developers use various programming languages, like HTML, CSS, and JavaScript, to develop websites and web applications. Keep Reading Learn More About Web Design and Development.<br />
               <br /> <span><b>For More Details</b></span></p>
                <a href="/contact" className="btn">Contact ME</a>
           
            </div>
            <div className="services-box">
            <FaPaintBrush  className="icon"/>
                <h3>Graphic Design</h3>
                <p>Graphic design is a profession, academic discipline and applied art whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives. Graphic design is an interdisciplinary branch of design and of the fine arts.<br />
               <br /> <span><b>For More Details</b></span></p>
            
                <a href="/contact" className="btn">Contact Me</a>
           
            </div>
            <div className="services-box">
            <FaBookReader className="icon" />
                <h3>Teaching</h3>
                <p>Teaching is the practice implemented by a teacher aimed at transmitting skills (knowledge, know-how, and interpersonal skills) to a learner, a student, or any other audience in the context of an educational institution. Teaching is closely related to learning, the student&#39;s activity of appropriating this knowledge.<br />
               <br /> <span><b>For More Details</b></span></p>
              
                <a href="/contact" className="btn">Contact Me</a>
           
            </div>
        </div>
      </section>
  );
}

export default services;