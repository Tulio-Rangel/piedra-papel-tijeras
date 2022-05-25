const piedra = 0;
const papel = 1;
const tijera = 2;
const si = 0;
const no = 1;

const opciones = ["Piedra", "Papel", "Tijera"];

let opcionUsuario1;
let opcionUsuario2;
let juegoNuevo = 1



while (juegoNuevo == 1) {
    opcionUsuario1 = prompt("¿Qué eliges Usuario 1?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
    opcionUsuario2 = prompt("¿Qué eliges Usuario 2?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

    alert("Usuario 1 eligió " + opciones[opcionUsuario1]);
    alert("Usuario 2 eligió " + opciones[opcionUsuario2]);
    if (opcionUsuario1 == piedra) {
        if (opcionUsuario2 == piedra) {
            alert("Empate!");
        }
        else if (opcionUsuario2 == papel) {
            alert("Gana Usuario 2");
        }
        else if (opcionUsuario2 == tijera) {
            alert("Ganaste Usuario 1");
        }
    }
    else if (opcionUsuario1 == papel) {
        if (opcionUsuario2 == piedra) {
            alert("Ganaste Usuario 1");
        }
        else if (opcionUsuario2 == papel) {
            alert("Empate!");
        }
        else if (opcionUsuario2 == tijera) {
            alert("Gana Usuario 2");
        }
    }
    else if (opcionUsuario1 == tijera) {
        if (opcionUsuario2 == piedra) {
            alert("Gana Usuario 2");
        }
        else if (opcionUsuario2 == papel) {
            alert("Ganaste Usuario 1");
        }
        else if (opcionUsuario2 == tijera) {
            alert("Empate!");
        }
    }
    else {
        alert("¿Pos qué carajo?");
    }
    reiniciar = prompt("¿Jugar de nuevo?\nSí: 0\nNo: 1", 0);
    if (reiniciar == si) {
        juegoNuevo = 1;
    } else if (reiniciar == no) {
        juegoNuevo = 0;
    }
}


