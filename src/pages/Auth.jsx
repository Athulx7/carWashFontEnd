import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { json, Link, useNavigate } from 'react-router-dom'
import image from '../assets/carLoginimage-Photoroom.png'
import carwashlogo from '../assets/carwashlogo.jpg'
import { faFacebook, faGithub, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { toast } from 'react-toastify'
import { loginApi, registerAPI } from '../Services/allAPI'

function Auth({register}) {

  const navigate = useNavigate()

  const [userData,setUserdata] = useState({
    username:'',
    email:'',
    password:''
  })

  const registerHandle = async(e)=>{
    e.preventDefault()
    const {username,email,password} = userData
    if(!username || !email || !password){
      toast.error("please fill the form completely")
      
    }else{

      const result = await registerAPI(userData)
      if(result.status === 201){
        setUserdata({
          username:'',
          email:'',
          password:''
        })
      }
     toast.success(`${username} registred succesfully`)
     navigate('/login')
     
    }

  }


  const loginHandle = async(e)=>{
    e.preventDefault()
    const {email,password,role} = userData;
    if(!email || !password){
      toast.warning("please fill the form completely")
    }
    else{
      const result = await loginApi(userData)
      // console.log(result)
      if(result.status === 200){
        if(result.data.data.role == 'user'){
          sessionStorage.setItem("leggeduser",JSON.stringify(result.data.data))
        sessionStorage.setItem("token",result.data.token)
        toast.success(`${result.data.data.username} logged in successfully`)
        navigate('/')
        setUserdata({
          email:'',
          password:''

        })

        }
        else if(result.data.data.role == 'owner'){
          
          sessionStorage.setItem("logged owner",JSON.stringify(result.data.data))
          sessionStorage.setItem("token",result.data.token)
          toast.success(`${result.data.data.username} owner logged in successfully`)
          navigate('/ownerdash')
          setUserdata({
            email:'',
            password:''
  
          })

        }
        else if(result.data.data.role == 'admin'){
          sessionStorage.setItem("logged admin",JSON.stringify(result.data.data))
          sessionStorage.setItem("token",result.data.token)
          toast.success(`${result.data.data.username} logged in successfully`)
          navigate('/admindash')
          setUserdata({
            email:'',
            password:''
  
          })
        }
        
        
      }
      else if(result.status === 401){
        toast.error("invalid username or password")
      }
      else{
        toast.error("somthing went wrong")
      }
      
    }

  }

  const registerForm = register ? true:false
  return (
    <>
    
      <div className='container mt-5'>
        <Link to={'/'} style={{textDecoration:'none',fontSize:'20px',fontWeight:'bolder'}} >
          <FontAwesomeIcon icon={faArrowLeft} /><span className='ms-2'> Back To Landing page</span>  
        </Link>
      </div>

      <div className='container'>
        <Row >

          <Col className='me-5'>
          <img src={image} width={'100%'} alt="" />
          </Col>
          <Col className='ms-5 mt-5 text-center align-items-center justify-content-center'>
          <form action="" className='w-100 border border-secondary rounded p-5'>
            <span className='d-flex text-center align-items-center justify-content-center'><img src={carwashlogo} width={'100px'}  alt="" /> <h3 className='text-primary fw-bolder mt-3 ms-3'>CAR WASH</h3></span>

            {

              registerForm ?
              //register form
             <div  className='text-center ms-3 mt-3'>
              <h5 className='fw-bold'>Sign Up To Your Account</h5>
              <input type="text"  className='form-control mt-3' placeholder='Enter Name' 
              value={userData.username}
              onChange={(e)=>setUserdata({...userData,username:e.target.value})}
              />

             </div>
              :
              <>
              {/* {loginform} */}
              <div className='text-center ms-3 mt-3'>
                <h5 className='fw-bold' >Sign In To Your Account</h5>
              </div>
              
              </>
            }
            <div className='text-center ms-3'>
            <input type="email" className='form-control rounded mt-3 ' placeholder='Enter Email' 
            value={userData.email}
            onChange={(e)=>setUserdata({...userData,email:e.target.value})}
            />
            <input type='password' className='form-control rounded mt-3 ' placeholder='Enter Password' 
            value={userData.password}
            onChange={(e)=>setUserdata({...userData,password:e.target.value})}
            />
            </div>

            {

              registerForm ?
              <div className='mt-4 ms-3'>

                <button className='btn btn-primary w-100' onClick={registerHandle}>REGISTER</button>
                <p className='mt-4'>back to login <Link to={'/login'} className='ms-2'>Click here to login</Link></p>

              </div>
              :
              <div className='mt-3 ms-3'>
                <button className='btn btn-primary w-100  ' onClick={loginHandle}>LOGIN</button>
                <p className='mt-4'>Not Registered Yet <Link to={'/register'} className='ms-2'>Click here to register</Link></p>
                
              </div>
            }
           
          </form>
          </Col>
        </Row>
      </div>

      <div className="dashFooter   align-items-center justify-content-center text-center mt-5 d-flex flex-column">
        <h4 className="fw-bold mt-5">CAR WASH</h4>
        <div className="d-flex mt-4">
          <input
            type="text"
            name=""
            id=""
            className="form-control me-5 rounded "
            placeholder="Enter your email"
          />
          <input
            type="text"
            name=""
            id=""
            className="form-control rounded"
            placeholder="Enter a message "
          />
        </div>

        <button className="btn btn-primary mt-4">SEND MESSAGE</button>

        <h6 className="mt-5">+9199999999</h6>
        <h6 className="">carwashcenters@gmail.com</h6>

        <div className="d-flex">
          <Link
            style={{ textDecoration: "none", color: "blue", fontSize: "35px" }}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>

          <Link
            className="ms-3"
            style={{
              textDecoration: "none",
              color: "#fd02b3",
              fontSize: "35px",
            }}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>

          <Link
            className="ms-3"
            style={{ textDecoration: "none", color: "black", fontSize: "35px" }}
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>

          <Link
            className="ms-3"
            style={{ textDecoration: "none", color: "black", fontSize: "35px" }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>

          <Link
            className="ms-3"
            style={{ textDecoration: "none", color: "blue", fontSize: "35px" }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>

          <Link
            className="ms-3"
            style={{ textDecoration: "none", color: "red", fontSize: "35px" }}
          >
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </div>
        <div className="">
          <p className="mt-2 ms-5">copyrightnsjdnuhuisa</p>
        </div>
      </div>


      {/* <ToastContainer /> */}
        
        </>
  )
}

export default Auth
