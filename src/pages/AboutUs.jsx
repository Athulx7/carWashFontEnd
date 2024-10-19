import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import aboutimage from '../assets/aboutwash-Photoroom.png'
import { Col, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import './CSS/aboutus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function AboutUs() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>
   <Header />

   <div className='container d-flex align-items-center justify-content-between '>
    <div className='aboutmain me-5 w-50 '>
      <h3 className='mb-5 fw-bold text-primary'>ABOUT US</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit odio molestiae, hic illum totam quod eligendi quia q
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quasi iusto iste doloremque reprehenderit doloribus blanditiis? Repellat, provident dolorum molestiae natus impedit iste non laudantium odit similique, est optio incidunt.
        uidem voluptatem, delectus voluptate asperiores quibusdam culpa iusto. Accusamus nihil veritatis quos nobis.</p>
    </div>
    <div className='aboutimage ms-5 w-50'>
      <img src={aboutimage} width={'100%'} alt="" />
    </div>

   </div>

   <div className='container'>
    <Row>
      <Col>
      <h5 className='fw-bold text-primary'><u>OUR MISSIONS</u></h5>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sapiente mollitia voluptas! Doloribus quas, deseru
        nt temporibus delectus totam nihil facere necessitatibus at? Numquam illum laboriosam ab placeat voluptatum commodi\
        Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        
        
        <p> Cumque suscipit harum quod quos possimus eius fugiat alias laudantium quaerat, officia, voluptates quisquam accusantium consectetur atque veritatis. Delectus temporibus pariatur nulla!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis doloribus temporibus veniam rem nesciunt voluptate eligendi exercitationem quos, adipisci illo cupiditate atque velit sint consequatur tempore culpa quod quisquam? Libero.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum in iste odit, tempora doloremque a laborum consequuntur ipsam voluptatum voluptates culpa corporis possimus. Ab, quasi. Minus pariatur porro recusandae repellendus?
         sapiente!</p>
      
      </Col>

      <Col>
      <h5 className='fw-bold text-primary'><u>OUR MISSIONS</u></h5>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sapiente mollitia voluptas! Doloribus quas, deseru
        nt temporibus delectus totam nihil facere necessitatibus at? Numquam illum laboriosam ab placeat voluptatum commodi\
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque suscipit harum quod quos possimus eius fugiat alias laudantium quaerat, officia, voluptates quisquam accusantium consectetur atque veritatis. Delectus temporibus pariatur nulla!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis doloribus temporibus veniam rem nesciunt voluptate eligendi exercitationem quos, adipisci illo cupiditate atque velit sint consequatur tempore culpa quod quisquam? Libero.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum in iste odit, tempora doloremque a laborum consequuntur ipsam voluptatum voluptates culpa corporis possimus. Ab, quasi. Minus pariatur porro recusandae repellendus?
         sapiente!</p>
      
      </Col>
    </Row>
   </div>

   <div className='feedback container '>
    <div className='d-flex '>
    <h4 className='mt-5   text-primary fw-bold'><u>WHAT OUR CLIENT SAYAS</u></h4>
    <Link className='ms-auto'>
    <button className='btn btn-primary mt-5  ' onClick={handleShow}>ADD YOUR REVIEW <FontAwesomeIcon icon={faAdd} className='ms-2' /></button>
    </Link>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bold '>ADD REVIEW ABOUT US</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=''>
            <form action="">
            <textarea name="" className='form-control' placeholder='Enter your valuable review about us'   id=""></textarea>
    
              <div className='mt-2 mb-2 text-center'>
                <p className='fw-bold mt-3'>click Your rating</p>
                <button  className='ms-2' style={{backgroundColor:'white',border:'white'}}>
                <FontAwesomeIcon icon={faStar} className='text-warning ms-2' />
                </button>

                <button  className='ms-2' style={{backgroundColor:'white',border:'white'}}>
                <FontAwesomeIcon icon={faStar} className='text-warning ms-2' />
                </button>

                <button  className='ms-2' style={{backgroundColor:'white',border:'white'}}>
                <FontAwesomeIcon icon={faStar} className='text-warning ms-2' />
                </button>

                <button  className='ms-2' style={{backgroundColor:'white',border:'white'}}>
                <FontAwesomeIcon icon={faStar} className='text-warning ms-2' />
                </button>

                <button  className='ms-2' style={{backgroundColor:'white',border:'white'}}>
                <FontAwesomeIcon icon={faStar} className='text-warning ms-2' />
                </button>

            </div>


            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            SUBMIT
          </Button>
        </Modal.Footer>
      </Modal>
   
    </div>

    


   <Carousel>
      <Carousel.Item interval={1000}>
      <div className='aboutcarousal  text-dark text-center d-flex align-items-center justify-content-center'>
          <div>
            <p className='mb-5 p-5'>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem tenetur possimus perferendis! Dolor eum vitae reprehenderit eos possimus harum, delectus ratione, facilis unde optio in at eaque beatae ipsum adipisci."</p>
            <div className='mt-2 mb-2'>
              <FontAwesomeIcon icon={faStar} className='text-warning' />
              <FontAwesomeIcon icon={faStar} className='text-warning' />
              <FontAwesomeIcon icon={faStar} className='text-warning' />
              <FontAwesomeIcon icon={faStar} className='text-warning' />
              <FontAwesomeIcon icon={faStar} className='text-warning' />
            </div>
            <h6 className='mb-2 fw-bold'>USER NAME</h6>
            <p>USERS LOCATION,PLACE</p>
          </div>
        </div>
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <div className='aboutcarousal  text-dark text-center d-flex align-items-center justify-content-center'>
          <div>
            <p className='mb-5 p-5'>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem tenetur possimus perferendis! Dolor eum vitae reprehenderit eos possimus harum, delectus ratione, facilis unde optio in at eaque beatae ipsum adipisci."</p>
            <div className='mt-2 mb-2'>
              <FontAwesomeIcon icon={faStar} className='text-warning' />
              <FontAwesomeIcon icon={faStar} className='text-warning' />
              <FontAwesomeIcon icon={faStar} className='text-warning' />
              <FontAwesomeIcon icon={faStar} className='text-warning' />
              <FontAwesomeIcon icon={faStar} className='text-warning' />
            </div>
            <h6 className='mb-2 fw-bold'>USER NAME</h6>
            <p>USERS LOCATION,PLACE</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='aboutcarousal  text-dark text-center d-flex align-items-center justify-content-center'>
          <div>
            <p className='mb-5 p-5'>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem tenetur possimus perferendis! Dolor eum vitae reprehenderit eos possimus harum, delectus ratione, facilis unde optio in at eaque beatae ipsum adipisci."</p>
            <div className='mt-2 mb-2'>
              <FontAwesomeIcon icon={faStar} className='text-warning' />
              <FontAwesomeIcon icon={faStar} className='text-warning' />
              <FontAwesomeIcon icon={faStar} className='text-warning' />
              <FontAwesomeIcon icon={faStar} className='text-warning' />
              <FontAwesomeIcon icon={faStar} className='text-warning' />
            </div>
            <h6 className='mb-2 fw-bold'>USER NAME</h6>
            <p>USERS LOCATION,PLACE</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
   </div>


   <Footer />
   </>
  )
}

export default AboutUs
