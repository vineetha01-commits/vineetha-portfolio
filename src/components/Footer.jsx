import "../styles/Footer.css";

import {
  FaLinkedin,
  FaInstagram,
  FaHeart,
  FaReact
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      <h3>
        Vineetha Budige
      </h3>

      <p>
        Electronics & Communication Engineer • Software Testing • Creative Explorer
      </p>


      <div className="footer-icons">

        <a
          href="https://www.linkedin.com/in/vineetha-budige-19654b219"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>


        <a
          href="https://www.instagram.com/vinitha._.goud/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 Vineetha Budige. Built with
          <FaReact className="react-icon" />
          React
          <FaHeart className="heart-icon" />
        </p>

      </div>

    </footer>

  );

}

export default Footer;