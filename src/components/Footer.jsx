import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import instaLogo from '../assets/instaLogo.png'

function Footer() {
  return (
    <>

    <div className='d-flex justify-content-center align-items-center mt-5 ' style={{backgroundColor:'aliceblue'}}>
        <div className='d-flex align-items-center-evenly p-5'>
            <div className='' style={{width:'300px'}}>
                <Link style={{textDecoration:'none',color:'black'}}>
                <h5>car wash</h5>
                </Link>
                <p style={{textAlign:'justify',color:'gray'}} className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod praesentium sapiente nesciunt soluta adipisci, vel quas sint, esse ex suscipit cum assumenda dicta voluptatum provident placeat eum? Inventore, autem maxime.</p>
            </div>


            <div className='d-flex flex-column ms-5 link'style={{width:'300px'}}>
                <h5>Links</h5>

                <div className='d-flex flex-column mt-3'>

                <Link className='lnk ' to={'/home'} style={{textDecoration:'none',color:'gray'}}>
                Home
                </Link>

                <Link className='lnk' to={'/aboutus'} style={{textDecoration:'none',color:'gray'}}>
                About US
                </Link>

                <Link className='lnk' to={'/showmorewash'} style={{textDecoration:'none',color:'gray'}}>
                Car wash centers
                </Link>

                <Link className='lnk' to={'/contactus'} style={{textDecoration:'none',color:'gray'}}>
                Contact us
                </Link>
                </div>

                

            </div>


            <div className='d-flex flex-column ms-4 link'style={{width:'300px'}}>
                <h5>Send Message</h5>

                <div className='d-flex flex-column mt-3'>
                    <input type="text" className='form-control' placeholder='Text a message' />
                    <button className='mt-2 btn btn-primary fw-bold'>SEND</button>

                
                </div>

                

            </div>

            <div className='d-flex flex-column ms-5 link' style={{width:'300px'}}>
                <h5>Social</h5>

                <div className='d-flex flex-row mt-3 '>

                <Link className='lnk ' style={{textDecoration:'none',color:'blue'}}>
                <FontAwesomeIcon icon={faFacebook}  style={{fontSize:'30px'}}/>
                </Link>

                <Link className='lnk ms-3 text-primary' style={{textDecoration:'none',color:''}}>
                <FontAwesomeIcon icon={faTwitter} style={{fontSize:'30px'}}/>
                </Link>

                <Link className='lnk ' style={{textDecoration:'none',color:'#fd02b3'}}>
                <img src={instaLogo} width={60} alt="" />
               
                </Link>

                <Link className='lnk ' style={{textDecoration:'none',color:'red'}}>
                <FontAwesomeIcon icon={faYoutube} style={{fontSize:'30px'}}/>
                </Link>

                <Link className='lnk ms-3' style={{textDecoration:'none',color:'black'}}>
                <FontAwesomeIcon icon={faGithub} style={{fontSize:'30px'}}/>
                </Link>
                </div>

                

            </div>






            
        </div>
    </div>
    
    </>
  )
}

export default Footer
