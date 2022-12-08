import axios from "axios"


export const sendData = (data={})=>{
   return axios.post('https://reqres.in/api/login',{
    email:data.email ,
    password:data.password ,
   })
}

export const getData = ()=>{
    return axios.get('https://jabz-101-app.herokuapp.com/products')
}