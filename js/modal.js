// ! DOM
const popUpCart = document.getElementById("popUpCart");
const trolleyX = document.getElementById("trolleyX");
const modal = document.getElementById("modal");
const itemProducto = document.getElementById("itemProducto");
const itemsTrolley = document.getElementById("itemsTrolley");
const precioTotal = document.getElementById("precioTotal")
const cantidad = document.getElementById("cantidad")
const contadorCarrito = document.getElementById("contadorCarrito")
const botonVaciar = document.getElementById("vaciarCarrito")


let trolley = []

function pullOutCart (){
    document.getElementById("modal").classList.toggle("see");
}

// ! click de cambio login a register
  function buttomUser() {
    document.getElementById("formAdd").classList.toggle("formNone");
    document.getElementById("formLogin").classList.toggle("formNone");
}
  // !   carta de compra de productos
function pullOutCart (){
    document.getElementById("modal").classList.toggle("see");
}
// !      productos
let stockProductos =[
  {id: 1, nombre: "pizza", cantidad:1, tipo: "pizza", desc: "pizza con salamin", precio: 600, img: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Platos-de-comida-que-pides-a-domicilio-y-puedes-hacer-en-casa-945x630.jpg'},
  {id: 2, nombre: "hamburguesa", cantidad:1, tipo: "hamburguesa", desc: "hamburguesas completa", precio: 800, img: 'img/productos/burger-4641173.jpg'},
  {id: 3, nombre: "brochetas de langostinos", cantidad:1, tipo: "mariscos", desc: "brochetas de langostinos con salsa picante", precio: 1800, img: 'https://saposyprincesas.elmundo.es/wp-content/uploads/2017/01/comida-india-langostinos-tandoori.jpg'},
  {id: 4, nombre: "empanadas argentinas", cantidad:1, tipo: "empanada", desc: "tipicas empanadas de la abuela", precio: 1200, img: 'https://cdn.inteligenciaviajera.com/wp-content/uploads/2019/11/comida-tipica-argentina.jpg'},
  {id: 5, nombre: "hamburgesa completa con papas fritas", cantidad:1, tipo: "hamburguesa", desc: "hamburguesa completa con papasfritas", precio: 1200, img: 'https://www.latercera.com/resizer/paQrJOZi15EjJBXDgQQOS_wNl-M=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/IH4ZL56GY5B5NONKRLO6GTWMLA.jpg'},
  {id: 6, nombre: "arroz con lentejas y salmon", cantidad:1, tipo: "comidaCompleta", desc: "arroz con lentejas y salmon", precio: 1200, img: 'https://cocinarconrobot.com/wp-content/uploads/comer-saludable-equilibrado-sin-dieta.jpg'},
  {id: 7, nombre: "cañositos con queso", cantidad:1, tipo: "frito", desc: "comida tradicional jamaicana", precio: 1200, img: 'https://www.viajarjamaica.com/img/cocina-tradicional-jamaicana.jpg'},
  {id: 8, nombre: "hamburguesa", cantidad:1, tipo: "hamburguesa", desc: "hamburguesa completa con papasfritas", precio: 1200, img: 'https://i0.wp.com/goula.lat/wp-content/uploads/2019/12/hamburguesa-beyond-meat-scaled-e1577396155298.jpg?fit=1600%2C1068&ssl=1'},
  {id: 9, nombre: "papas fritas con chedar y carne", cantidad:1, tipo: "frito", desc: "papas fritas con chedar y carne algo rico para engordar", precio: 1200, img: 'https://i.pinimg.com/236x/a2/f6/01/a2f6010c2f7ebb3313bbc64703fe8f8c.jpg'},
  {id: 10, nombre: "milanga con papas fritas", cantidad:1, tipo: "frito", desc: "milanga con papas fritas de la abuela", precio: 1200, img: 'https://recetinas.com/wp-content/uploads/2020/03/milanesas-de-pollo.jpg'},
  {id: 11, nombre: "milanesa napolitana", cantidad:1, tipo: "frito", desc: "milanesa napolitana para su disfrute", precio: 1200, img: 'https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/03/Comidas-tipicas-de-argetina.jpg'}
]
