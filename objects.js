//objects : collection of key pair values

// const Person = {
//     name: "mike",
//     age: 38,
//     address: "obiagu"
// }
// console.log(Person.name)


// code to display different products on a website
const prompt = require(`prompt-sync`)({sigint:true})

    const product = [
        {productId:1,
        productName:"laptop",
        productPrice:120,
        productQuantity:15,
        },
        {    
         productId: 2,
         productName: "fridge",
         productPrice: 850,
         productQuantity: 16,         
        },
        {
         productId: 3,
         productName: "mouse",
         productPrice:  5,
         productQuantity: 100,         
        },
        {
         productId: 4,
         productName: "books",
         productPrice:  2.5,
         productQuantity: 1000,         
        },
        {
         productId: 5,
         productName: "clothes",
         productPrice:  20 ,
         productQuantity: 250,         
        },
        {
         productId:6 ,
         productName: "pen",
         productPrice:  0.5,
         productQuantity: 258,                
               
        },
        {
         productId:7 ,
         productName: "airpod",
         productPrice: 45 ,
         productQuantity: 104      
        },
        {
         productId: 8,
         productName: "headphones",
         productPrice:  25,
         productQuantity:32 ,           
        },
        {
         productId:9 ,
         productName: "boom box",
         productPrice:  45,
         productQuantity:20 ,           
        },
        {
         productId: 10,
         productName: "charger",
         productPrice:  12,
         productQuantity: 50,           
        },
        {
         productId: 11,
         productName: "shoes",
         productPrice: 50 ,
         productQuantity: 25,           
        },
        {
         productId: 12,
         productName: "bags",
         productPrice:  5,
         productQuantity: 34,           
        },
        {
         productId: 13,
         productName: "desktops",
         productPrice:  70,
         productQuantity: 78,           
        },
        {
         productId:14,
         productName: "flash drives",
         productPrice:  4.6,
         productQuantity: 56,           
        },
        {
         productId:15 ,
         productName: "router",
         productPrice: 450 ,
         productQuantity: 15,           
        }
    
    ]
    const Cart = []

    function displayProduct(){
    for (const products of product){
    console.log( " our product " + products.productName +" with ID " +
     products.productId + " is sold at $ " + products.productPrice + " and we have "+ products.productQuantity + " in quantity")
     
    }
    }
   //  displayProduct()


//function to addtocart 
    function addToCart(itemID,quantity ){
        const selectedProduct = product.find((item) => item.productId === itemID)
        if (selectedProduct ){
            if (selectedProduct.productQuantity >= quantity){
                Cart.push({
                    productname: selectedProduct.productName,
                    productPrice: selectedProduct.productPrice,
                    quantity:quantity
                })
                console.log(selectedProduct.productName + " item added to cart")
            }else{
                console.log(" sorry the quantity you requested is not available")
            }
        }else{
            console.log(" the product Id does not exist")
        }

    }
    addToCart(7, 7)
    function displayCart(){
        for (const item of Cart){
            console.log("our product name is at  " + item.product + " and the price is " + item.productprice)
        }
    }
   // displayCart()