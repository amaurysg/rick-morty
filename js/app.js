import API from "./api";
import Character from "./character.js";

const apiPrincipal = new API();

let contador = 1;
const $botonNext = document.querySelector("#load-next");
$botonNext.addEventListener("click", async () => {
  const nuevoCharacter = await api.getCharacter(++contador);
  new Character(nuevoCharacter);
});
