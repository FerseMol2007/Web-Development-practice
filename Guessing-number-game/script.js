
var guessnumber=document.getElementById("guessnumber")
var result=document.getElementById("result")
var score=document.getElementById("score")
var randomNumber=Math.floor(Math.random()*10)+1
var totalscore=10

function check()
{
    var enteredNumber= guessnumber.value
    if(randomNumber==enteredNumber)
    {
        console.log("Right")
        result.textContent="Right"
        alert("YOU WON.....")
    }
    else
    {
        totalscore=totalscore-1
        score.textContent="score:"+totalscore
        result.textContent="Wrong"
    }
}