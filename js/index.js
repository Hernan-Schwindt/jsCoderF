// ! estoy usando la extencion (Better Comments)
// ! header cambiando de color

window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

// !     cambiar de login a registro

irRegister.addEventListener("click", () => {
  buttomUser()
});
irLogin.addEventListener("click", () => {
  buttomUser()
});

// !           carrito desplegable

popUpCart.addEventListener("click", () => {
  pullOutCart()
});

trolleyX.addEventListener("click", () => {
  pullOutCart()
});

// TODO :  primera entrega 
do {
  let usuario = prompt("ingrese su nombre de usuario")
  let gmail = prompt("ingrese su gmail")
  let contraseña = prompt("ingrese contraseña")
  function datos_ingresados_f(){

      datos_ingresados = confirm("estos son tus datos?" + "\n" 
      + "usuario : " + usuario + "\n" 
      + "gmail : " + gmail + "\n" 
      + "contraseña : " + contraseña)

      if((usuario == "") || (gmail == "") || (contraseña == "")){
          alert("ERROR \n \n falta ingresar datos para seguir con el registro")
      } 
  }
  if ((usuario !== "") && (gmail !== "") && (contraseña !== "")) {
      datos_ingresados_f();
  }else if ((usuario !== "") && (gmail !== "") && (contraseña == "")){
      alert("no añadio una contraseña")
      contraseña = prompt("ingrese contraseña")
      datos_ingresados_f();
  }else if ((usuario !== "") && (gmail == "") && (contraseña !== "")){
      alert("no añadio el gmail")
      gmail = prompt("ingrese su gmail")
      datos_ingresados_f();
  }else if ((usuario == "") && (gmail !== "") && (contraseña !== "")){
      alert("no añadio el nombre de usuario")
      usuario = prompt("ingrese su nombre de usuario")
      datos_ingresados_f();
  }else if ((usuario == "") && (gmail == "") && (contraseña !== "")){
      alert("no añadio el nombre de usuario ni el gmail")
      usuario = prompt("ingrese su nombre de usuario")
      gmail = prompt("ingrese su gmail")
      datos_ingresados_f();
  }else if ((usuario !== "") && (gmail == "") && (contraseña == "")){
      alert("no añadio la contraseña ni el gmail")
      contraseña = prompt("ingrese contraseña")
      gmail = prompt("ingrese su gmail")
      datos_ingresados_f();
  }else if ((usuario == "") && (gmail !== "") && (contraseña == "")){
      alert("no añadio la contraseña ni su nombre de usuario")
      contraseña = prompt("ingrese contraseña")
      usuario = prompt("ingrese su nombre de usuario")
      datos_ingresados_f();
  }else{
      datos_ingresados_f();
  }
} while (!datos_ingresados)





