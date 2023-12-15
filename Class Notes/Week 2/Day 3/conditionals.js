/////////////////////////////////////Conditional statments///////////////

// Consitional statments are statmets or decision based on different conditions.
//By default js analyzes our code sequentialy so that there is flow in out page. 

/////if/////////////////////////////////////////////////////////////

//syntax
// if(condition){
//     //this is the part your truthy or falsy statment . 
// }

// let number=-1;
// if(number>0){
//     console.log(true)
// }

/////////////////if else ////////////////////////////////////////

// if(condition){
//     //this is the part your truthy or falsy statment . 
// } else{ 
//     //this is the part your truthy or falsy statment . 

// }

// let number=-1;
// if(number>0){
//     console.log(true)
// }else {
//     console.log(false)
// }


////////if esle if else /////////////////////////////////////////

// if(condition){
//     //code to returen first truthy 
// } else if(condition){
//     //code to returen a secound truthy value 
// }else {
//     // code to returen falsy value 
// }

//let weather = "stormy";



let season = prompt("What month equal this season?")
switch (season) {
    
    case "December":
    case "January":
    case "February":
        console.log("Winter");
         break;
    case "March" , "April" , "May":
        console.log("Spring");
        break;
    case "September" , "October" , "November":
        console.log("Autumn");
        break;
    case "June" , "July" , "August":
        console.log("Summer");
        break;
    default :
         console.log("Not a month");
        



        
}