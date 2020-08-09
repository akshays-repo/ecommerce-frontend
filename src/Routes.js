import React from "react"
import {BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./core/Home"
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import userDashBoard from "./user/UserDashBoard";
import adminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory"
import ManageCategory from './admin/ManageCategory'
import AddProduct from './admin/AddProduct'





const Routes= () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/signin" exact component={Signin}/>
                <PrivateRoute path="/user/dashboard" exact component={userDashBoard}/>
                <AdminRoute path="/admin/dashboard" exact component={adminDashBoard}/>
                <AdminRoute path="/admin/create/category" exact component={AddCategory}/>
                <AdminRoute path="/admin/manage/category" exact component={ManageCategory}/>
                <AdminRoute path="/admin/create/product" exact component={AddProduct}/>



                

            </Switch>
        </BrowserRouter>
    )
}

export default Routes