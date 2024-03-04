// a code to show the scores of students

// let score = 105



// if (score>= 70) { 
//     console.log("your grade is A")
    
// } else if (score <70 && score >=60){
//     console.log("your grade is B")
    
// }else if(score <60 && score >=50){
//     console.log("your grade is C")
// }else if(score <50 && score >= 45){
//     console.log("your grade is D")
// }else if(score <45 && score >= 40){
//     console.log("score is E")
// }else if(score <40){
//     console.log("your garde is F olodo")
// }else("no score")

//function that will accept a parameter and convert to uppercase
// function forthename(name){
//     console.log(name.toUpperCase())
// }
// forthename("mike")

//function that will convert a value to celsius

// function toCelsius(temperature){
//     const formulacelsius= (temperature - 32)*5/9
//     console.log(" the conversion is " + formulacelsius + "C")
// }
// toCelsius(100)


// function to great someone using time and the persons name 
function greetme(getTime){
    var name = " michael"
    var getDay = new Date();
    var getTime = getDay.getHours();

    if (getTime <12){
        console.log("morning" + name)
    }else if (getTime >12 && getTime <16){
        console.log("good afternoon" + name)
    }else {console.log("good evening" + name)}
}
greetme()