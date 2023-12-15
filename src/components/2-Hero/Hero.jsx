import { useState } from 'react'
import './hero.css'

function Hero() {
  return (
    <div className='herocontainer'>

                             {/* Container num 1 */}
      <div className="hero-01">
        <div className='line-l'></div>
        <h1>I'm Reda,a Frent end Web Developer</h1>
        <p>Lorem ipsum dolor sit amet eveniet Commodi provident quisquam veritatis!</p>
      
<div className="cv-download">
      <a href="img/Reda-sahli-cv.pdf" download="computer" className='My-cv-download'><i class="fa-solid fa-download">Download</i></a>
</div>
        </div> 
                      {/* Container num 2  */}
      <div className="hero-02">

                         {/*  thre div right*/}
        <div className="car-about">
          <h3>About Me</h3>
          <p>Lorem bcaecati minima Alias rems magnam assumenda necessitatibu  magnam assumenda necessitatibu magni?</p>
          <div className="lernmor"><a href="#">Learn More</a></div>
        </div>

        <div className="car-about">    
        <h3>My Work</h3>
          <p>Lorem bcaecati minima Alias rems magnam assumenda necessitatibu  magnam assumenda necessitatibu magni?</p>
          <div className="lernmor"><a href="#">Learn More</a></div></div>


          <div className="car-about">    
        <h3>FOLLOW ME</h3>
        <div className="medaicontener">
          <ul>
          <li>
        <a href="https://github.com/Reda-sahli" class="fa-brands fa-github"></a>
        <a href="#" class="fa-brands fa-x-twitter"></a>
        <a href="https://web.facebook.com/reda.sahli.5249?locale=ar_AR" class="fa-brands fa-facebook"></a>
        <a href="https://www.instagram.com/sahli_reda_/" class="fa-brands fa-instagram"></a>
        <a href="https://www.linkedin.com/in/reda-sahli-b93807268/" class="fa-brands fa-linkedin"></a>
        </li>
        </ul>

        </div>
          </div>
      </div>
      </div>
  )
}

export default Hero;
