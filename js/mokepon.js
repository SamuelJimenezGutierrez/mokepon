function iniciarJuego() {
  let botonMascotaJugador;
  botonMascotaJugador = document.getElementById("botónMascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  if (document.getElementById("ratigueya").checked == true) {
    variaciónMascotaJugadorHTML("Ratigueya");
  } else if (document.getElementById("hipodoge").checked == true) {
    variaciónMascotaJugadorHTML("Hipodoge");
  } else if (document.getElementById("capipepo").checked == true) {
    variaciónMascotaJugadorHTML("Capipepo");
  } else {
    alert("Por favor, selecciona una mascota.");
  }
}

function variaciónMascotaJugadorHTML(nombreMascotaSeleccionadaTexto) {
  let spanMascotaJugador = "";
  spanMascotaJugador = document.getElementById("nombreMascotaJugador");
  spanMascotaJugador.innerHTML = nombreMascotaSeleccionadaTexto;
}

window.addEventListener("load", iniciarJuego);
