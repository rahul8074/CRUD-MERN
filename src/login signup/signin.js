import React,{useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
 
const SignIn = () => {
    
    let history = useHistory();
    const [user,setUser] =useState({
        email:"",
        password:"",
        
    });

    const {email,password } =user;
    const onInputChange = e => {
        setUser({...user,[e.target.name] : e.target.value})
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log(user)
        await axios.post("http://localhost:4000/login",user)
            .then(response =>{
                // console.log("login information is sent  to the server")
                // console.log(response)
               
                
                
                if(response.data.user){
                    
                    //set username to local storage
                    window.localStorage.setItem('user',response.data.user)
                    history.push('/records');
                     
                   
                }
               
            })
            .catch(error => {
                console.log(error)
                console.log("error in login sending to server")
            })
         
    }




    return(
        <div className="sign-in-page">
            <div className="container-fluid  ">
            <form  onSubmit={e =>onSubmit(e)}  >
                    <h1>Login Page</h1>
         
            <div className="form-group">
                <label>EMAIL</label>
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
                <label>PASSWORD</label>
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

            {/* image */}
     

            <hr style={{height:"1px",backgroundColor:"black",width:"100%",opacity:"0.3",borderRadius:"10px"}}/>
             <button className=" btn btn-success" type="submit">Signin</button>
        
            </form>
            </div>
        </div>
    )
}

export default SignIn;