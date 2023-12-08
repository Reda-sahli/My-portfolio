import { useState } from 'react'
import './coperight.css'
import './phppage.php'
import './javapage.js'




function Coperight() {
  return (
    <div className='Contact' id='contact'>
        <div className="contact-divs-contact">

{/*  */}
<div class="container">


    <div class="content">


      <div class="left-side">


        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">Morocoo</div>
          <div class="text-two"></div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+212631368295</div>
          <div class="text-two"></div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">redasahli2003@gmail.com</div>
          <div class="text-two"></div>
        </div>
      </div>



      <div class="right-side">
        <div class="topic-text">Send us a message</div>
            <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
     
     
     
     
     
      <form action="https://formspree.io/f/xoqogqyn" method="POST">
        <div class="input-box">
        
          <input type="text" name="name" placeholder='Entre your name' />
        </div>
        <div class="input-box">
          <input type="text"name="email" placeholder='Entre your email' />
        </div>
        <div class="input-box message-box">
        <input type="textarea"name="textarea" placeholder='Can i help!' />
        </div>
        <div class="button">
          <input type="submit" value="Send Now"  />
        </div>
      </form>


    </div>

{/* textarea */}
    </div>


  </div>


        </div>
{/*                      copiright                 */}
        <div className="contact-divs-copi">

          <div className='contact_text-'>
            <div className="skil">
              <p>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-java"></i>
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-python"></i>
            </p>
            </div>
       <div className="contact-hed"><h2>Privacy | Terms and Condition</h2></div>   
       <div className="contact-foter"><p>&copy; Copyright 2023 All Rights Resreved</p></div>  

       


            </div>
        </div>
      
  </div>
  )
}

export default Coperight ;
