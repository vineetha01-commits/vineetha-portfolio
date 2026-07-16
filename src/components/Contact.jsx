import "../styles/Contact.css";

import {
  FaEnvelope,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";


function Contact() {

  return (

    <section className="contact" id="contact">


      <div className="contact-header">

        <p className="contact-tag">
          📩 Let's Connect
        </p>

        <h2>
          Get In Touch
        </h2>

        <p>
          I'm open to opportunities, collaborations, and creative projects.
          Feel free to connect with me.
        </p>

      </div>




      <div className="contact-container">


        <a
          className="contact-card"
          href="mailto:your-email@gmail.com"
        >

          <FaEnvelope className="contact-icon" />

          <h3>
            Email
          </h3>

        </a>





        <a
          className="contact-card"
          href="https://www.linkedin.com/in/vineetha-budige-19654b219"
          target="_blank"
          rel="noopener noreferrer"
        >

          <FaLinkedin className="contact-icon" />

          <h3>
            LinkedIn
          </h3>

        </a>






        <a
          className="contact-card"
          href="https://www.instagram.com/vineetha._.goud_/"
          target="_blank"
          rel="noopener noreferrer"
        >

          <FaInstagram className="contact-icon" />

          <h3>
            Instagram
          </h3>

        </a>



      </div>


    </section>

  );

}


export default Contact;