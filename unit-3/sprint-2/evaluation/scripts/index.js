// Add the coffee to local storage with key "coffee"
let bucketData =  JSON.parse(localStorage.getItem("coffee"))  || []
// let bucketData = []

// if(bucketData.length == 0){
//      bucketData = []
// }
// else{
//     JSON.parse(localStorage.getItem("coffee"))
// }

let count = document.getElementById("coffee_count")
count.innerText = bucketData.length 

let menu = document.getElementById("menu")
myFunc()
async function myFunc() {
try {
  let res = await fetch("https://masai-api.herokuapp.com/coffee/menu")
  let data = await res.json()
  // console.log(data)
  let real_data = data.menu.data
  //  console.log(real_data)
   display(real_data)
}
catch (err) {
  console.log(err)
}
}

function display(data){

 data.forEach(function(el,index){
  let div = document.createElement("div")
     let img = document.createElement("img")
     img.src = el.image

     let title = document.createElement("p")
     title.innerText = el.title

     let price = document.createElement("p")
     title.innerText = el.price

     let btn = document.createElement("button")
       btn.setAttribute("id" ,"add_to_bucket")
     btn.innerText = "Add to bucket"
     btn.addEventListener("click" , function(){
         addInBucket(el,index)
     })



     div.append(img , title ,price ,btn)
     menu.append(div)
 });
}
 function addInBucket(el,index){
  // console.log(el)
    bucketData.push(el)
    count.innerText = bucketData.length 

    localStorage.setItem("coffee" ,JSON.stringify(bucketData))
 }

