function Artist(name, skill, profession){
    this.name = name 
    this.skill = skill 
    this.profession = profession
}

var artistsObject = {
    Name:"Deb" ,
   Skill: "developer",
   Profession:"coder" ,

   
}

Artist.prototype.getProfession = function(){
    return this.profession
}
Object.prototype.print = function(){
    return  `I am ${this.name}`
}
// Do not change this
export {Artist, artistsObject};
