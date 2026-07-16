import "../styles/Navbar.css";

function Navbar() {

  return (

    <nav className="navbar">


      <div className="brand">


        <h2 className="logo">
          Vineetha
        </h2>


        <span>
          Engineer | Creator
        </span>


      </div>





      <ul className="nav-links">


        <li>
          <a href="#home">
            Home
          </a>
        </li>



        <li>
          <a href="#about">
            About
          </a>
        </li>



        <li>
          <a href="#skills">
            Skills
          </a>
        </li>



        <li>
          <a href="#experience">
            Experience
          </a>
        </li>



        <li>
          <a href="#projects">
            Projects
          </a>
        </li>



        <li>
          <a href="#gallery">
            Gallery
          </a>
        </li>



        <li>
          <a href="#contact">
            Contact
          </a>
        </li>


      </ul>



    </nav>

  );

}


export default Navbar;