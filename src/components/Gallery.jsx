import "../styles/Gallery.css";

import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";


function Gallery() {


  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6
  ];



  return (

    <section className="gallery" id="gallery">



      <div className="gallery-header">


        <p className="gallery-tag">
          📸 Creative Side
        </p>


        <h2>
          Photography
        </h2>


        <p className="gallery-subtitle">
          Capturing stories, emotions, and moments through my lens.
        </p>


      </div>





      <div className="gallery-grid">


        {
          photos.map((photo,index)=>(


            <div
              className="gallery-item"
              key={index}
            >


              <img
                src={photo}
                alt={`Photography ${index+1}`}
              />


              <div className="gallery-overlay">

                📷

              </div>


            </div>


          ))
        }


      </div>



    </section>

  );

}


export default Gallery;