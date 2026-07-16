import heroImg from "../assets/hero.png";
import "../styles/Hero.css";
import background from "../assets/background.jpg";
import resume from "../assets/vineetha_budige_resume.pdf";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(15,23,42,0.20), rgba(15,23,42,0.20)), url(${background})`,
      }}
    >
      <div className="hero-content">
        <img
          src={heroImg}
          alt="Vineetha Budige"
          className="hero-img"
        />

        <p className="hero-tag">
  Building reliable software with creativity
</p>

        <h1>Hi, I'm Vineetha Budige</h1>

        <h2>Software Testing • Networking • Creative Storyteller</h2>


        <p className="hero-description">
          Passionate Electronics & Communication Engineering graduate with hands-on experience in software testing, technical documentation, and project support. Dedicated to building reliable solutions while continuously learning and growing.
        </p>

        

        <div className="hero-buttons">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>📄 Resume</button>
          </a>

          <a href="#contact">
            <button>📩 Let's Connect</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;