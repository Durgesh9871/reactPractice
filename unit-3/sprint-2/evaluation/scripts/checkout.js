let id0 ;
let id ;
let id2 ;
let id3 ;
let id4 ;
function start(){


id0 =  setTimeout(function(){
 alert("Your  Your order is accepted ")
  },0)
  id0 = clearTimeout()
  
  id =  setTimeout(function(){
    alert("Your order is being Prepared")
  },3000+0)
   
 id = clearTimeout()

  id2 =  setTimeout(function(){
    alert("Your order is being packed  ")
  },8000+3000+0)
   
  id2 = clearTimeout()

  id3 = setTimeout(function(){
    alert(" Your order is out for delivery ")
  },10000+8000+3000+0)
   
  id3 = clearTimeout()

  id4 = setTimeout(function(){
    alert("Order delivered")
  },12000+10000+8000+3000+0)
   
  id4 = clearTimeout()

}