import { Link } from "react-router-dom";
import "../styles/ProjectPage.css";

function PortfolioWebsite() {

  return (

    <section className="project-page">


      <div className="project-container">


        <Link to="/" className="back-btn">
          ← Back to Portfolio
        </Link>



        <p className="project-tag">
          🚀 Personal Project
        </p>




        <h1>
          Personal Portfolio Website
        </h1>



        <h2>
          React • HTML • CSS • Responsive Web Design
        </h2>





        <div className="project-info-grid">


          <div className="info-box">

            <span>👩‍💻</span>

            <h4>
              Role
            </h4>

            <p>
              Frontend Developer
            </p>

          </div>





          <div className="info-box">

            <span>⚛️</span>

            <h4>
              Technology
            </h4>

            <p>
              React + Vite
            </p>

          </div>





          <div className="info-box">

            <span>🎨</span>

            <h4>
              Focus
            </h4>

            <p>
              UI Design & Experience
            </p>

          </div>


        </div>







        <div className="project-card">


          <h3>
            📄 Project Overview
          </h3>


          <p>
            Designed and developed a personal portfolio website to showcase my
            technical skills, professional experience, projects, photography,
            and creative work. The website was built with React to create a
            modern, responsive, and interactive user experience.
          </p>


        </div>







        <div className="project-card">


          <h3>
            🎯 Project Objective
          </h3>


          <p>
            The objective was to build a professional online presence that
            represents my engineering background, software testing experience,
            and creativity through photography and digital design.
          </p>


        </div>







        <div className="project-card">


          <h3>
            🛠 Technologies Used
          </h3>


          <div className="tools">

            <span>
              React
            </span>

            <span>
              Vite
            </span>

            <span>
              JavaScript
            </span>

            <span>
              HTML
            </span>

            <span>
              CSS
            </span>

            <span>
              React Router
            </span>

          </div>


        </div>







        <div className="project-card">


          <h3>
            ✨ Features Developed
          </h3>


          <ul>


            <li>
              Responsive portfolio layout.
            </li>


            <li>
              Interactive navigation system.
            </li>


            <li>
              Project case study pages.
            </li>


            <li>
              Skills and experience sections.
            </li>


            <li>
              Resume and LinkedIn integration.
            </li>


            <li>
              Modern UI animations and hover effects.
            </li>


          </ul>


        </div>







        <div className="project-card">


          <h3>
            🔄 Development Workflow
          </h3>


          <div className="workflow">


            <div className="workflow-item">

              <div className="workflow-number">
                01
              </div>

              <div>

                <h4>
                  Planning
                </h4>

                <p>
                  Designed website structure and user experience flow.
                </p>

              </div>

            </div>





            <div className="workflow-item">

              <div className="workflow-number">
                02
              </div>

              <div>

                <h4>
                  Development
                </h4>

                <p>
                  Built reusable React components and responsive layouts.
                </p>

              </div>

            </div>





            <div className="workflow-item">

              <div className="workflow-number">
                03
              </div>

              <div>

                <h4>
                  Styling
                </h4>

                <p>
                  Added modern UI design, animations, and visual improvements.
                </p>

              </div>

            </div>



          </div>


        </div>







        <div className="project-card">


          <h3>
            📚 What I Learned
          </h3>


          <p>
            This project improved my understanding of React development,
            component-based architecture, responsive design principles, and
            creating user-focused digital experiences.
          </p>


        </div>



      </div>


    </section>

  );

}


export default PortfolioWebsite;