const lampada = document.getElementById("lampada");
let ctrl = true;

function acender() {
  if (!ctrl) {
    return;
  }
  lampada.src = "./img/acesa.svg";
}
function apagar() {
  if (!ctrl) {
    return;
  }
  lampada.src = "./img/apagada.svg";
}

lampada.addEventListener("click", function () {
  lampada.src = "./img/quebrada.svg";
  ctrl = false;
});
