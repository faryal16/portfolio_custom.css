import "@/app/about/about.css"
import Image from "next/image"
import abouts from "@/app/images/7.png"

const about = () => {
  return (
    <section className="about" id="about">
        <div className="about-img">
            <Image src={abouts} alt=""/>
        </div>

        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
            <h3>Fronted Developer!</h3>
            <p>Hello,I&#39;m a Rising Front-end Developer from GIAIC(Governor Sindh Initiative for. Artificial Intelligence, Web 3.0 & Metaverse). I&#39;m practicing many Projects, marketing websites and advertisements.I&#39;ve successfully passed my Quarter and Dive into another one. I also learn Graphic Designing. i taught Many students in my life .I have 10 Years of experience in teaching.i Love to teach cause its a only profession that make a child to be anything in his life.</p>
            
            <input type="checkbox" id="check1" />
            <div className="content" id="flex" >
    <div className="aboutMore">
      <h2>Education</h2>
      
        <ul>
          <li><span>Degree: </span>Master&#39;s in Arts</li>
          <li><span>Subject: </span>Islamic Studies</li>
          <li><span>University: </span>Karachi University</li>
          <li><span>Passing Year: </span>2020</li>
        </ul>
    
    </div>
    <div className="aboutMore">
      <h2>Experience</h2>
     
        <ul>
          <li><span>Online Tution: </span> 2012-Present</li>
          <li><span>Intership: </span> 2023-2024</li>
          <li><span>CodeAlpha: </span>Six Months</li>
          <li><span>Freelancer:</span>2024-Present</li>
        </ul>
   
    </div>
        </div>

                <label htmlFor="check1" className="btn">Read More</label>
            </div>
     </section>
  )
}

export default about;