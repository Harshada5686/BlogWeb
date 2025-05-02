import React from "react";
import './Hero.css'
import bannerimg from '../../Assets/images/bannerimg.png'

const Hero = () => {
  return (
    <section className="bannersection py-4">
      <div className="container text-center mt-2">

        <h1 className="display-4 fw-bold mb-4">Our News</h1>
        <p className="lead mb-4">
          Get the latest updates and deeper coffee experience from IMAJI Coffee
        </p>

        <img
          src={bannerimg}
          alt="Banner"
          className="img-fluid rounded shadow"
        />

        <p className="h5 mt-4 ">
          Collaboration to Develop Coffee and Beverage Industry Expertise in Indonesia
        </p>
        {/* <p className="text-muted text-start mb-0 mt-4">
          April 30, 2025
        </p> */}

      </div>
    </section>
  )
}
export default Hero;