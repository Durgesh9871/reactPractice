// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let id ;
  // let arrOfMovies = JSON.parse(localStorage.getItem("movie")) || []


  let wallet = document.getElementById("wallet")
  let movies = document.getElementById("movies")
  let real_price = JSON.parse(localStorage.getItem("amount")) || []  
  changeMoney(real_price)
  function changeMoney(data){
      wallet.innerText = data 
      
    }


   async function moviesAll(){
     
    try{
      let search = document.getElementById("search").value 
      let res = await fetch(`https://www.omdbapi.com/?apikey=35e4c6c0&s=${search}`)
      let {Search} = await res.json()
      console.log(Search)
      if(search != undefined){
        appendMovies(Search)
      }

    }
    catch(err){
      console.log(err)
    }
     
  }
   function appendMovies(data){
    movies.innerHTML = null 
    data.forEach((el) => {
      let div = document.createElement("div")
       div.setAttribute("class" ,"movie_tab")
         let img = document.createElement("img")
         img.src = el.Poster
         let title = document.createElement("p")
         title.innerText = el.Title 
         let btn = document.createElement("button")
         btn.innerText = "Book Now"
         btn.setAttribute("class","book_now")
         btn.addEventListener("click" ,function(){
          addMovies(el)
        

         })

         div.append(img,title ,btn)
         movies.append(div)

    });
   }
    
    function debounce(moviesAll ,delay){
        
      if(id){
        clearTimeout(id)

      }
      id = setTimeout(function(){
            if(search.value == ""){
              movies.innerHTML = null 
            }
            else{
              moviesAll()
            }


      },delay)
    }


    function addMovies(el){
          
        // let ans = img.src 
        // let tit =  title.innerText

         
        //  let titleOfMovie = localStorage.setItem("movie",JSON.stringify(tit))
         let ansOfMovie =  localStorage.setItem("movie",JSON.stringify(el))
         
         window.location.href="checkout.html"



    }
