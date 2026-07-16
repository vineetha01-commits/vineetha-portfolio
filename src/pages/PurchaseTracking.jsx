import { Link } from "react-router-dom";
import "../styles/ProjectPage.css";

function PurchaseTracking() {

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
          Purchase File Tracking System
        </h1>



        <h2>
          Software Testing • Workflow Tracking • Technical Documentation
        </h2>





        {/* Project Information */}

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
            The Purchase File Tracking System project focused on improving
            visibility and management of file approval workflows within an
            enterprise environment. I supported software testing activities,
            documentation, and validation of system functionality to ensure
            smooth workflow tracking.
          </p>


        </div>








        <div className="project-card">


          <h3>
            🎯 Project Objective
          </h3>


          <p>
            The objective of the project was to provide a structured approach
            for tracking purchase files, monitoring approval stages, and
            improving workflow transparency through an organized digital system.
          </p>


        </div>








        <div className="project-card">


          <h3>
            👩‍💻 My Responsibilities
          </h3>


          <ul>


            <li>
              Reviewed application workflow and functionality.
            </li>


            <li>
              Prepared and executed software test scenarios.
            </li>


            <li>
              Verified approval flow and system behavior.
            </li>


            <li>
              Documented testing observations and results.
            </li>


            <li>
              Supported technical documentation activities.
            </li>


            <li>
              Assisted in maintaining structured project records.
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
                  Requirement Analysis
                </h4>

                <p>
                  Understood system requirements and purchase workflow process.
                </p>

              </div>

            </div>





            <div className="workflow-item">

              <div className="workflow-number">
                02
              </div>

              <div>

                <h4>
                  Test Scenario Creation
                </h4>

                <p>
                  Prepared scenarios to validate different workflow conditions.
                </p>

              </div>

            </div>





            <div className="workflow-item">

              <div className="workflow-number">
                03
              </div>

              <div>

                <h4>
                  Testing & Validation
                </h4>

                <p>
                  Executed testing activities and verified system functionality.
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
                  Maintained test results and technical documentation.
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


            <span>
              Software Testing
            </span>


            <span>
              Test Case Design
            </span>


            <span>
              MS Excel
            </span>


            <span>
              Technical Documentation
            </span>


            <span>
              Workflow Analysis
            </span>


          </div>


        </div>








        <div className="project-card">


          <h3>
            🏆 Key Contributions
          </h3>


          <ul>


            <li>
              Supported testing and validation activities.
            </li>


            <li>
              Improved understanding of enterprise workflow systems.
            </li>


            <li>
              Maintained structured testing documentation.
            </li>


            <li>
              Assisted in improving workflow visibility.
            </li>


          </ul>


        </div>








        <div className="project-card">


          <h3>
            📚 What I Learned
          </h3>


          <p>
            This project enhanced my understanding of enterprise software
            workflows, software testing practices, documentation standards,
            and quality assurance processes.
          </p>


        </div>







        <div className="confidential-note">


          🔒 <strong>Confidentiality Note:</strong>


          <p>
            Due to organizational confidentiality policies, internal system
            screenshots and application details cannot be publicly shared.
            This case study highlights my role, responsibilities, and
            technical contributions.
          </p>


        </div>



      </div>


    </section>

  );

}


export default PurchaseTracking;