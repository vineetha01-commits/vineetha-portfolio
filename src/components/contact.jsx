import "../styles/Contact.css";
import resume from "../assets/Vineetha_Budige_Resume.pdf";

function Contact() {

  return (

    <section className="contact" id="contact">


      <div className="contact-header">


        <p className="contact-tag">
          🚀 Open To Opportunities
        </p>


        <h2>
          Let's Connect
        </h2>


        <p>
          Interested in collaboration, technology, or creative projects?
          Feel free to reach out and let's build something meaningful.
        </p>


      </div>





      <div className="contact-card">



        <a href="mailto:vinithabudige0410@gmail.com">
          ✉ Email Me
        </a>





        <a
          href="https://www.linkedin.com/in/vineetha-budige-19654b219"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 LinkedIn
        </a>





        <a
          href="https://www.instagram.com/vineetha._.goud_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📸 Instagram
        </a>





        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          📄 Download Resume
        </a>



      </div>





      <div className="contact-note">


        <p>
          💡 Always learning, building, and exploring opportunities
          in technology and creative spaces.
        </p>


      </div>



    </section>

  );

}


export default Contact;