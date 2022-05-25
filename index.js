//Variables de apoyo
const piedra = 0;
const papel = 1;
const tijera = 2;
const si = 0;
const no = 1;
let opcionUsuario1;
let opcionUsuario2;
let juegoNuevo = 1
//Lista de opciones
const opciones = ["Piedra", "Papel", "Tijera"];
//Nombre de los jugadores
let usuario1 = prompt("Ingrese nombre del Usuario 1");
let usuario2 = prompt("Ingrese nombre del Usuario 2");

//Ciclo del juego
while (juegoNuevo == 1) {
    //Opciones de los usuarios
    opcionUsuario1 = prompt(`¿Qué eliges ${usuario1}?\nPiedra: 0\nPapel: 1\nTijera: 2`, 0);
    opcionUsuario2 = prompt(`¿Qué eliges ${usuario2}?\nPiedra: 0\nPapel: 1\nTijera: 2`, 0);
    //Mostrar opciones escogidas
    alert(`${usuario1} eligió ` + opciones[opcionUsuario1]);
    alert(`${usuario2} eligió ` + opciones[opcionUsuario2]);
    //Resultado del juego
    if (opcionUsuario1 == piedra) {
        if (opcionUsuario2 == piedra) {
            alert("Empate!");
        }
        else if (opcionUsuario2 == papel) {
            alert(`Papel envuelve Piedra, gana ${usuario2}`);
        }
        else if (opcionUsuario2 == tijera) {
            alert(`Piedra rompe Tijeras, gana ${usuario1}`);
        }
    }
    else if (opcionUsuario1 == papel) {
        if (opcionUsuario2 == piedra) {
            alert(`Papel envuelve Piedra, gana ${usuario1}`);
        }
        else if (opcionUsuario2 == papel) {
            alert("Empate!");
        }
        else if (opcionUsuario2 == tijera) {
            alert(`Tijera corta Papel, gana ${usuario2}`);
        }
    }
    else if (opcionUsuario1 == tijera) {
        if (opcionUsuario2 == piedra) {
            alert(`Piedra rompe Tijeras, gana ${usuario2}`);
        }
        else if (opcionUsuario2 == papel) {
            alert(`Tijera corta Papel, gana ${usuario1}`);
        }
        else if (opcionUsuario2 == tijera) {
            alert("Empate!");
        }
    }
    else {
        alert("¿Qué pasó?");
    }
    reiniciar = prompt("¿Jugar de nuevo?\nSí: 0\nNo: 1", 0);
    if (reiniciar == si) {
        juegoNuevo = 1;
    } else if (reiniciar == no) {
        juegoNuevo = 0;
    }
}


