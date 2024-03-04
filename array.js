//  const name = ["mike", "pleasant","favour"]
//   console.log(name[0])
// for (let index = 0; index < array.length; index++) {
//      const element = array[index];
    
//  }
// let index = 1
// for (const name of array) {
//     console.log(index + " " + array)
    
    
// }


// const num = [2 ,4, 6, 8, 10]
// num.push(12) //add element in an aray
// num.unshift(0) //add an element in front
// num.pop() //removes the last element
// num[1]= 100 // the changes an element in a position

// console.log(num)


//while loop

// let num = 2
// while (num < 10) {
//     console.log(num * 2)
//     num++
// }

//atm
// let amount = 2000
// let username ="mike"
// let password = "123456"
// let count = 3


// let A = "$" + 4
// let B = "$" + 5
// let result = (A + B)
// console.log(result)

const total = Cart.reduce((tottal, item) => 
  {const quantity = item.productQuantity || 1; 
    return tottal + item.productPrice * quantity; },0);



    //git 
    //git init : to keep track of a new project
    //git add ; command to stage changes for your file
    // git status : to see the status of the files added
    // git add . ;  add all files 
    // git commit -m ""; used to create a snapshot of the changes that has been staged
    Mikilo_223
    // read how readme files work .create a readme file and explain every function from top to buttom and submit