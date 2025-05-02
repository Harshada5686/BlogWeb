import React from "react";
// import image from "../../Assets/images/image1.png"
import blogdata from "../../Data/blogdata";
import './Bloglist.css'
const Bloglist = () => {
  return (
    <section className="py-4">
      <div className="container">

        {blogdata.map((item) => (
          <div className="row align-items-center my-4" key={item.id}>
            <hr />
            <div className="col-12 col-md-3 mb-3 mb-md-0 text-center">
              <img
                src={item.image}
                alt="Feature"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-12 col-md-9 text-center text-md-start">
              <p className="display-6 mb-0 listtext">
                {item.description}
              </p>
              <p className="text-muted mt-2">
               {item.date}
              </p>

            </div>

          </div>


        ))}

      </div>
    </section>

  )
}
export default Bloglist;