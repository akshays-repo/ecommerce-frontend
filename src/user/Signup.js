import React, {useState} from "react"
import Base from "../core/Base"
import {Link} from "react-router-dom"
import { signup } from "../auth/helper"


const Signup = () =>{
    const [Values, setValues] = useState({
        name:"",
        email:"",
        password:"",
        error:"", 
        success:false
    })
    const {name, email, password, error, success} = Values

    const handleChange = name => event =>{
        setValues({...Values, error:false,[name]: event.target.value})
        }

    const onSubmit = event =>{
        event.preventDefault()
        setValues({...Values, error:false})
        signup({name, email, password})
        .then(data =>{
            if(data.error){
                setValues({...Values, error:data.error, success:false})                    
            }else {
                setValues({...Values,name:"",
                email:"",
                password:"",
                error :"",
                success: true
             })
            }
        })
        .catch(console.log("error catched"))
    }

    const succesMessage = () =>(
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-success" style={{display: success? "":"none"}}>
                    New account was created successfully . please {" "} <Link to="/signin">Login Here</Link>
                </div>
            </div>
        </div>
    )

    const errorMessage = () =>(
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-success" style={{display: error? "":"none"}}>
                    {error}
                </div>
            </div>
        </div>
    )

    const SignupForm = () =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input type="text" className="form-control" value={name} onChange={handleChange("name")}/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input type="email" className="form-control" value={email} onChange={handleChange("email")}/>
                        </div><div className="form-group">
                            <label className="text-light">Password</label>
                            <input type="password" className="form-control" onChange={handleChange("password")}/>
                        </div>
                        <button className="btn-success btn-block py-1" value={password} onClick={onSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        )

    }
    return(
        <div>
            <Base title=" Sign up page " description=" create a new account ">
                {succesMessage()}
                {errorMessage()}
                {SignupForm()}
                </Base>
            <p className=" text-white text-center">{JSON.stringify(Values)}</p>
        </div>
    )
}

export default Signup