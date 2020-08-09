import React, { useState } from 'react'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import { Link } from 'react-router-dom'
import { createCategory } from './helper/adminapicall'



const AddCategory = () =>{

const [name, setName]= useState("")
const [error, setError] = useState(false)
const [success, setSuccess] = useState(false)
const [loading, setLoading] = useState(false)


const {user, token} = isAuthenticated();
const myCategoryform = () =>{ 
    return(
        <div>
        <form>
        <div className="form-group">
            <p className="lead">Enter the category</p>
            <input type ="text"
            className="form-control my-3" 
            onChange={handleChange}
            value={name}
            autoFocus
            required
            placeholder="For Ex. Bag"/>
            <button onClick={onSubmit} className="btn btn-danger"> Create Category</button>
        </div>
        </form>
        </div>
    )
}

const handleChange = event =>{
    setError(false);
    setName(event.target.value);

   

}

const onSubmit = event =>{
    event.preventDefault();
    setError(false);
    setSuccess(false);
    setLoading(true)

     //backend sent 
     createCategory(user._id, token, {name}).then(data =>{
        if(data.error){
            setError(true)
        }else{
            setError(false)
            setSuccess(true);
            setName("");
            setLoading(false)

        }
    })

}

const showError = () => (
    error && (
        <div className="alert alert-info"><h2>you cant create category</h2></div>
    )
)
const showSuccess = () => (
    success && (
    <div className="alert alert-info"><h2>category create succesfully </h2></div>
    )
)
const showLoading = () => (
    loading && (
    <div className="alert alert-info"><h2> Loading . . . </h2></div>
    )
)


const goBack = () =>(
    <div className="mt-5">
        <Link className="btn btn-sm btn-info mb-3" to="/admin/dashboard">Admin Home</Link>
    </div>
)

    return(
        <Base>
        <div className="container">
            <div className="row bg-white rounded" >
                <div className="col-md-8 offset-md-3 p-5">
                <h1 className=""> create category</h1>
                {showError()}
                {showLoading()}
                {showSuccess()}
                {myCategoryform()}
                {goBack()}
                </div>
                </div> </div>
        </Base>
    )
}
export default AddCategory