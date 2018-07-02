var West = document.querySelector("#West");
var East = document.querySelector("#East");
var North = document.querySelector("#North");
var South = document.querySelector("#South");

const northfunc = () =>{
	console.log("North");
	window.game("North");
}
North.addEventListener("click",northfunc)
const southfunc = () =>{
	console.log("South");
	window.game("South");
}
South.addEventListener("click",southfunc)
const westfunc = () =>{
	console.log("West");
	window.game("West");
}
West.addEventListener("click",westfunc)
const eastfunc = () =>{
	console.log("East");
	window.game("East");
}
East.addEventListener("click",eastfunc)

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
