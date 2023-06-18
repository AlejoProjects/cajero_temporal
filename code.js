let logButton = document.getElementById('log_in_button');
class cliente {
    /**La clase cliente tiene las variables de nombre, contraseña  y dinero.
     * Las funciones principales son las relacionadas a la manipulación del dinero.
     *name es de tipo string
     *password es de tipo string
     *money es de tipo double
    */
    constructor(name, password, money) {
        name = this.name;
        password = this.password;
        money = this.money;
    }
    get names() {
        return this.name;
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
let client = new cliente("", "", 500);
function removeUserLog() {
    userWindow = document.getElementById('user_log');
    userWindow.remove();
}
function addOptionsWindow() {
    const ventanaPrincipal = document.createElement("div");
    const textoPrueba = document.createElement("p");
    const node = document.createTextNode(client.passwords);
    textoPrueba.appendChild(node);
    ventanaPrincipal.className = "window";
    body = document.getElementById('main_window');
    body.appendChild(ventanaPrincipal);
    ventanaPrincipal.appendChild(textoPrueba);
}
function defineClient() {
    /**Crea un cliente al  */
    let mainMenu = document.getElementById('main_menu');
    let mainMenuText = document.getElementById('main_menu_text');
    nam = document.getElementById('username_input').value;
    password = document.getElementById('password_input').value;
    client.names = nam;
    client.passwords = password;
    client.moneys = 500;
    removeUserLog();
    mainMenu.style.display  = 'block';
    mainMenuText.innerHTML = 'hola '+client.names + ' bienvenido al portal principal';

}
/**Lo que sigue simplemente es manipular los elementos del DOM para mostrar las ventanas según la opción que se pida. */
/**La ventana de los botones solo se le hace display. */
/**el resto de las ventanas se crean directamente */