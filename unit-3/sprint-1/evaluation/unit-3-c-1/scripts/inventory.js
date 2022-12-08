
let Inventory= JSON.parse(localStorage.getItem("products")) || []
     display(Inventory)
 function display(Inventory){
            document.querySelector("#all_products").innerHTML = ""

            Inventory.forEach(function(elem,index){
                 let div = document.createElement("div")
                  let img = document.createElement("img")
                  img.src = elem.image
                  let p = document.createElement("p")
                  p.innerText = elem.type
                  let p1 = document.createElement("p")
                  p1.innerText = elem.desc
                  let p2 = document.createElement("p")
                  p2.innerText = elem.price
                  let bt = document.createElement("button")
                  bt.innerText = "remove"
                  bt.style.cursor = "pointer"
                   bt.setAttribute("id" ,"remove_product")
                  bt.addEventListener("click" ,function(){
                    del(elem,index)
                  })




                   div.append(img,p,p1,p2,bt)
                 document.querySelector("#all_products").append(div)
            });   

            function del(elem,index){
                Inventory.splice(index,1)
                localStorage.setItem("products" ,JSON.stringify(Inventory))
                display(Inventory)
            }


}
