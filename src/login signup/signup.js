import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';


const SignUp = () => {
    let history = useHistory();
    const [user,setUser] =useState({
        name:"",
        branch:"",
        enrollment:"",
        dob:"",
        college:"",
        address:"",
        email:"",
        password:"",
        
    });

    const {name,branch,enrollment,dob,college,address,email,password } =user;
    const onInputChange = e => {
        setUser({...user,[e.target.name] : e.target.value})
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log(user)
        await axios.post("http://localhost:4000/users",user)
            .then(response =>{
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        history.push("/login")
         
    }




    return(
        <div className="sign-up-page">

            <div className="container-fluid  ">
            <form  onSubmit={e =>onSubmit(e)}  >
                 <h1>Sign Up</h1>
                    
            <div className="form-group ">
          
                <div className="input-container">
                 
                <input  className="form-control " 
                type="text" 
                name="name"
                value={name}
                placeholder="Enter Your Full Name"
                onChange = {e =>onInputChange(e)}
                />
            </div>
            </div>
            <br></br>

            <div className="form-group ">
          
                <div className="input-container">
                 
                <input  className="form-control " 
                type="text" 
                name="branch"
                value={branch}
                placeholder="Enter Your Branch"
                onChange = {e =>onInputChange(e)}
                />
            </div>
            </div>
            <br></br>

            <div className="form-group ">
          
                <div className="input-container">
                 
                <input  className="form-control " 
                type="text" 
                name="enrollment"
                value={enrollment}
                placeholder="Enter Your Enrollment No."
                onChange = {e =>onInputChange(e)}
                />
            </div>
            </div>
            <br></br>

            <div className="form-group ">
          
                <div className="input-container">
                 
                <input  className="form-control " 
                type="text" 
                name="dob"
                value={dob}
                placeholder="Enter DOB: dd/mm/yy"
                onChange = {e =>onInputChange(e)}
                />
            </div>
            </div>

            <br></br>
            <div className="form-group ">
          
                <div className="input-container">
                 
                <input  className="form-control " 
                type="text" 
                name="college"
                value={college}
                placeholder="Enter College Name"
                onChange = {e =>onInputChange(e)}
                />
            </div>
            </div>
            <br></br>
            <div className="form-group ">
          
                <div className="input-container">
                 
                <input  className="form-control " 
                type="text" 
                name="address"
                value={address}
                placeholder="Enter Permanent Address"
                onChange = {e =>onInputChange(e)}
                />
            </div>
            </div>
            <br></br>
            <div className="form-group">
                
                <div className="input-container">
                 
                <input className="form-control " 
                type="email" 
                placeholder="Enter Your E-mail Address" 
                name="email"
                value={email}
                onChange = {e =>onInputChange(e)}
                />
                </div>
            </div>
            <br></br>
            <div className="form-group">
       
                <div className="input-container">
                 
                <input  className="form-control "
                type="password" 
                placeholder="Enter Your Password" 
                name="password" 
                value={password}
                onChange = {e =>onInputChange(e)}
                />
                
                </div>
            </div>

            
     

            <hr style={{height:"1px",backgroundColor:"black",width:"100%",opacity:"0.3",borderRadius:"10px"}}/>
             <button className=" btn btn-success" type="submit">Signup</button>
             <p style={{marginTop:"20px"}}><span style={{fontSize:"15px ", marginRight:"17px " }}>If you already have an account use</span><Link exact to='/login'><span style={{fontSize:"18px",color:"blue"}}>Sign-in</span></Link></p>
            </form>
            
            </div>
        </div>
    )
}

export default SignUp;