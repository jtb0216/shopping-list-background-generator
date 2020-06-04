var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementById("list");
var getli = document.getElementsByTagName("li");

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
var gotbut = document.getElementsByClassName("mybutton");

var newbutton = document.createElement("button");
newbutton.innerHTML = "Click";


//Adds a delete button to existing list items
function listName (){
	for (var i =0; i<listLength(); i++){
		var newbutton = document.createElement("button");
		newbutton.innerHTML = "Delete";
		newbutton.className = "mybutton";
		
		getli[i].appendChild(newbutton);
	}
}



function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	var getli = document.getElementsByTagName("li");

	//Create the button with the list element
	var newbutton = document.createElement("button");
	newbutton.innerHTML = "Delete";
	newbutton.className = "mybutton";

	getli[listLength()-1].appendChild(newbutton);
	input.value = "";

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		listLength();
		listEl();
		deleteListitem();
		
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		listLength();
		listEl();
		deleteListitem();
		
		
	}
}


//Adds a toggle to the list items 
function listEl(){
	var count = listLength();
for (var i = 0; i < count; i++){
	getli[i].addEventListener("click", containsDone);
} }

//My toggle feature
function containsDone(){
		if (this.classList.contains("done")){
		this.classList.remove("done");} else {
			this.classList.add("done");
		} 
}

//Finding the length of the list
function listLength(){
	var getit = document.getElementsByTagName("li");
	return getit.length;
}

//Add event listener to delete button
function deleteListitem(){
	for (var i = 0; i < listLength(); i++){
	gotbut[i].addEventListener("click", remove);

}}
function remove(){
this.parentNode.remove();
}

listName();
listEl();
deleteListitem();

	


