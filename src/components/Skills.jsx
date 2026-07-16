import "../styles/Skills.css";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNetworkWired,
  FaVideo,
  FaFileWord,
  FaClipboardCheck
} from "react-icons/fa";


function Skills() {


  const skills = [

    {
      icon:<FaClipboardCheck />,
      name:"Software Testing",
      category:"Testing & QA"
    },

    {
      icon:"📝",
      name:"Test Case Design",
      category:"Testing & QA"
    },

    {
      icon:<FaNetworkWired />,
      name:"Networking & Configuration",
      category:"Technical"
    },

    {
      icon:<FaReact />,
      name:"React",
      category:"Frontend"
    },

    {
      icon:<FaHtml5 />,
      name:"HTML",
      category:"Frontend"
    },

    {
      icon:<FaCss3Alt />,
      name:"CSS",
      category:"Frontend"
    },

    {
      icon:<FaFileWord />,
      name:"MS Office Suite",
      category:"Tools"
    },

    {
      icon:<FaVideo />,
      name:"Adobe Video Editing",
      category:"Creative"
    }

  ];


  return (

    <section className="skills" id="skills">

      <div className="skills-header">

        <h2>
          Technical Skills & Tools
        </h2>

        <p>
          A combination of engineering knowledge, testing experience,
          frontend development, and creative skills.
        </p>

      </div>



      <div className="skills-grid">

        {
          skills.map((skill,index)=>(

            <div 
              className="skill-card"
              key={index}
            >

              <div className="skill-icon">
                {skill.icon}
              </div>


              <h3>
                {skill.name}
              </h3>


              <span>
                {skill.category}
              </span>


            </div>

          ))
        }

      </div>


    </section>

  );

}


export default Skills;