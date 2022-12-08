// On clicking remove button the item should be removed from DOM as well as localstorage.
let coffeeNew = JSON.parse(localStorage.getItem("coffee")) || []
let bucket = document.getElementById("bucket")
let total = document.getElementById("total_amount")
  
display(coffeeNew)


   function display(data){
    bucket.innerHTML = null 
    let sum = 0 
    data.forEach(function(el,index){
       sum += Number(el.price)
      let div = document.createElement("div")

     let img = document.createElement("img")
     img.src = el.image

     let title = document.createElement("p")
     title.innerText = el.title

     let price = document.createElement("p")
     price.innerText = el.price

     let btn = document.createElement("button")
       btn.setAttribute("id" ,"remove_coffee")
     btn.innerText = "Remove From Bucket"
     btn.addEventListener("click" , function(){
         removeInBucket(el,index)
     })

     div.append(img , title ,price ,btn)
     bucket.append(div)
      
    });
    if(sum== 0){
      total.innerText = ""
    }
    else{
      total.innerText = sum 
      
    }
   }
    
      function removeInBucket(el,index){
        coffeeNew.splice(index,1)
        localStorage.setItem("coffee", JSON.stringify(coffeeNew))
        display(coffeeNew)
      }