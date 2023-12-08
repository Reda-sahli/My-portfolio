import { useState } from 'react'
import './header.css'

function Header() {
  const [showModal, setshowModadl] = useState(false);
  return (
    <div className='hedbar' id='home'>
      <button onClick={() => {
        setshowModadl(true)
      }} className='menubar'><i class="fa-solid fa-bars"></i>
      {/* <img src="img/Vector 1.png" alt="" /> */}
      </button>
      <div />
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#portfulio">Portfulio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button className='moon' id='Mood' ><i class="fa-solid fa-moon"></i></button>



      {showModal && (

        <div className="popup" >
          <div className="model">
            <ul>
              <li><button className='xicon' onClick={() => {
                setshowModadl(false)
              }}><i class="fa-solid fa-x"></i></button></li>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfulio">Portfulio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>  
        
      )}
    </div>
  )
}


export default Header;
