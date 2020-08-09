import React from 'react';
import Base from "../core/Base"
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';


 

const adminDashBoard = () =>{

    const {user: {user, email, role}} = isAuthenticated()

    const adminLeftSide = () => (
        <div className="card">
            <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/admin/create/category" className="nav-link text-info">Create Categories</Link>

                </li>
                <li className="list-group-item">
                    <Link to="/admin/manage/category" className="nav-link text-info">Manage Categories</Link>

                </li>
                <li className="list-group-item">
                    <Link to="/admin/create/product" className="nav-link text-info">Create Product</Link>

                </li>
                <li className="list-group-item">
                    <Link to="/admin/manage/product" className="nav-link text-info">Manage Product</Link>

                </li>
                <li className="list-group-item">
                    <Link to="/admin/manage/orders" className="nav-link text-info">Manage Orders</Link>

                </li>
            </ul>
             
        </div>
    )
    const adminRightSide = () => {
        return(
            <div className="card mb-4">
                <h4 className="card-header">Admin Information</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">
                            Name:
                        </span> Akshay s
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">
                            Email:
                        </span> Akshay@gmail.com
                    </li>
                </ul>
            </div> 
        )
    }


    return(
        <div>
            <Base title="Admin" className="container bg-success p-4">
            <h1>This is Admin page</h1>
            
            <div className="row">
            <div className="col-3">{adminLeftSide()}</div>
            <div className="col-9">{adminRightSide()}</div>
            </div>
            </Base>
        </div>
    )
}

export default adminDashBoard