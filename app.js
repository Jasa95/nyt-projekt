//document.body.innerHTML += "Hello JavaScript!";
// alert("Hello Dat.js");
//console.log("Hello Dat.js")
//console.log("Hi Student!")
//console.log("This is my first Javascript!")

// Du kan se hvordan du styler hjemmesiden på mdn web docs.

function sayHallo(){
document.querySelector("h3").textContent = "Hej " + 
document.querySelector("#navn").value;
}
function sayAge(){
if (document.querySelector("#alder").value <30)
    document.querySelector("h4").textContent =
     document.querySelector("#alder").value+ ", hold da op du ung ";
else document.querySelector("h4").textContent = 
document.querySelector("#alder").value + ", okay! Næsten halvvejs gennem livet hva?";
}
function sayEmail(){
    document.querySelector("#email").textContent = "Tak for det";
}


document.querySelector("#okNavn").addEventListener("click", sayHallo);
document.querySelector("#okAlder").addEventListener("click", sayAge);
document.querySelector("okMail").addEventListener("click", sayEmail);