

let boots = {
    model: "Black Panther",
    brand: "Boots",
    description: "2020 style makes feet look thinner",
    myOrder(){
        return ` You order The New ${this.model} from ${this.brand}.com`

    }
    

}


console.log(boots.model)

console.log(boots.myOrder())