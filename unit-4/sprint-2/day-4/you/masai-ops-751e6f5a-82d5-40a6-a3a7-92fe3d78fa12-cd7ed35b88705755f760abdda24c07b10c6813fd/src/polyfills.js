function MyArray(){
  
}

MyArray.prototype.push = function(value){
    let index = this.length
    this[index] = value
}

MyArray.prototype.pop = function(){
    let index = this.length - 1
    this.splice(index, 1)
}

MyArray.prototype.map = function(){
    for(index in this){
        if(this.hasOwnProperty(index)){
            cb(this[index] ,index , this)
        }
    }
}

MyArray.prototype.filter = function(){
  
}

MyArray.prototype.reduce = function(){
  
}

