
let Sidebar = document.getElementById('Sidebar')
 let new_slide = JSON.parse(localStorage.getItem("user")) 
  
  
 data(new_slide)
       function data(slideGet){
           // slideGet.forEach((el) => {
               
         
     let div = document.createElement("div")
    let img = document.createElement("img")
    img.src = slideGet.image 
    img.setAttribute("id","image")
    let name =  document.createElement("p")
    name.innerText = slideGet.name 
    name.setAttribute("id","name")
    let email =  document.createElement("p")
    email.setAttribute("id","email")
    email.innerText = slideGet.email
    let country =  document.createElement("p")
    country.setAttribute("id","country")
    country.innerText = slideGet.country 
    //    if( slideGet.country == "UK"){
       
    //    }
    //    else if( slideGet.country == "India"){
         
    //    }
    //    else if( slideGet.country == "USA"){
        
    //    }
    //    else if( slideGet.country == "China"){
    //      China()
    //    }
    //    else if( slideGet.country == "Newzeland"){
    //      NZ()
    //    }
     
    div.append(img,name,email,country)
    Sidebar.append(div)

     // });
       }