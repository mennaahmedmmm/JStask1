// let score=window.prompt("What is your score");
// if(score < 100 && score >= 85){
//     document.write("You got a A 🎉.");
//     console.log("You got a A 🎉.");
// }
// else if(score < 85 && score >= 75){
//     document.write("You got a B 🎉.");
//     console.log("You got a B 🎉.");
// }
// else if(score < 75 && score >= 65){
//     document.write("You got a C 📃.");
//     console.log("You got a C 📃.");
// }
// else if (score < 65 && score >=50){
//     document.write("You got a D 👌."); 
//     console.log("You got a D 👌.");
// }
// else if (score < 50 && score >=0){
//     document.write("You got a F 😟.");
//     console.log("You got a F 😟.");
// }
// else if (score > 100 || score < 0){
//     document.write("Invalid score ❌.");
//     console.log("Invalid score ❌.");
// }
// else if ( isNaN(score)){
//     document.write("Not a Number ❌.");
//     console.log("Not a Number ❌.");
// }
// else if (score == 100){
//     document.write("Perfect score 🏆.");
//     console.log("Perfect score 🏆.");
// }

let score=window.prompt("What is your score");
switch (true){
    case score < 100 && score >= 85:
        document.write("You got a A 🎉.");
        console.log("You got a A 🎉.");
        break; 

    case score < 85 && score >= 75:
        document.write("You got a B 🎉.");
        console.log("You got a B 🎉.");
        break;

    case score < 75 && score >= 65:
        document.write("You got a C 📃.");
        console.log("You got a C 📃.");
        break;

    case score < 65 && score >=50:
        document.write("You got a D 👌."); 
         console.log("You got a D 👌.");
         break; 
    
    case score < 50 && score >=0:
        document.write("You got a F 😟.");
        console.log("You got a F 😟.");
        break;

    case score > 100 || score < 0 :
        document.write("Invalid score ❌.");
        console.log("Invalid score ❌.");
        break;

    case score == 100 :
        document.write("Perfect score 🏆.");
        console.log("Perfect score 🏆.");
        break; 

    default:
        document.write("Not a Number ❌.");
        console.log("Not a Number ❌.");
}


