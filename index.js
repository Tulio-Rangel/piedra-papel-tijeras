const piedra = 0;
const papel = 1;
const tijera = 2;
const si = 0;
const no = 1;

const opciones = ["Piedra", "Papel", "Tijera"];

let opcionUsuario1;
let opcionUsuario2;
let juegoNuevo = 1

let usuario1 = prompt("Ingrese nombre del Usuario 1");
let usuario2 = prompt("Ingrese nombre del Usuario 2");



while (juegoNuevo == 1) {
    opcionUsuario1 = prompt(`¿Qué eliges ${usuario1}?\nPiedra: 0\nPapel: 1\nTijera: 2`, 0);
    opcionUsuario2 = prompt(`¿Qué eliges ${usuario2}?\nPiedra: 0\nPapel: 1\nTijera: 2`, 0);

    alert(`${usuario1} eligió ` + opciones[opcionUsuario1]);
    alert(`${usuario2} eligió ` + opciones[opcionUsuario2]);
    if (opcionUsuario1 == piedra) {
        if (opcionUsuario2 == piedra) {
            alert("Empate!");
        }
        else if (opcionUsuario2 == papel) {
            alert(`Gana ${usuario2}`);
        }
        else if (opcionUsuario2 == tijera) {
            alert(`Gana ${usuario1}`);
        }
    }
    else if (opcionUsuario1 == papel) {
        if (opcionUsuario2 == piedra) {
            alert(`Gana ${usuario1}`);
        }
        else if (opcionUsuario2 == papel) {
            alert("Empate!");
        }
        else if (opcionUsuario2 == tijera) {
            alert(`Gana ${usuario2}`);
        }
    }
    else if (opcionUsuario1 == tijera) {
        if (opcionUsuario2 == piedra) {
            alert(`Gana ${usuario2}`);
        }
        else if (opcionUsuario2 == papel) {
            alert(`Gana ${usuario1}`);
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


