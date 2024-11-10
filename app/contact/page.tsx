import "@/app/contact/contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
    <h2 className="heading">Contact <span>Me!</span></h2>
    <form action="https://formsubmit.co/el/cunico" method="POST" >
      <div className="input-box">
        <input type="text" placeholder="CodeWithFairy" required />
        <input type="email" placeholder="portfoli0@gmail.com" required />
      </div>

      <div className="input-box">
        <input type="tel" placeholder="01234567890" />
        <input type="text" placeholder="Any Suggestions??" required />
      </div>
      <textarea name="" id="" cols={30} rows={10} placeholder="Feel Free To Give Reviews About My project!!" required />
      <input type="submit" value="Send Message" className="btn" />
    </form>

  </section>
  
  )
}

export default Contact;