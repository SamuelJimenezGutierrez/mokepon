function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("botónMascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  if (document.getElementById("ratigueya").checked == true) {
    alert("Seleccionaste a ratigueya.");
  } else if (document.getElementById("hipodoge").checked == true) {
    alert("Seleccionaste a hipodogue.");
  } else if (document.getElementById("capipepo").checked == true) {
    alert("Seleccionaste a capipepo.");
  } else {
    alert("Por favor, selecciona una mascota.");
  }
}

window.addEventListener("load", iniciarJuego);
