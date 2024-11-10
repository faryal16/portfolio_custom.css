import "@/app/skills/skills.css"
import { GrGraphQl } from "react-icons/gr";
import { GiMoebiusTriangle } from "react-icons/gi";
import { FaRegSmile } from "react-icons/fa";



const Skills = () => {
  return (
    <section className="skills" id="skills">
        <h2 className="heading">My <span>Skills</span></h2>

        <div className="skills-contanier">
            <div className="skills-box" >
              <input type="checkbox" id="check" />
              <GrGraphQl size={60} className="icon"/>
                <h3>Technical Skills</h3>
                <p>
                  <ul>
                    <li>Web development</li>
                    <li>Coding</li>
                    <li>Programming language</li>
                    <li>Artificial intelligence</li>
                    <li>Project management</li>
                    <li>Next.js</li>
                    <li>Tailwind.css</li>
                  </ul>
                </p>
                <div className="content">
                  <p>Technical skills are the specialized knowledge and expertise required to perform specific tasks and use specific tools and programs in real-world situations. </p>
                </div>
                <label htmlFor="check" className="btn">Read More</label>
           
            </div>
            <div className="skills-box">
              <input type="checkbox" id="check-2" />
              <GiMoebiusTriangle size={60} className="icon"/>
                <h3>Creative Skills</h3>
                <p>
                  <ul>
                    <li>Problem solving</li>
                    <li>Collaboration</li>
                    <li>Open-mindedness</li>
                    <li>Experiment</li>
                    <li>Innovation</li>
                    <li>Abstract thinking</li>
                    <li>Photography</li>
                  </ul>
                </p>
                <div className="content">
                  <p>Creativity skills include the ability to think about a problem or a task in a new way and use imagination to come up with new ideas.</p>
                </div>
                <label htmlFor="check-2" className="btn">Read More</label>
           
            </div>
            <div className="skills-box">
              <input type="checkbox" id="check-3" />
              <FaRegSmile size={60} className="icon" />
                <h3>Soft Skills</h3>
                <p>
                  <ul>
                    <li>Creativity</li>
                    <li>Teamwork</li>
                    <li>Organization</li>
                    <li>Conflict resolution</li>
                    <li>Adaptability</li>
                    <li>Time management</li>
                    <li>Leadership</li>
                  </ul>
                </p>
                <div className="content">
                  <p>Soft skills can also be thought of as people skills. These can include good communication and interpersonal skills, leadership, problem-solving, work ethic, time management, and teamwork. </p>
                </div>
                <label htmlFor="check-3" className="btn">Read More</label>
           
            </div>
        </div>
      </section>

  )
}

export default Skills;