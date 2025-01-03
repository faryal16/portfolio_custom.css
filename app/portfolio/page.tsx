import "@/app/portfolio/portfolio.css"
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import project1 from "@/app/images/project1.jpg"
import project2 from "@/app/images/project2.jpg"
import project3 from "@/app/images/3.png"
import project4 from "@/app/images/4.png"
import project5 from "@/app/images/5.png"
import project6 from "@/app/images/project6.jpg"



const portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Project</span></h2>

        <div className="portfolio-container" >
            <div className="portfolio-box" >
                <Image src={project1} alt="" className="img" width={400} height={400} />
                <div className="portfolio-layer">
                    <h4 >My_Online_Meal</h4>
                    <p>Food Delivery app by HTML, CSS and Javascript.Best food delivery app freelance services online. Outsource your food delivery app project and get it quickly done and delivered remotely online.
                    </p>
                    <a href="https://github.com/faryal16/MyOnlineMeal.git"><FaExternalLinkAlt  className="icon" /></a>
                </div>
            </div>
        
            <div className="portfolio-box">
                <Image src={project2} alt="" className="img" width={500} height={500} />
                <div className="portfolio-layer">
                    <h4>My_Static_Resume</h4>
                    <p>A static resume focuses on top skills, and is tailored to the roles you are seeking. experience in retail and consistent record of advancement to leadership positions.</p>
                    <a href="https://github.com/faryal16/milestone-1-Static_Resume.git"><FaExternalLinkAlt className="icon" /></a>
                </div>
            </div>
        
            <div className="portfolio-box">
                <Image src={project3} alt="" className="img" width={500} height={500} />
                <div className="portfolio-layer">
                    <h4>Resume_Builder</h4>
                    <p>The goal of Online Resume Builder is to automate the existing manual system using computerised equipment and full- featured computer software to meet their needs, so that their valuable data/information may be stored in the System for a long time with very easy access and manipulation.</p>
                    <a href="https://github.com/faryal16/Milestone05-PDF-Resume.git"><FaExternalLinkAlt  className="icon"/></a>
                </div>
            </div>
        
            <div className="portfolio-box">
                <Image src={project4} alt="" className="img" width={500} height={500}/>
                <div className="portfolio-layer">
                    <h4>To_Do_List</h4>
                    <p>No matter who you are and what you do - you will be better organized! At home, at work and in your free time - you will focus on really important things!</p>
                    <a href="https://github.com/faryal16/My_TODO-s_list_007.git"><FaExternalLinkAlt className="icon"  /></a>
                </div>
            </div>
        
            <div className="portfolio-box">
                <Image src={project5} alt="" className="img" width={500} height={500}/>
                <div className="portfolio-layer">
                    <h4>Quiz_System</h4>
                    <p>This &#39;QUIZ&#39; Project is designed for a question in which you can generate and. manage a simple database for questions. The question number is automatically generated by. the software and is stored in a binary file by the name &#39;QUESTION&#39;.</p>
                    <a href="https://github.com/faryal16/Quiz_System_by_Fairy.git"><FaExternalLinkAlt className="icon"  /></a>
                </div>
            </div>
        
            <div className="portfolio-box">
                <Image src={project6} alt="" className="img" width={500} height={500}/>
                <div className="portfolio-layer">
                    <h4>Currency_Converter</h4>
                    <p>Online program where currency values can be easily converted based on current exchange rates.
                      A currency converter app can help users convert a currency into multiple currencies simultaneously..</p>
                    <a href="https://github.com/faryal16/Currency_Converter_007.git"><FaExternalLinkAlt  className="icon" /></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default portfolio