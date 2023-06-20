let logButton = document.getElementById('log_in_button');
let users = [{name:"joe",userName:"pal",password:"123"},{name:"pat",userName:"ghanima",password:"321"}];
class cliente {
    /**La clase cliente tiene las variables de nombre, contraseña  y dinero.
     * Las funciones principales son las relacionadas a la manipulación del dinero.
     *name es de tipo string
     *password es de tipo string
     *money es de tipo double
    */
    constructor(name,user, password, money) {
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
function testClient(use,pass){
    let validate = false;
    let respuesta = [validate,"","",""];
    for(i in users){    
        if(use == users[i].userName && pass == users[i].password){
            validate = true;
            respuesta = [validate,users[i].name,users[i].userName,users[i].password];
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
    test = testClient(username,password);
    bool = test[0];
    if(bool){
        client.names = test[1];
        client.users= test[2];
        client.passwords = test[3];
        client.moneys = 500;
        removeUserLog();
        mainMenu.style.display  = 'block';
        mainMenuText.innerHTML = 'hola '+client.names + ' bienvenido al portal principal';
    }
    else{
        alert('datos incorrectos, intentelo de nuevo porfavor');
    }

}

/**Lo que sigue simplemente es manipular los elementos del DOM para mostrar las ventanas según la opción que se pida. */
/**La ventana de los botones solo se le hace display. */
/**el resto de las ventanas se crean directamente */