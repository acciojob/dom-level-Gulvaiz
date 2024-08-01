//your JS code here. If required.

let element = document.querySelector("#level")
level = 0;
currentElement = element

while(currentElement){
	  level++
	 currentElement = currentElement.parentElement
}

alert(`The level of the element is: ${level}`)