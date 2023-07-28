//your JS code here. If required.
function updateElementText() {
	return new Promise((resolve) =>{
		setTimeout(() =>{
			resolve("Hello, world!");
		},1000);
	});
}
const outputElement = document.getElementById("output");
updateElementText().then((text) =>{
	outputElement.textContent = text;
});