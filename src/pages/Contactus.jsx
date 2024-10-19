import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import './CSS/contactus.css'

function Contactus() {
  return (
   <>
   <Header />

   <div className='container d-flex align-items-center justify-content-center mt-5  '>
    <Row >
      <Col className=''>
      <h3 className='mt-5 text-primary fw-bolder'>Contact Information</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quidem, ad nam nesciunt ratione dignissiition anf knknin jajdn </p>
      <div className=''>
        <FontAwesomeIcon icon={faLocationDot}  className='text-primary fs-4'/>
        <h6 className='mt-2'>location,Place,district,state,country</h6>
        <hr className='w-50' /> 
        <FontAwesomeIcon icon={faPhoneVolume}  className='text-primary fs-4'/>
        <h6 className='mt-2'>+919999999999</h6>
        <hr className='w-50'/>

        <FontAwesomeIcon icon={faEnvelope}  className='text-primary fs-4'/>
        <h6 className='mt-2'>carwashcenters@gamil.com</h6>
        

      </div>
      </Col>

      <Col >
      <div className=' forms  ' >
        <h3 className='text-primary fw-bold mt-3 p-4'>Send a message</h3>
         
        <form action="" className='p-4'>
          <div className='d-flex mb-5'>
          <input type="text" name="" id=""  placeholder='Name' className='form-control'/>
          <input type="text" name="" id=""  placeholder='Phone' className='form-control ms-4 '/>
          </div>
          <input type="text" name="" id=""  placeholder='email' className='form-control mt-5'/>
          <textarea name="" className='form-control mt-5' placeholder='message' style={{height:'200px'}} id=""></textarea>

          <button className='btn btn-primary mt-4 '>SUBMIT <FontAwesomeIcon icon={faArrowRight} className='ms-3' /></button>


        </form>
      </div>
      </Col>
    </Row>

    
   </div>

   <div className='contanier'>
   <iframe className='w-100 p-5 mt-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.55832720463!2d76.30948095113635!3d10.008813464705796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1726567127087!5m2!1sen!2sin" width="600" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </div>



   <Footer />
   </>
  )
}

export default Contactus
