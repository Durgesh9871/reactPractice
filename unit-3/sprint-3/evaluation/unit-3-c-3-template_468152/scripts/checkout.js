// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let wallet = document.getElementById("wallet")

let real_price = JSON.parse(localStorage.getItem("amount")) || []  
changeMoney(real_price)
function changeMoney(data){
    wallet.innerText = data 
    
}

let movie = document.getElementById("movie")

    let moviesImage = JSON.parse(localStorage.getItem("movie"))
    data(moviesImage)
    
    function data(el){
       movie.innerHTML = null 
       let div = document.createElement("div")
          
         let img = document.createElement("img")
         img.src = el.Poster
         let title = document.createElement("p")
         title.innerText = el.Title 

         div.append(title,img)
         movie.append(div)
    }

   