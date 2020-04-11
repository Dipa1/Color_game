var numberOfSquares = 6;
var colors = [];
var pickedColor ;
var squares = document.querySelectorAll(".square");
var colorId = document.getElementById("colorid");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");
var modeBtn = document.querySelectorAll(".mode");
colorId.textContent = pickedColor;
initial();

function initial()
{
    setUpModeBtn();
    setUpSquare();
    resetf();

}
function resetf()
{
    colors = generateRandomColor(numberOfSquares);
     pickedColor = pickColorFunc();
     colorId.textContent = pickedColor;
     document.querySelector("h1").style.backgroundColor = "steelblue";
     resetButton.textContent = "New Colors";
     messageDisplay.textContent = "";
     for(var i = 0; i <squares.length; i++)
     {
         if(colors[i])
         {
            squares[i].style.display = "block";
             squares[i].style.backgroundColor = colors[i];
         }
         else squares[i].style.display = "none";
        squares[i].style.backgroundColor = colors[i];
     }
     document.querySelector("h1").style.backgroundColor = "steelblue";
}

function setUpModeBtn()
{
    for(var i=0; i < modeBtn.length; i++)
    {
        modeBtn[i].addEventListener("click",function(){
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");
        resetButton.textContent = "New Colors";
        messageDisplay.textContent = "";
        if(this.textContent === "Easy") numberOfSquares = 3;
        else numberOfSquares = 6;
        resetf();

        });
    }
}

function setUpSquare()
{
    for(var i = 0; i <squares.length; i++)
    {
    //add initial color to square
    squares[i].style.backgroundColor = colors[i];
    //add click listener to squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square and compare
        var clickedColor = this.style.backgroundColor; 
        if(pickedColor === clickedColor) 
        {
            messageDisplay.textContent = "Correct! ";
            resetButton.textContent = "Play Again?";
            
            changeColors(clickedColor);
            document.querySelector("h1").style.backgroundColor = clickedColor;
        }
        else
        {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
        });
    }

}
// easyBtn.addEventListener("click",function(){
//     numberOfSquares = 3;
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     colors = generateRandomColor(numberOfSquares);
//     resetButton.textContent = "New Colors";
//     messageDisplay.textContent = "";
//     pickedColor = pickColorFunc();
//     colorId.textContent = pickedColor;
//     for(var i = 0; i <squares.length; i++)
//     {
//         if(colors[i])
//           squares[i].style.backgroundColor = colors[i];
//         else
//        squares[i].style.display = "none";
//     }
// });
// hardBtn.addEventListener("click",function(){
//     numberOfSquares = 6;
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     resetButton.textContent = "New Colors";
//     messageDisplay.textContent = "";
//     colors = generateRandomColor(numberOfSquares);
//     pickedColor = pickColorFunc();
 
//     colorId.textContent = pickedColor;
//     for(var i = 0; i <squares.length; i++)
//     {
//         squares[i].style.display = "block";
//         squares[i].style.backgroundColor = colors[i];
//     }
// });

resetButton.addEventListener("click",function(){
    resetf();
    //  colors = generateRandomColor(numberOfSquares);
    //  pickedColor = pickColorFunc();
    //  colorId.textContent = pickedColor;
    //  resetButton.textContent = "New Colors";
    //  messageDisplay.textContent = "";
    //  for(var i = 0; i <squares.length; i++)
    //  {
    //     squares[i].style.backgroundColor = colors[i];
    //  }
    //  document.querySelector("h1").style.backgroundColor = "steelblue";
});


function changeColors(color){
    for(var i = 0; i <squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }

}

function pickColorFunc(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColor(num)
{
    var arr = [];
    for( var i = 0; i < num; i++)
    {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor()
{
      var r =  Math.floor(Math.random() * 256);
      var g =  Math.floor(Math.random() * 256);
      var b =  Math.floor(Math.random() * 256);
      return "rgb(" + r + ", " + g + ", " +  b + ")";
}









