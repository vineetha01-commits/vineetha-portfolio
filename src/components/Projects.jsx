import { Link } from "react-router-dom";
import "../styles/Projects.css";
import projectsBg from "../assets/projectsbg.jpg";


function Projects() {

  const projects = [

    {
      icon: "📁",
      badge: "ECIL Project",
      title: "Purchase File Tracking System",
      subtitle: "Software Testing • Documentation",
      details: "ECIL | Graduate Engineer Apprentice",

      technologies: [
        "Testing",
        "Documentation",
        "MS Excel"
      ],

      description:
        "Designed and tested a purchase file tracking solution to monitor approval stages and improve workflow visibility within ECIL.",

      button: "Read Case Study →",

      link: "/projects/purchase-file-tracking"
    },


    {
      icon: "🛰️",
      badge: "Featured Project",

      title: "Triband Antenna Project Support",

      subtitle: "Software Testing • Test Case Design",

      details: "ECIL | Testing & Technical Documentation",

      technologies: [
        "Test Cases",
        "MS Visio",
        "MS Excel"
      ],

      description:
        "Prepared test cases, executed software testing, created system architecture and network diagrams using Microsoft Visio, and supported technical documentation for software quality improvement.",

      button: "Read Case Study →",

      link: "/projects/triband-project"
    },


    {
      icon: "💻",
      badge: "Personal Project",

      title: "Personal Portfolio Website",

      subtitle: "React • HTML • CSS",

      details: "Frontend Development",

      technologies: [
        "React",
        "CSS",
        "Responsive Design"
      ],

      description:
        "Designed and developed a responsive personal portfolio website to showcase my technical skills, experience, photography, and creative work.",

      button: "Read Case Study →",

      link: "/projects/portfolio-website"
    }

  ];


  return (

    <section
      className="projects"
      id="projects"
      style={{
        backgroundImage: `
        linear-gradient(
          rgba(15,23,42,0.65),
          rgba(15,23,42,0.75)
        ),
        url(${projectsBg})
        `
      }}
    >


      <div className="projects-header">

        <h2>
          Featured Projects
        </h2>


        <p>
          A selection of projects that demonstrate my technical skills,
          problem-solving ability, and continuous learning.
        </p>


      </div>



      <div className="projects-grid">


        {projects.map((project,index)=>(


          <Link
            to={project.link}
            className="project-card"
            key={index}
          >


            <div className="project-badge">
              {project.badge}
            </div>


            <div className="project-icon">
              {project.icon}
            </div>


            <h3>
              {project.title}
            </h3>


            <h4>
              {project.subtitle}
            </h4>


            <p className="project-details">
              {project.details}
            </p>



            <div className="project-tech">

              {project.technologies.map((tech,i)=>(

                <span key={i}>
                  {tech}
                </span>

              ))}

            </div>



            <p>
              {project.description}
            </p>



            <span className="project-btn">
              {project.button}
            </span>



          </Link>


        ))}


      </div>


    </section>

  );

}


export default Projects;