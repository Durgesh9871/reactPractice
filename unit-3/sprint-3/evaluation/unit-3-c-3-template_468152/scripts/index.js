// Store the wallet amount to your local storage with key "amount"
let wallet = document.getElementById("wallet")
 let Ls_amount = JSON.parse(localStorage.getItem("amount")) || []
//  man(Ls_amount)
man(Ls_amount)

function myFunc(){
  
  let amount = document.getElementById("amount").value 
  let money = Number(wallet.innerText)
   money += Number(amount)
  
   localStorage.setItem("amount",JSON.stringify(money))
   
   
   man(Ls_amount)
  }
  

function man(data){
 
    wallet.innerText = data 
   
}
