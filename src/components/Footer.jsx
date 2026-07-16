import "../styles/Footer.css";

import {
  FaReact,
  FaHeart
} from "react-icons/fa";


function Footer() {

  return (

    <footer className="footer">

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