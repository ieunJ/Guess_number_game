
let computerNum = 0
let userInput = document.getElementById("user-input")
let userButton = document.getElementById("user-button")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 5
let chanceArea = document.getElementById("chance-area")
let mainImage = document.querySelector(".main-image")
let gameOver = false
let history = []


userButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){userInput.value=""})

function matchnumber(){

    computerNum = Math.floor(Math.random()*100)+1;
    console.log("answer",computerNum);

}

matchnumber()


function play(){
    let userValue = userInput.value;

    if (userValue <0 || userValue >100){
        resultArea.textContent="Please input a proper number"
        return;
    }

    if (history.includes(userValue)){
        resultArea.textContent="It is a duplicate number"
        return;
    }

    chances --;
    chanceArea.textContent = `chance left ${chances}`


    if(userValue > computerNum){
        mainImage.src="https://media.tenor.com/BBBe27F56gEAAAAj/josemi-josemi-online.gif"
        resultArea.textContent="Down!!"
    }else if(userValue < computerNum){
        mainImage.src="https://media.tenor.com/CRteOXqUzVMAAAAj/mokkapresti-monica-presti.gif";
        resultArea.textContent="Up!!"
    } else{
        mainImage.src="https://media.tenor.com/4YSnBEMOONUAAAAj/clap.gif"
        resultArea.textContent="Congratulation!!"
        userButton.disabled = true

}   
    history.push(userValue)
    console.log(history)

    if(chances<1) {
        userButton.disabled = true
        chanceArea.textContent="loose,,,"
        resultArea.textContent="You wanna one more try?"
    }
}

function reset(){
    userInput.value = ""
    matchnumber()
    resultArea.textContent="Let's try"
    chanceArea.textContent = "chance left : 5"
    gameOver=false;
    userButton.disabled=false;
    chances=5;
    chanceArea.textContent = `chance left ${chances}`
    history = []
    mainImage.src="https://media.tenor.com/fB2Ajk7ICXEAAAAj/storymaker-story-time.gif"
}


