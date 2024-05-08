/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document
    .getElementById("generadorAleatorio")
    .addEventListener("click", () => {
      document.getElementById("generador").innerHTML = generadorAleatorio();
    });
};
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function generadorAleatorio() {
  let resultados = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < noun.length; j++) {
      for (let k = 0; k < adj.length; k++) {
        const dominio = pronoun[i] + adj[j] + noun[k] + ".com";
        resultados.push(dominio);
        console.log(dominio);
      }
    }
  }
  return resultados.join("<br>");
}
