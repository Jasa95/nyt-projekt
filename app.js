//document.body.innerHTML += "Hello JavaScript!";
// alert("Hello Dat.js");
//console.log("Hello Dat.js")
//console.log("Hi Student!")
//console.log("This is my first Javascript!")

// Du kan se hvordan du styler hjemmesiden på mdn web docs

function sayHallo(){
document.querySelector("h3").textContent = "Hej " + document.querySelector("input").value;
}
document.querySelector("button").addEventListener("click", sayHallo);