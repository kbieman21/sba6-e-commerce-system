
//Base class
export default class Product {
    id:number;
   // title:string;
   // desciption:string;
    price:number;
    discountPercentage:number;
    category:string;

    

    constructor(id:number, price:number, discountPercentage:number, category:string){
        this.id = id;
        //this.title = title;
        this.price = price;
        this.discountPercentage= discountPercentage;
         this.category = category;
    }
    

     displayDetails() {
        return `${this.id}, ${this.discountPercentage}, ${this.category}, ${this.price}`
     }

      getPriceWithDiscount() {
       // return this.price - (this.price * (this.discountPercentage/100));
       return this.price * (this.discountPercentage/100);
         
     }

    }

   
    

    
    
   
