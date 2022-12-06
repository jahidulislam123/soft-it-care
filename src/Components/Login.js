import React, { useEffect, useState } from 'react';
import googleIcon from "../imagess/google.png"
import facebookIcon from "../imagess/facebook.png"
import { useNavigate } from 'react-router-dom';



const Login = () => {

  


 const [email,setEmail]=useState("") ;
 const [password,setPassword]=useState("") ;
 const navigate = useNavigate();

 async function login(){
  console.warn(email,password);
  let item ={email,password}
  let result =await fetch(`https://dev-master.salesolutionbd.com/api/login?email=${email}&password=${password}` ,{
    method:'POST',
    headers:{
      "Content-Type":"application/json",
      "Accept":'application/json'
    },
    body:JSON.stringify(item)
  });
  result =await result.json();
  console.log(result)
  localStorage.setItem("auth-token",JSON.stringify(result.token));
  localStorage.setItem("user-info",JSON.stringify(result))

  if(result){
    navigate("/home")
  }
  // navigate("/home")
 }
    return (
        <div>
            <h2 class="text-blue-600 text-3xl  font-semibold">Shop <small>Shale</small> </h2> <br></br>
            <h3 class="text-2xl font-semibold">Welcome To</h3>
            <p>The best Buisness 360 Solution for your <br></br> Buisness Just Login ready to go !</p> <br></br>
            {/* text field for login  */}
            <div  class="flex justify-center" >
            <div class="form-control  w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email Address or Phone Number </span>
    
  </label>
  <input type="text" 
  onChange={(e)=>setEmail(e.target.value)}
   placeholder="Enter Email Address or Phone Number " class="input input-bordered w-full max-w-xs"  />
  
</div>
            </div>
            <div  class="flex justify-center" >
            <div class="form-control  w-full max-w-xs">
  <label class="label">
    <span class="label-text">Password ! </span>
    
  </label>
  <input type="text"
  onChange={(e)=>setPassword(e.target.value)}
  placeholder="Enter your password " class="input input-bordered w-full max-w-xs"  />
  
</div>

            </div> <br></br>
            <div>
            <button onClick={login} class="btn w-80 btn-primary">Log In</button> <br></br>
            <label class="ms-4"><a class="text-blue-600" href="">Forget Password ?</a>  </label>
            
            </div>

        <div>
            <p>Don't have an Account ? <a class="text-blue-600" href="">Sign Up</a>  </p>
            <h3> Login with Social Media </h3> <br></br>
            <div>
            <button class="btn mr-2 btn-active btn-ghost">
            <img src={googleIcon} alt="Girl in a jacket" width="30" height="30"></img>
            </button>
            <button class="btn btn-active btn-ghost">
            <img src={facebookIcon} alt="Girl in a jacket" width="30" height="30"></img>
            </button>
            
           
            </div>
        </div>
      

        </div>
    );
};

export default Login;