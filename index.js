// Mouseover & Mouseout
const element = document.getElementById("Btn");
element.addEventListener("mouseover", eventFunctionExtra);
element.addEventListener("mouseout", eventFunctionExtra2);

function eventFunctionExtra() {
  document.getElementById("demo").innerHTML +=
    "<h2>Hai passato il mouse sul pulsante Capovolgi, ti ho visto e per dispetto ti ruoto tutto il testo!</h2>";
  document.getElementById("demo").classList.add("rotate");
}
function eventFunctionExtra2() {
  document.getElementById("demo").innerHTML += "<h2>E adesso sei andato altrove! Metto tutto il testo a posto.</h2>";
  document.getElementById("demo").classList.remove("rotate");
}

// Click
document.getElementById("test").addEventListener("click", eventFunction1);
function eventFunction1() {
  document.getElementById("test").classList.add("rotate");
}
function eventFunction2() {
  document.getElementById("test").classList.remove("rotate");
}
