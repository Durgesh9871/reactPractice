//store the products array in localstorage as "products"
// let form = document.querySelector("form")
let button = document.getElementById("add_product")

let products = JSON.parse(localStorage.getItem("products")) || []

button.addEventListener("click" ,myfunc)

function myfunc(event){
    event.preventDefault()
    let form = document.querySelector("form")
     let obj = {
        type:form.type.value ,
        desc:form.desc.value ,
        price:form.price.value ,
        image:form.image.value ,
     }  
    
     products.push(obj)
       localStorage.setItem("products" ,JSON.stringify(products))
     form.type.value  = ""
     form.desc.value  =""
        form.price.value =""
       form.image.value =""
   
}

// 