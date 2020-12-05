var numSquares = 6; //to keep the track of hard and easy mode
var colors = generateRandomColors(numSquares);
var pickedcolor = pickcolor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	messageDisplay.textContent = "";
	//generate only 3 new colors
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedcolor = pickcolor();
	h1.style.backgroundColor = "steelblue";
	colorDisplay.textContent = pickedcolor;
	for (var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
})
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	messageDisplay.textContent = "";
	//generate only 6 new colors
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedcolor = pickcolor();
	h1.style.backgroundColor = "steelblue";
	colorDisplay.textContent = pickedcolor;
	for (var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
	}
})

resetbtn.addEventListener("click",function(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedcolor = pickcolor();
	//change display color
	colorDisplay.textContent = pickedcolor;
	//change the color of the squares
	for(var i = 0; i< squares.length ; i++ )
	{
	//give colors to the squares
	squares[i].style.backgroundColor = colors[i];
	}
	messageDisplay.textContent = "";
	this.textContent = "new colours"
	h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedcolor;

for(var i = 0; i< squares.length ; i++ )
{
	//give colors to the squares
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function()
	{
		//grab the color of the clicked square
		var clickedColor = this.style.backgroundColor;
		//compare it to picked color
		if (pickedcolor === clickedColor)
		{
			
			messageDisplay.textContent = "Correct!!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetbtn.textContent = "Play Again?"

		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!!";
		}
		
	});
}
function changeColor(color){
	//loop through the squares
	for(var i = 0; i< squares.length ; i++){
		//change each color to the correct one
		squares[i].style.backgroundColor = color;
	}
}
function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	//repeat num times
	for (var i =0; i< num ; i++ ) {
		//get random color and push into the arr
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+ r + ", "+ g + ", "+ b + ")";
}