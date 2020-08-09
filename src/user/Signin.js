import React, {useState} from "react"
import Base from "../core/Base"
import {Link, Redirect} from "react-router-dom"

import {signin, Authenticate, isAuthenticated} from "../auth/helper/index"

const Signin = () =>{
    const [Values, setValues] = useState({
        email:"",
        password:"",
        error:"",
        loading: false,
        didRedirect: false
    })
    const {email, password, error,loading, didRedirect} = Values
    const {user} = isAuthenticated();

    const handleChange = name => event =>{
        setValues({...Values, error:false,[name]: event.target.value})
        }
    
    const onSubmit = event =>{
        event.preventDefault()
        setValues({...Values, error:false, loading:true})
        signin({email, password})
        .then(data =>{
            setValues({...Values, error: false, loading:false})
            if(data.error){
                setValues({...Values,error: data.error, loading:false})
            }else{
                Authenticate(data,()=>{
                    setValues({
                        ...Values,
                        didRedirect:true
                    })
                })
            }
        })
        .catch(console.log("signin is failed"))

    }
    const performRedirect = () =>{
        if(didRedirect){
            if(user && user.role === 1){
                return <Redirect to="/admin/dashboard"/>
                
            }else{
              return <Redirect to="/user/dashboard"/> 
            }
        }
        if(isAuthenticated()){
            return <Redirect to="/"/>
        }
        
    }
    const loadingMessage = () =>{
        return(
            loading && (
                <div className="alert alert-info">
                    <h2>Loading . . . .</h2>
                </div>
            )
        )
    }
    
    const errorMessage = () =>(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" style={{display: error? "":"none"}}>
                        {error}
                    </div>
                </div>
            </div>
        )

    const SigninForm = () =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input type="email" onChange={handleChange("email")} value={email} className="form-control"/>
                        </div><div className="form-group">
                            <label className="text-light">Password</label>
                            <input type="password" onChange={handleChange("password")} value={password} className="form-control"/>
                        </div>
                        <button onClick={onSubmit} className="btn-success btn-block py-1">Submit</button>
                    </form>
                </div>
            </div>
        )

    }
    return(
        <div>
            <Base title=" Signin page " description=" ">
                
                {loadingMessage()}
                {errorMessage()}
                {SigninForm()}
                {performRedirect()}
                {JSON.stringify(Values)}</Base>
        </div>
    )
}

export default Signin