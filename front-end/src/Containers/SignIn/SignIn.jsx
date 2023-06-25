import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './SignIn.css'
const SignIn = () => {
  const navigate = useNavigate()
  const [data,setData]=useState({
    emailId:'',
    password:''
  })
  const [error,setError]=useState(false)
   
  const handleLogin=(e)=>{
    if(!data.emailId || !data.password){
      setError(true);
      return(false)
     }
    e.preventDefault();
   axios.post('http://localhost:5000/signin',data)
   
   .then((res)=>{
    console.log(res);
    localStorage.setItem("user",JSON.stringify(res.data))
    if(res.data.name){
      navigate('/')
    }else{
      alert("enter correct details")
    }
   
   })
   .catch((err)=>{
    console.log(err)
   })  
  }
  return (
    <div className='signin'>
    <div className='signin_left'>
    <div className="signin_left_container">
      <h1>Sign in</h1>
      <div className='social_links'>
      <button><i class="fa-brands fa-facebook-f"></i></button>
      <button><i class="fa-brands fa-instagram"></i></button>
      <button><i class="fa-brands fa-google"></i></button>
      </div>
      <div>

      </div>
      <div className='signin_form'>
      <input type='text' placeholder='Manager Id'
      value={data.emailId} onChange={(e)=>setData({...data,emailId:e.target.value})}/>
      {error && !data.emailId && <span className='invalid_input'>Enter valid email Id</span>}
      <input type='password' placeholder='Password'
      value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
      {error && !data.password && <span className='invalid_input'>Enter valid password</span>}
      <button onClick={(e)=>{handleLogin(e)}}>SIGN IN</button>
      </div>
      <p>New Here? <a href='/signup'>SIGN UP</a></p>
      
    </div>
    </div>
    <div className='signin_right'>
    <div className="signin_right_container">
      <div className="img_logo">
      <i class="fa-solid fa-cloud-arrow-down"></i> 
      </div>
      <h1> Image Store </h1>
       
      
    </div>
    </div>

  </div>
  )
}

export default SignIn