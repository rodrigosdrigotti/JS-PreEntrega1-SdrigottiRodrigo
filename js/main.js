
let nombreUsuario;
let nombreUsuarioLog;
let claveLog = 0;
let contador = 0;
let saldo = 50000;
let retiro = 0;
let deposito = 0;

function elegirOpcion() {
    let opcion = Number(prompt("Bienvenido al Sistema!!! \u270B \n \n"
        + "Opciones \u2705 \n \n" + "1. Consulta de Saldo \n"
        + "2. Retiro \n" + "3. Deposito \n"
        + "4. Salir \n"));
    switch (opcion) {
        case 1:
            //document.write("Tu saldo actual es: " + saldo);
            document.getElementById("resultado").innerHTML = "Tu Saldo es: "+saldo;
            break;
        case 2:
            retiro=Number(prompt("Cuanto vas a retirar"));
            if(retiro <= saldo && retiro != 0) {
                saldo -= retiro;
                 //document.write("Tu saldo actual es: " + saldo);
                document.getElementById("resultado").innerHTML = "Retiraste: "+retiro;
                document.getElementById("resultado2").innerHTML = "Tu Saldo actual es: "+saldo;
            } else {
                alert("Fondos insuficientes ó no es valido");
            }
            break;
        case 3:
            deposito = Number(prompt("¿Cuanto depositas?"));
            saldo += deposito;
            //document.write("Tu saldo actual es: " + saldo);
            document.getElementById("resultado").innerHTML = "Tu Saldo actual es: "+saldo;
            break;
        case 4:
            window.location.href = "pages/salir.html";
            break;
    }
}

function entrarAlCajero(nombreUsuario,clave) {
    while (nombreUsuario != nombreUsuarioLog) {
        nombreUsuarioLog = prompt("LOGIN: \n"
                            +"------------------------- \n"
                            +"Ingrese Nombre de Usuario \n");
        claveLog = Number(prompt("LOGIN: \n"
                                +"------------------------- \n"
                                +"Ingrese Clave \n"));
        contador+=1;
        if(contador == 3) {
            break;
        }
        if(contador == 2 && nombreUsuario != nombreUsuarioLog) {
            alert("Cuidado solo te resta una oportunidad");
        }
        if(contador == 1 && nombreUsuario != nombreUsuarioLog) {
            alert("Datos Incorrectos. Intente nuevamente");
        }
    } 
    if (nombreUsuario == nombreUsuarioLog) {
        document.getElementById("usuario").innerHTML = "BIENVENIDO: "+ nombreUsuario +".";
        //document.write("BIENVENIDO: "+ nombreUsuario +".");
    } else {
        alert("Tarjeta retenida, comunicate con el Banco");
    }
}

function validarClave(clave,verifClave) {
    if(clave && verifClave){
        if(clave === verifClave){
            entrarAlCajero(nombreUsuario,clave);
        } else{
            alert ("Claves no coinciden");
            setTimeout(() => {
                document.location.reload();
              }, 100);
        }
    } else {
        alert ("Complete la clave para continuar");
        setTimeout(() => {
            document.location.reload();
          }, 100);
    }   
}

function ingresarClave(nombreUsuario) {
    if(nombreUsuario) {
        let clave = Number(prompt("REGISTRO: \n"
                            +"------------------------- \n"
                            +"Ingrese una Clave \n"));
        let verifClave = Number(prompt("REGISTRO: \n"
                            +"------------------------- \n"
                            +"Repita la Clave \n"));
        validarClave(clave,verifClave);    
    } else {
        alert ("Complete el Nombre para continuar");
        setTimeout(() => {
            document.location.reload();
          }, 100);
    } 
}

function registroUsuarioCajero() {
    nombreUsuario = prompt("REGISTRO: \n"
                        +"------------------------- \n"
                        +"Ingrese Nombre de Usuario \n");
    ingresarClave(nombreUsuario);
}

registroUsuarioCajero();





