import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
 


const Records = () =>{

    let history = useHistory();

    const [record ,setRecord] =useState([]);

    //load student record when page refreshes
    useEffect(()=>{
        loadRecords();
    },[])

    const loadRecords = async() =>{
        const result= await axios.get("http://localhost:4000/users");
        setRecord(result.data)
    }

    //deleting record
    const DeleteRecord = (e)=>{
        console.log(`${e} deleting record`)
        axios.delete(`http://localhost:4000/users/${e}`)
        window.location.reload();

    }

    const EditRecord = (e) =>{
        console.log(`${e._id} Editing Record`)
         history.push({
             pathname:"/edit-record",
             state:{details:e}
         })
    }


    return(
        <div>
            <h1> STUDENT Records</h1>

            
            <div>
                
                <table>
                    <tr className="table-row">
                        <td>Name
                            {
                                record.map((user,key)=>(
                                    <tr>
                                        {user.name}
                                    </tr>
                                ))
                            }
                            <tr>
                                   
                            </tr>
                        </td>
                        <td>Email Address:
                        {
                                record.map((user,key)=>(
                                    <tr>
                                        {user.email}
                                    </tr>
                                ))
                            }
                        </td>
                        <td>Branch:
                        {
                                record.map((user,key)=>(
                                    <tr>
                                        {user.branch}
                                    </tr>
                                ))
                            }
                        </td>
                        <td>
                            Enrollemnt:
                            {
                                record.map((user,key)=>(
                                    <tr>
                                        {user.enrollment}
                                    </tr>
                                ))
                            }
                        </td>
                        <td>
                            DOB: {
                                record.map((user,key)=>(
                                    <tr>
                                        {user.dob}
                                    </tr>
                                ))
                            }
                        </td>
                        <td>
                            College: {
                                record.map((user,key)=>(
                                    <tr>
                                        {user.college}
                                    </tr>
                                ))
                            }
                        </td>
                        <td >
                            Home Address: {
                                record.map((user,key)=>(
                                    <tr>
                                        {user.address}
                                    </tr>
                                
                                ))
                            }
                        </td>
                        {/* Buttons for action */}
                        <td id="action">
                        {
                                record.map((user,key)=>(
                                    <button onClick={e=>EditRecord(user)} >Edit</button>
                                
                                ))
                            }
                        </td>
                      <td id="action">
                      {
                                record.map((user,key)=>(
                                    <button onClick={e =>DeleteRecord(user._id)} >Delete</button>
                                
                                ))
                            }
                      </td>
                    </tr>
                </table>
                

            </div>
        </div>
    )
}

export default Records;