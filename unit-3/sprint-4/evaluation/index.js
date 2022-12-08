/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/


function myfunc(){
    let image = document.getElementById("image").value 
    let name = document.getElementById("name").value 
    let email = document.getElementById("email").value 
    let country = document.getElementById("country").value 

    let obj={
      image,
      name,
      email,
      country,
    }
    // console.log(obj)

    localStorage.setItem("user",JSON.stringify(obj))

 }

