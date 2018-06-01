var West = document.querySelector("#West");
var East = document.querySelector("#East");
var North = document.querySelector("#North");
var South = document.querySelector("#South");

North.addEventListener("click",northfunc)
function northfunc(){
	console.log("North");
	window.game("North");
}
South.addEventListener("click",southfunc)
function southfunc(){
	console.log("South");
	window.game("South");
}
West.addEventListener("click",westfunc)
function westfunc(){
	console.log("West");
	window.game("West");
}
East.addEventListener("click",eastfunc)
function eastfunc(){
	console.log("East");
	window.game("East");
}

function game(direction){
	var WhtHappens;
	switch (direction){
		case "North":
			WhtHappens = "You Encounter A monster !! Game Over";
			alert(WhtHappens);
			break;
		case "South":
			WhtHappens = "You go mad and die !! Game Over";
			alert(WhtHappens);
			break;
		case "West":
			WhtHappens = "Yay !! You Reach Home";
			alert(WhtHappens);
			break;
		case "East":
			WhtHappens = "You sink in a river !! Game Over";
			alert(WhtHappens);
			break;
		default:
			WhtHappens = "Enter a valid Direction"
			alert(WhtHappens);
	}
	return WhtHappens;
	input.value="";
}
