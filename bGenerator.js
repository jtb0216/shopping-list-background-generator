var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var outline = document.getElementById("top");
var hide = document.getElementById("backgroundButton");
function setGradient()	{body.style.background = 
		"linear-gradient(to right, " + color1.value + ", " + color2.value +")";}

hide.addEventListener("click", afunction)

function afunction(){
	if (!outline.classList.contains("hide")){
		console.log("hello");
		outline.classList.add("hide")}
		else {outline.classList.remove("hide")}
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)