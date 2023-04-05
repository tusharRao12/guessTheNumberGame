//  Write a Javascript program to generate a random number and stroe it in a variable. The program then take input from the user to tell them weather guess was correct,greater or lowr than the original number.
// 100-(no of guesses) is the total score of the user

let number = Math.random()*100
number = Number.parseInt(number)

let userInput;
let chances = 0;

while(userInput!=number){
    userInput = Number.parseInt((prompt("Enter the Number")))
    chances++;
    if(userInput<number){
        console.log(`You should try a number greater than ${userInput}`)
    }
    else if(userInput>number){
        console.log(`You should try a number smaller than ${userInput}`)
    }
    else{
        console.log(`You have guess the right number in ${chances} chances and your scrore is ${100-chances}`)

    }    
}


