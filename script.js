

let boots = {


    model: "Black Panther",
    brand: "Boots",
    img: "./images/boots2.jpg",
    description: "2020 style makes feet look thinner",
    myOrder() {
        return ` You order The New ${this.model} from ${this.brand}.com`

    }

}



let boots2 = {
  model: "White Panther",
    brand: "Boots",
    img: "./images/boots2.jpg",
    description: "2021 softer than feathers",
    myOrder() {
        return ` You order The New ${this.model} from ${this.brand}.com`

    }

}


let boots3 = {
    model: " Lug Bug",
      brand: "Boots",
      img: "./images/boots2.jpg",
      description: "Good to walk on winter snow",
      myOrder() {
          return ` You order The New ${this.model} from ${this.brand}.com`
  
      }
  
  }
  
// boot #1
$(".product-image").attr("src", boots.img)
$(".product-text").text(boots.description)  

//boot #2
$(".product-image").attr("src" , boots2.img)
$(".product-text").text(boots2.description)


//boot #3
$(".product-image").attr("src", boots3.img)
$("product-text").text(boots3.description)


// Constructor 

function Boots(){

    console.log(" Boot Initialized bruh")

}

// instatiate an object
 boots = new Boots();
 boots2 = new Boots();
 boot3 =  new Boots();


console.log(boots.model)

console.log(boots2)

console.log(boots3)
