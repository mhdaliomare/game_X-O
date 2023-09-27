let gridItems = document.getElementsByClassName("square")
let  currentTurn = "X"
let gameIsFninished = false
let bordArray = [

"0","1","2"
,"3","4","5"
,"6","7","8",

]




for (const item of gridItems) {

item.addEventListener("click",function()
{
if(gameIsFninished)
{
    return
}

let value = item.getAttribute("value");

let index = value - 1
if(bordArray[index]== "X" || bordArray[index]== "O" ) 
{
    return
}

//filling the value visually
let squareContent = document.querySelector(`.square[value="${value}"]`)

squareContent.innerHTML = currentTurn



//flling the value locgically
bordArray[index] = currentTurn


evaluateBoard()

console.log(bordArray)

if(currentTurn == "X")
{
    currentTurn = "O"
}
else{
    currentTurn = "X"
}

document.getElementById("instruction").textContent = ` ${currentTurn} turn `

})

function evaluateBoard()
{

    if( //row

        (bordArray[0] == bordArray[1] && bordArray[1] == bordArray[2]) ||
        (bordArray[3] == bordArray[4] && bordArray[4] == bordArray[5]) ||
        (bordArray[6] == bordArray[7] && bordArray[7] == bordArray[8]) || 

        //columns
        (bordArray[0] == bordArray[3] && bordArray[3] == bordArray[6]) ||
        (bordArray[1] == bordArray[4] && bordArray[4] == bordArray[7]) ||
        (bordArray[2] == bordArray[5] && bordArray[5] == bordArray[8]) ||

        //diagonal
        (bordArray[0] == bordArray[4] && bordArray[4] == bordArray[8]) ||
        (bordArray[2] == bordArray[4] && bordArray[4] == bordArray[6]) 

    ){
        var winner = currentTurn == "O" ? "O" : "X"
        gameIsFninished = true
        alert(`${winner} wonnn!`)
    }


    var isDraw = true
    for(square of bordArray){
        if(square !="X" && square !="O") 
            {
                isDraw = false
            }
}
    if(isDraw) 
    {
        gameIsFninished = true
        alert("draw")
    }


}
}

document.getElementById("reset-btn").addEventListener("click", function(){
    reset()
})
function reset(){
    for(item of gridItems)
    {
        let value = item.getAttribute("value")
        let squareContent = document.querySelector(`.square[value="${value}"]`)
        squareContent.innerHTML = ""

        bordArray = [

            "0","1","2"
            ,"3","4","5"
            ,"6","7","8",
            
            ]
    }

gameIsFninished = false
currentTurn = "X"
document.getElementById("instruction").innerText = ` ${currentTurn} turn `


}