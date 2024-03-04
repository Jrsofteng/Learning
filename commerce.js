// code to display different products on a website
function displayProducts(){
const product = [
    {productId:1,
    productName:"laptop",
    productPrice:"$120",
    quantity:15,
    },
    {    
     productId: 2,
     productName: "fridge",
     productPrice: "$850",
     quantity: 16,         
    },
    {
     productId: 3,
     productName: "mouse",
     productPrice: "$" + 5,
     quantity: 100,         
    },
    {
     productId: 4,
     productName: "books",
     productPrice: "$" + 2.5,
     quantity: 1000,         
    },
    {
     productId: 5,
     productName: "clothes",
     productPrice: "$" + 20 + "- $100",
     quantity: 250,         
    },
    {
     productId:6 ,
     productName: "pen",
     productPrice: "$" + 0.5,
     quantity:1500 ,           
    },
    {
     productId:7 ,
     productName: "airpod",
     productPrice: "$" +45 ,
     quantity: 104,           
    },
    {
     productId: 8,
     productName: "headphones",
     productPrice: "$" + 25,
     quantity:32 ,           
    },
    {
     productId:9 ,
     productName: "boom box",
     productPrice: "$" + 45,
     quantity:20 ,           
    },
    {
     productId: 10,
     productName: "charger",
     productPrice: "$" + 12,
     quantity: 50,           
    },
    {
     productId: 11,
     productName: "shoes",
     productPrice: "$" +50 ,
     quantity: 25,           
    },
    {
     productId: 12,
     productName: "bags",
     productPrice: "$" + 5,
     quantity: 34,           
    },
    {
     productId: 13,
     productName: "desktops",
     productPrice: "$" + 70,
     quantity: 78,           
    },
    {
     productId:14,
     productName: "flash drives",
     productPrice: "$" + 4.6,
     quantity: 56,           
    },
    {
     productId:15 ,
     productName: "router",
     productPrice: "$" +45 ,
     quantity: 15,           
    }

]
let num = 1
for (const products of product){
console.log(num + " our product " + products.productName +" with ID " +
 products.productId + " is sold at " + products.productPrice + " and we have "+ products.quantity + " in quantity")
 num ++
}
}
displayProducts()

