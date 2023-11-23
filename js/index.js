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




//     !            login


loginSubmit.addEventListener("click", () => {

  let condicion = validacionForm(formLogin, loginNick, loginGmail, loginPass, "nameLogin", "mailLogin", "passwordLogin", "termsAndConditionsLogin");
  if (condicion) {
    enviarFormulario(formLogin);
    console.log("hola como estas 2.0")

  }
  if (userReturnUserLogin()) {
    resetForm()
    console.log("hola como estas")
  }
});

// !  verificador de usuarios
function verificador() {
  let user = arrayUser.find(u => u.user === addNick.value);
  let user4 = user[4]

  let email = arrayUser.find(g => g.gmail === addGmail.value);

  if (user4 === true) {
    mostrarMensajeError("name", "Nombre en uso*");
    condicion = false;
  }
  if (!email) {
    mostrarMensajeError("mail", "Correo ya en uso*");
    condicion = false;
  }
  // TODO verifica que no exisata un usuaria con algun dato igual si los datos no son iguale lo añade al array
  if (!user && !email &&
    !(addNick.value.length < 1 || addNick.value.trim() == "") &&
    !(addGmail.value.length < 1 || addGmail.value.trim() == "") &&
    !(addPass.value.length < 1 || addPass.value.trim() == "") &&
    !(addImg.value.length < 1 || addImg.value.trim() == "")) {
    userNEW();

  }
}
//  TODO al estar algo repetido lo indica
function validacionForm(form, nick, gmail, pass, input1, input2, input3, input4) {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nick.value.length < 1 || nick.value.trim() == "") {
    mostrarMensajeError(input1, "Nombre no valido*");
    condicion = false;
  }
  if (gmail.value.length < 1 || gmail.value.trim() == "") {
    mostrarMensajeError(input2, "Correo no valido*");
    condicion = false;
  }
  if (pass.value.length < 1 || pass.value.trim() == "") {
    mostrarMensajeError(input3, "Contraseña no valido*");
    condicion = false;
  }

  imgRegistro();
  if (!terminosYcondiciones.checked) {
    mostrarMensajeError(input4, "Acepte*");
    condicion = false;
  } else {
    mostrarMensajeError(input4, "");
  };
  if (userReturnUserLogin()) {
    alert("hola como estas")
  }

  verificador();
  return condicion;

};

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector("." + claseInput);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario(terminar) {
  terminar.reset();
  terminar.lastElementChild.innerHTML = "Listo !!";
};

function imgRegistro() {
  if (addImg.value.length < 1 || addImg.value.trim() == "") {
    mostrarMensajeError("imgAvatar", "img no valido");
    condicion = false;

  }
}







// ! productos añadido en el main como en el carrito

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('trolley')) {
    trolley = JSON.parse(localStorage.getItem('trolley'))
    actualizarCarrito()
  }
})

botonVaciar.addEventListener('click', () => {
  trolley.length = 0
  actualizarCarrito()
})
stockProductos.forEach((producto) => {
  const div = document.createElement(`div`)
  div.classList.add(`producto`)
  div.innerHTML = `
  <img src=${producto.img} alt= "">
  <h3>${producto.nombre}</h3>
  <p>${producto.desc}</p>
  <P class="precioProducto">precio: $ ${producto.precio}</p>
  <button id="agregar${producto.id}" class="botonAgregar">Agregar <i class="fas fa-shopping-cart"></i></button>
  `
  itemProducto.appendChild(div)

  const boton = document.getElementById(`agregar${producto.id}`)
  boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id)
  })
});

const agregarAlCarrito = (prodId) => {

  const existe = trolley.some(prod => prod.id === prodId)

  if (existe) {
    const prod = trolley.map(prod => {
      if (prod.id === prodId) {
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === prodId)
    trolley.push(item)
  }

  actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {

  const item = trolley.find((prod) => prod.id === prodId)

  const indice = trolley.indexOf(item)

  trolley.splice(indice, 1)
  actualizarCarrito()
}
const actualizarCarrito = () => {

  itemsTrolley.innerHTML = ""

  trolley.forEach((prod) => {
    const div = document.createElement('div')
    div.className = ('productoEnCarrito')
    div.innerHTML = `
      <div class="imgDescCarruto">
      <img src=${prod.img} alt= "">
      <p>${prod.nombre}</p>
      </div>
      <p><span id="cantidad">${prod.cantidad}</span></p>
      <p>Precio:$${prod.precio}</p>
      <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
      `

    itemsTrolley.appendChild(div)

    localStorage.setItem('trolley', JSON.stringify(trolley))

  })

  contadorCarrito.innerText = trolley.length
  console.log(trolley)
  precioTotal.innerText = trolley.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)


}





