const { API } = require("../../Backend");



//  create category
export const createCategory = (userId, token, category) =>{
    return fetch(`${API}/category/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(category)
    }).then(response =>{

        return response.json();
    }).catch( error => console.log("error catched"))
}

//get all categories
export const getAllCategories = () =>{
    return fetch(`${API}/categories`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            
        }
    }).then(response =>{
        return response.json();
    }).catch(error => console.log("error catched"))
}

//update categories
export const updateCategories = (userId, token, categoryId,category) =>{
    return fetch(`${API}/category/update/${categoryId}/${userId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body:category
    }).then(response =>{
        return response.json();
    }).catch( error => console.log("error catched"))}

//delete categories
export const deleteCategories = (userId, token, categoryId,) =>{
    return fetch(`${API}/category/delete/${categoryId}/${userId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        },
    }).then(response =>{
        return response.json();
    }).catch( error => console.log("error catched"))
}

/////  PRODUCT CALLS ////////////

// create product
export const createaProduct = (userId, token, product) =>{
    return fetch(`${API}/product/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        },
        body:product
    }).then(response =>{
        return response.json();
    }).catch( error => console.log("error catched"))

}

// get all product 
export const getAllProduct = () =>{
    return fetch(`${API}/product`,{
        method:"GET",
        headers:{
            Accept:"application/json"
        }
    }).then(response =>{
        return response.json();
    }).catch(error => console.log("error catched"))

}

// get product by Id 
export const getProductById = (productId) =>{
    return fetch(`${API}/product/${productId}`,{
        method:"GET",
        headers:{
            Accept:"application/json"
        }
    }).then(response =>{
        return response.json();
    }).catch(error => console.log("error catched"))

}

// get product photo by Id 
export const getProductPhotoById = (productId) =>{
    return fetch(`${API}/product/photo/${productId}`,{
        method:"GET",
        headers:{
            Accept:"application/json"
        }
    }).then(response =>{
        return response.json();
    }).catch(error => console.log("error catched"))

}

// update product
export const updateProduct = (userId, token, productId,product) =>{
    return fetch(`${API}/product/update/${productId}/${userId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        },
        body:product
    }).then(response =>{
        return response.json();
    }).catch( error => console.log("error catched"))

}

//Delete product 
export const deleteProduct = (userId, token, productId,) =>{
    return fetch(`${API}/product/delete/${productId}/${userId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        },
    }).then(response =>{
        return response.json();
    }).catch( error => console.log("error catched"))
}