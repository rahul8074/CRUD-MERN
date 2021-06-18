import React,{useState,useEffect} from 'react';
import {Link,useHistory, useLocation} from 'react-router-dom';
import axios from 'axios';



const EditRecord = () => {
    let history = useHistory();
    let location = useLocation();

    var detail = location.state.details;

    
 
   
    const [user,setUser] =useState({
        name:detail.name,
        branch:detail.branch,
        enrollment:detail.enrollment,
        dob:detail.dob,
        college:detail.college,
        address:detail.address,
        email:detail.email,
        password:detail.password,
        
    });

    

    var {name,branch,enrollment,dob,college,address,email,password } =user;
    const onInputChange = e => {
        setUser({...user,[e.target.name] : e.target.value})
    }
    const onSubmit = async(e) => {
        e.preventDefault();
        console.log(user)

        
        await axios.put(`http://localhost:4000/users/${detail._id}`,user)
            .then(response =>{
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        history.push("/records")
         
    }




    return(
        <div className="sign-up-page">

            <div className="container-fluid  ">
            <form  onSubmit={e =>onSubmit(e)}  >
                 <h1>Edit Details </h1>

                    
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
             <button className=" btn btn-success" type="submit">Update Details</button>
             
            </form>
            
            </div>
        </div>
    )
}

export default EditRecord;