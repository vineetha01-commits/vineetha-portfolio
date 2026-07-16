import { Link } from "react-router-dom";
import "../styles/ProjectPage.css";

function TribandProject() {

  return (

    <section className="project-page">


      <div className="project-container">


        <Link to="/" className="back-btn">
          ← Back to Portfolio
        </Link>



        <p className="project-tag">
          ⭐ Featured Project
        </p>




        <h1>
          Triband Antenna Project Support
        </h1>



        <h2>
          Software Testing • Test Case Design • Technical Documentation
        </h2>





        {/* Project Information Cards */}

        <div className="project-info-grid">


          <div className="info-box">

            <span>🏢</span>

            <h4>
              Organization
            </h4>

            <p>
              ECIL
            </p>

          </div>





          <div className="info-box">

            <span>👩‍💻</span>

            <h4>
              Role
            </h4>

            <p>
              Graduate Engineer Apprentice
            </p>

          </div>





          <div className="info-box">

            <span>⏳</span>

            <h4>
              Duration
            </h4>

            <p>
              Jan 2025 - Jan 2026
            </p>

          </div>


        </div>





        <div className="project-card">

          <h3>
            📄 Project Overview
          </h3>


          <p>
            The Triband Antenna Project involved supporting software testing,
            technical documentation, and quality assurance activities for an
            enterprise engineering application. My responsibilities focused on
            reviewing application functionality, preparing structured test
            cases, documenting system behavior, and supporting software quality
            improvement.
          </p>


        </div>







        <div className="project-card">

          <h3>
            🎯 Project Objective
          </h3>


          <p>
            The objective of the project was to improve software quality and
            maintain accurate technical documentation through structured
            software testing, validation, and engineering documentation.
          </p>


        </div>







        <div className="project-card">


          <h3>
            👩‍💻 My Responsibilities
          </h3>


          <ul>

            <li>
              Reviewed software application functionality.
            </li>

            <li>
              Prepared structured software test cases.
            </li>

            <li>
              Executed and validated test scenarios.
            </li>

            <li>
              Created System Architecture diagrams.
            </li>

            <li>
              Designed Network Diagrams using Microsoft Visio.
            </li>

            <li>
              Prepared technical documentation.
            </li>

            <li>
              Assisted in creating comparison matrices for project documentation.
            </li>

          </ul>


        </div>








        {/* Workflow */}

        <div className="project-card">


          <h3>
            🔄 Project Workflow
          </h3>



          <div className="workflow">



            <div className="workflow-item">

              <div className="workflow-number">
                01
              </div>

              <div>

                <h4>
                  Requirement Understanding
                </h4>

                <p>
                  Analyzed project requirements and understood application
                  functionality.
                </p>

              </div>

            </div>





            <div className="workflow-item">

              <div className="workflow-number">
                02
              </div>

              <div>

                <h4>
                  Test Case Preparation
                </h4>

                <p>
                  Created structured test scenarios and documented expected
                  results.
                </p>

              </div>

            </div>






            <div className="workflow-item">

              <div className="workflow-number">
                03
              </div>

              <div>

                <h4>
                  Test Execution
                </h4>

                <p>
                  Performed testing activities and validated software
                  functionality.
                </p>

              </div>

            </div>






            <div className="workflow-item">

              <div className="workflow-number">
                04
              </div>

              <div>

                <h4>
                  Documentation
                </h4>

                <p>
                  Maintained technical documentation and engineering diagrams.
                </p>

              </div>

            </div>






            <div className="workflow-item">

              <div className="workflow-number">
                05
              </div>

              <div>

                <h4>
                  Quality Improvement
                </h4>

                <p>
                  Supported software quality improvement through structured
                  testing practices.
                </p>

              </div>

            </div>



          </div>


        </div>








        <div className="project-card">


          <h3>
            🛠 Technologies & Tools
          </h3>


          <div className="tools">

            <span>Software Testing</span>

            <span>Test Case Design</span>

            <span>MS Visio</span>

            <span>MS Excel</span>

            <span>MS Word</span>

            <span>Technical Documentation</span>


          </div>


        </div>








        <div className="project-card">


          <h3>
            🏆 Key Contributions
          </h3>


          <ul>

            <li>
              Prepared professional software test cases.
            </li>

            <li>
              Supported software quality improvement activities.
            </li>

            <li>
              Created engineering diagrams using MS Visio.
            </li>

            <li>
              Maintained structured technical documentation.
            </li>

            <li>
              Prepared comparison matrices for engineering projects.
            </li>


          </ul>


        </div>








        <div className="project-card">


          <h3>
            📚 What I Learned
          </h3>


          <p>
            This project strengthened my understanding of software testing,
            software quality assurance, technical documentation, and
            engineering workflows. It improved my analytical thinking,
            attention to detail, and professional documentation skills.
          </p>


        </div>








        <div className="confidential-note">


          🔒 <strong>Confidentiality Note:</strong>

          <p>
            Due to project confidentiality and organizational policies,
            application screenshots and internal project details cannot be
            publicly shared. This case study highlights my role,
            responsibilities, and technical contributions.
          </p>


        </div>



      </div>


    </section>

  );

}


export default TribandProject;