

//up https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHNsNjRpYjBpamJnem1lODh5YTJxb3JoOG5mdmxzeGc1N3pkYnZnaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8Z8Zzm68kKrMUAQyOl/giphy.webp
//down https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTc3cWJybjVtZDF2dGd6aHd0a3VraXlsOWlzYmN6eW44eWZrYWl3MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8YQnUVz4nGtVSPYBD0/giphy.webp
//good https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHBubGE1ZHl2YTc0azZvbHB0NnFzeHhpcWZzZ2NzcWo2ajNlaWV2aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fAnEC88LccN7a/giphy.webp
//bad https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExazQzeHk3Z2E1YWJxNXd4aDV2ZzJvNTc1emdsazJ1cDc1aXF6eHQxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9G1vsHhjaCyEDwddc3/giphy.webp



let computerNum=0;
let userInput=document.getElementById("user-input")
let playButton=document.getElementById("play-button")
let resultArea=document.getElementById("result_area")
let resetButton=document.getElementById("reset-button")
let resultImage=document.getElementById("result-image")

let chances=5
let chanceArea=document.getElementById("chance_area")
let valueHistory=[]


let gameOver=false;


playButton.addEventListener("click",playGame)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function() {userInput.value=""})



function pickNumber(){
    computerNum= Math.floor(Math.random()*100)+1
    console.log("정답",computerNum)
}





function playGame(){

let userValue = userInput.value

if (userValue<0 || userValue>100){
    resultArea.textContent="Outside of the range"
    return;
}

if (valueHistory.includes(userValue)){
    resultArea.textContent="Duplicated number"
    return;
}


chances --
chanceArea.textContent=`chances left : ${chances}`

valueHistory.push(userValue)


if (userValue<computerNum){
    resultArea.textContent="Up!!!!"
    resultImage.src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHNsNjRpYjBpamJnem1lODh5YTJxb3JoOG5mdmxzeGc1N3pkYnZnaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8Z8Zzm68kKrMUAQyOl/giphy.webp"
} else if (userValue>computerNum){
    resultArea.textContent="Down!!!"
    resultImage.src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTc3cWJybjVtZDF2dGd6aHd0a3VraXlsOWlzYmN6eW44eWZrYWl3MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8YQnUVz4nGtVSPYBD0/giphy.webp"
} else {
    resultArea.textContent="Congratulation!!!"
    resultImage.src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHBubGE1ZHl2YTc0azZvbHB0NnFzeHhpcWZzZ2NzcWo2ajNlaWV2aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fAnEC88LccN7a/giphy.webp"
    gameOver=true;
}


if (chances==0){
    gameOver=true;
    resultImage.src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExazQzeHk3Z2E1YWJxNXd4aDV2ZzJvNTc1emdsazJ1cDc1aXF6eHQxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9G1vsHhjaCyEDwddc3/giphy.webp"
    resultArea.textContent="Do you wanna try again?";

    
}

if (gameOver==true){
        playButton.disabled=true;
        playButton.style.background='#dfe1e5'
}

}

function reset(){


    pickNumber()

    userInput.value="";
    chances=5;
    resultArea.textContent="Let's Try";
    chanceArea.textContent="chances left : 5"
    gameOver=false;
    playButton.disabled=false;
    playButton.style.background='#3867d6'
    valueHistory=[];
    resultImage.src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjJrNnJrczNwZGYxZmp5c2s4NHJvc3M2ZWFxbWRhMzIxNHVuajdnOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AGk0lxogARkwyE3hHr/giphy.webp"

}

pickNumber()