//mudando as cores de um elemento com JS
var el = document.getElementById('style');

//mudando os elementos diretamente
/* el.style.background = "blue";
el.style.color = "white";
el.style.width = "200px";
el.style.textAlign = "center";
el.style.borderRadius ="15px"; */

//mudando de uma vez só
el.style.cssText = "background: green; color: white; width: 200px";
el.style.cssText += "height:200px; text-align:center; font-style:arial";

//ver as configurações do css de um elemento
console.log( getComputedStyle(el));