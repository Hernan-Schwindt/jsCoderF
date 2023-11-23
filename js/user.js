// ! DOM
const formAdd = document.getElementById("formAdd");
const formLogin = document.getElementById("formLogin")
const listInputs = document.querySelectorAll(".formInput");
const terminosYcondiciones = document.getElementById("termsAndConditions");

// ! REGISTER

const addNick = document.getElementById("addNick");
const addGmail = document.getElementById("addGmail");
const addPass = document.getElementById("addPass");
const addImg = document.getElementById("addImg");
const addSubmit = document.getElementById("addSubmit");
const irLogin = document.getElementById("irLogin");

//   ! login

const loginNick = document.getElementById("loginNick");
const loginGmail = document.getElementById("loginGmail");
const loginPass = document.getElementById("loginPass");
const loginSubmit = document.getElementById("loginSubmit");
const irRegister = document.getElementById("irRegister");

let faltaDatosRegister = document.getElementById("faltaDatosRegister");
let faltaDatosLogin = document.getElementById("faltaDatosLogin");

const userNew = document.getElementById("userNew");

let datos_ingresados = ("");

// TODO constructor de usuarios
class Users {
    constructor(user, gmail, pass, img) {
        this.user = user;
        this.gmail = gmail;
        this.pass = pass;
        this.img = img;
    }
}
// ! click de cambio login a register
function buttomUser() {
    document.getElementById("formAdd").classList.toggle("formNone");
    document.getElementById("formLogin").classList.toggle("formNone");
}



// !  LOGIN                            login completo
function userReturnUserLogin() {
    let loginNick = document.getElementById("loginNick").value;
    let loginGmail = document.getElementById("loginGmail").value;
    let loginPass = document.getElementById("loginPass").value;

    let user = arrayUser.find(u => u.user === loginNick)

    let email = arrayUser.find(g => g.gmail === loginGmail)

    let passs = arrayUser.find(p => p.pass === loginPass)
    console.log(user)
    function validarObjeto(){
        if (passs === email && user === email && terminosYcondiciones.checked) {
            alert("hola")
            return user;
        }
        
    }
    // TODO mustra mensaje de ERORR
    if (passs === email && user === email) {
        return user;
    }
    if (passs != validarObjeto()) {
        mostrarMensajeError("passwordLogin", "Contraseña no valido*");
        condicion = false;
    }
    if (email != validarObjeto()) {
        mostrarMensajeError("mailLogin", "gmail no valido*");
        condicion = false;
    }
    if (user != validarObjeto()) {
        mostrarMensajeError("nameLogin", "usuario no existe*");
        condicion = false;
    }
}

//  ! CREAR UN NUEVO OBJETO

function userNEW() {
    let addNick = document.getElementById("addNick").value;
    let addGmail = document.getElementById("addGmail").value;
    let addPass = document.getElementById("addPass").value;
    let addImg = document.getElementById("addImg").value;

    arrayUser.push(new Users(addNick, addGmail, addPass, addImg, true));
    console.log(arrayUser)
    resetForm();
}
// TODO elimina lo qe tenfo en el formularo
function resetForm() {
    // ! registro

    formAdd.reset();
    // ! login

    formLogin.reset();
}
let arrayUser = [];

arrayUser.push({
    user: "hernan",
    gmail: "hernanschwindt1@gmail.com",
    pass: "123456ppmm",
    img: "img/avatar/icono.png",
    valor: true

});
arrayUser.push({
    user: "jose",
    gmail: "herna.schwindt1@gmail.com",
    pass: "123456lol",
    img: "img/avatar/noAvatar.jpg",
    valor: true
});