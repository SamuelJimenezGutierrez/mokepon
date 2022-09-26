function iniciarJuego() {
  let botonMascotaJugador;
  botonMascotaJugador = document.getElementById("botónMascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  let mascotaSeleccionadaCheck;
  if (document.getElementById("ratigueya").checked == true) {
    variaciónMascotaJugadorHTML("Ratigueya");
    mascotaSeleccionadaCheck = 1;
  } else if (document.getElementById("hipodoge").checked == true) {
    variaciónMascotaJugadorHTML("Hipodoge");
    mascotaSeleccionadaCheck = 1;
  } else if (document.getElementById("capipepo").checked == true) {
    variaciónMascotaJugadorHTML("Capipepo");
    mascotaSeleccionadaCheck = 1;
  } else {
    mascotaSeleccionadaCheck = 0;
  }

  if (mascotaSeleccionadaCheck == 1) {
    seleccionarMascotaEnemigo();
  } else {
    alert("Por favor, selecciona una mascota.");
  }
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatoria;
  mascotaAleatoria = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (mascotaAleatoria == 1) {
    variaciónMascotaEnemigoHTML("Ratigueya");
  } else if (mascotaAleatoria == 2) {
    variaciónMascotaEnemigoHTML("Hipodogue");
  } else {
    variaciónMascotaEnemigoHTML("Capipepo");
  }
}

function variaciónMascotaJugadorHTML(nombreMascotaSeleccionadaTexto) {
  let spanMascotaJugador = "";
  spanMascotaJugador = document.getElementById("nombreMascotaJugador");
  spanMascotaJugador.innerHTML = nombreMascotaSeleccionadaTexto;
}

function variaciónMascotaEnemigoHTML(nombreMascotaSeleccionadaTexto) {
  let spanMascotaEnemigo = "";
  spanMascotaEnemigo = document.getElementById("nombreMascotaEnemigo");
  spanMascotaEnemigo.innerHTML = nombreMascotaSeleccionadaTexto;
}

window.addEventListener("load", iniciarJuego);
