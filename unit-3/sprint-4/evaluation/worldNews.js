
  let Sidebar = document.getElementById("Sidebar")
  let slideGet = JSON.parse(localStorage.getItem("user")) 
  
  
  data(slideGet)
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
        if( slideGet.country == "UK"){
          Uk()
        }
        else if( slideGet.country == "India"){
          India_work()
        }
        else if( slideGet.country == "USA"){
          USA()
        }
        else if( slideGet.country == "China"){
          China()
        }
        else if( slideGet.country == "Newzeland"){
          NZ()
        }
      
     div.append(img,name,email,country)
     Sidebar.append(div)

      // });
        }
      

  async function start_search(){
    //  API : https://masai-mock-api-2.herokuapp.com/news?q={query}  
    try{
      let search = document.getElementById("search").value 
       
      let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news?q=${search}`)
      
      let {articles} = await res.json()
      // console.log(articles)
      if(articles !== undefined){
        display_news(articles)
      }
      
    }
    catch(err){
      console.log(err)
    }
  }
  //   -----------NEW APPEND

  let news_container = document.getElementById("news_container")
        
  function display_news(data){
    news_container.innerHTML = ""
    data.forEach((el)=> {
       let div = document.createElement("div")
       div.setAttribute("class","news")
       let img = document.createElement("img")
        img.src = el.urlToImage 
       let title =  document.createElement("p")
       title.innerText = el.title 
       let author = document.createElement("p")
       author.innerText = el.author

        div.append(img,title,author)
        news_container.append(div)
        window.location.href="news.html"
    });
  }


    // function final_data(){
    //   // https://masai-mock-api-2.herokuapp.com/news/top-headlines?country={country code}


    // }
    // let India = document.getElementById("in")
    // India.addEventListener("click",India_work)

    async function India_work(){
      try{
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`)
        let {articles} = await res.json()
        // console.log(data)
        display_country(articles)
      }
      catch(err){
   console.log(err)
      }
      // console.log('yes')
    }

    async function USA(){
      try{
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=us`)
        let {articles} = await res.json()
        // console.log(data)
        display_country(articles)
      }
      catch(err){
   console.log(err)
      }
      // console.log('yes')
    }
   
    async function China(){
      try{
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=ch`)
        let {articles} = await res.json()
        // console.log(data)
        display_country(articles)
        
      }
      catch(err){
   console.log(err)
      }
      // console.log('yes')
    }
   
    async function Uk(){
      try{
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=uk`)
        let {articles} = await res.json()
        // console.log(data)
        display_country(articles)
      }
      catch(err){
   console.log(err)
      }
      // console.log('yes')
    }
    
    async function NZ(){
      try{
        let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=nz`)
        let {articles} = await res.json()
        // console.log(data)
        display_country(articles)
      }
      catch(err){
   console.log(err)
      }
      // console.log('yes')
    }

    function display_country(data){
    news_container.innerHTML = ""
    data.forEach((el)=> {
       let div = document.createElement("div")
       div.setAttribute("class","news")
       let img = document.createElement("img")
        img.src = el.urlToImage 
       let title =  document.createElement("p")
       title.innerText = el.title 
       let author = document.createElement("p")
       author.innerText = el.author

        div.append(img,title,author)
        news_container.append(div)
        div.addEventListener("click",()=>{
            window.location.href="news.html"
        })
    });
  }



    