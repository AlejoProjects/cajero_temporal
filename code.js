let logButton = document.getElementById('log_in_button');
let users = [{ name: "joe", userName: "pal", password: "123" }, { name: "pat", userName: "ghanima", password: "321" }, { name: "aldro", userName: "a", password: "1" }];
class cliente {
    /**La clase cliente tiene las variables de nombre, contraseña  y dinero.
     * Las funciones principales son las relacionadas a la manipulación del dinero.
     *name es de tipo string
     *password es de tipo string
     *money es de tipo double
    */
    constructor(name, user, password, money) {
        name = this.name;
        user = this.user;
        password = this.password;
        money = this.money;
    }
    get names() {
        return this.name;
    }
    get users() {
        return this.user;
    }
    get passwords() {
        return this.password;
    }
    get moneys() {
        return this.money;
    }
    set names(n) {
        this.name = n;
    }
    set users(u) {
        this.user = u;
    }
    set passwords(p) {
        this.password = p;
    }
    set moneys(m) {
        this.money = m;
    }


    addMoney(amount) {
        /**La función addMoney añade dinero al saldo total del cliente
         * si el valor ingresado supera al saldo maximo, el valor del dinero no es modificado.
         */
        let totalValue = amount + this.money;
        if (totalValue >= 990) {
            console.log('el monto excede el maximo');
        }
        else {
            this.money = amount;
        }
    }
    substractMoney(amount) {
        /**La función substractMoney retira dinero al saldo total del cliente
        * si el valor ingresado deja el saldo en negativo, el valor del dinero no es modificado.
        */
        let totalValue = amount - this.money;
        if (totalValue < 0) {
            console.log('el monto supera el saldo');
        }
        else {
            this.money = amount;
        }
    }
}
let client = new cliente("", "", 500000);

function removeUserLog() {
    userWindow = document.getElementById('user_log');
    userWindow.remove();
}
function testClient(use, pass) {
    let validate = false;
    let respuesta = [validate, "", "", ""];
    for (i in users) {
        if (use == users[i].userName && pass == users[i].password) {
            validate = true;
            respuesta = [validate, users[i].name, users[i].userName, users[i].password];
            break;
        }
    }
    return respuesta;
}

function defineClient() {
    /**Crea un cliente al  */
    let mainMenu = document.getElementById('main_menu');
    let mainMenuText = document.getElementById('main_menu_text');
    let bool = false;
    let username = document.getElementById('username_input').value;
    let password = document.getElementById('password_input').value;
    username = username.toString();
    password = password.toString();
    test = testClient(username, password);
    bool = test[0];
    if (bool) {
        client.names = test[1];
        client.users = test[2];
        client.passwords = test[3];
        client.moneys = 500000;
        removeUserLog();
        mainMenu.style.display = 'block';
        mainMenuText.innerHTML = 'Hola ' + client.names + ' bienvenido al portal principal';
    }
    else {
        alert('datos incorrectos, intentelo de nuevo porfavor');
    }

}
function hideButtons() {
    let buttonMenu = document.getElementById("main_menu");
    buttonMenu.style.display = "none";
}
function addSaldoWindow(valueCase) {
    /* La función addSaldoWindow crea una ventana donde dependiendo del boton pulsado se 
     insertaran los elementos necesarios para:
     ->añadir saldo
     ->Retirar saldo
     ->consultar saldo
     */ 
    /*se definen los elementos principales de la ventana*/ 
    const ventanaPrincipal = document.createElement("div");
    const textoPrueba = document.createElement("p");
    const textoSaldo = document.createElement("p");
    const textoBoton = document.createElement("span");
    const valorIngresado = document.createElement("input");
     /**Boton transacción se refiere al boton que tomara la información del input donde se retirara o se añadira el saldo */
    const botonTransaccion = document.createElement("button");
    /** Se refiere al texto que contiene los elementos*/
    const node = document.createTextNode("Su saldo actual es de");
    const node2 = document.createTextNode(client.moneys);
    const node3 = document.createTextNode("submit");
    /*añade los textos a los parrafos y botones */ 
    textoPrueba.appendChild(node);
    textoSaldo.appendChild(node2);
    botonTransaccion.appendChild(node3);
    ventanaPrincipal.className = "window";
    valorIngresado.className = "inputValue";
    /**IMPORTANTE Añadir id y utilizarlo en una función */
    botonTransaccion.className = "boton_transaccion";
    /**Finalmente añade los elementos */
    body = document.getElementById('main_window');
    body.appendChild(ventanaPrincipal);
    /**Si el valor es igual a uno se añade el input al html */
    if(valueCase == 1){
        ventanaPrincipal.appendChild(valorIngresado);
        ventanaPrincipal.appendChild(botonTransaccion);
    }
    ventanaPrincipal.appendChild(textoPrueba);
    ventanaPrincipal.appendChild(textoSaldo);
    /*esconde la ventana de los botones*/
    hideButtons();
}
/**Lo que sigue es asignar una id a los elementos añadidos y crear dos funciones que utilicen las funciones addMoney(value) y substractMoney(value) de la clase client */
/** Añadir la colección de transacciones*/
/**Si queda tiempo utilizar bien el json*/