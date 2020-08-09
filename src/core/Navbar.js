import React , {Fragment} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signout, isAuthenticated } from '../auth/helper'


const CurrentTab =(history, path) =>{
    if(history.location.pathname === path){
        return { color :"#45CE30"}
    }else{
        return {color:"#EAF0F1"}
    }
}

const Navbar = ({history}) =>(
    <div>
        <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                <Link style={CurrentTab(history,"/")} className="nav-link" to="/">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link style={CurrentTab(history,"/cart")} className="nav-link" to="/cart">
                    Cart
                </Link>
            </li>
            {isAuthenticated() && (
                <Fragment>
                <li className="nav-item">
                    <Link style={CurrentTab(history,"/user/dashboard")} className="nav-link" to="/user/dashboard">
                        User Dashboard
                    </Link>
                </li>
                </Fragment>
            )}
            
            {isAuthenticated() && isAuthenticated().user.role === 1  && (
                <Fragment>
                <li className="nav-item">
                    <Link style={CurrentTab(history,"/admin/dashboard")} className="nav-link" to="/admin/dashboard">
                        Admin Dashboard
                    </Link>
                </li>
                </Fragment>
            ) }
            {!isAuthenticated() && (
                <Fragment>
                <li className="nav-item">
                    <Link style={CurrentTab(history,"/signup")} className="nav-link" to="/signup">
                        Signup
                    </Link>
                </li>
                <li className="nav-item">
                    <Link style={CurrentTab(history,"/signin")} className="nav-link" to="/signin">
                        Signin
                    </Link>
                </li></Fragment>
            )}
            {isAuthenticated() && (
                <li className="nav-item">
                <span className="text-white nav-link" onClick={() =>{
                    signout(() =>{
                        history.push("/")
                    })
                }}>Signout</span>
            </li>
            )}
        </ul>
    </div>
)

export default withRouter(Navbar)