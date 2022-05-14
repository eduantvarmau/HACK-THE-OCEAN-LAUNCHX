//Declara los elementos del navbar
//logo
const log = `../img/baner.png`
//Enlaces
const inc = `Inicio`;
const inc1 = `../index.html`;
const nos = `Nosotros`;
const nos1 = `../pages/nosotros.html`;
const tor = `Tortugas Marinas`;
const tor1 = `../pages/tortugas.html`;
//Botones INGRESAR REGISTRO
const don = `Donación`;
const don1 = `../pages/donaciones.html`;
//Modal


//Crear el navbar
let myNavbar = `<a class="navbar-brand " href="#" href="../index.html">
  <img src="${log}" alt="" width="150px">
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse affix" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto ulNavStyle">
    <li class="nav-item " id="tab-index">
      <a class="btn btnNav rounded-pill" href="${inc1}">${inc}</a>
    </li>
    <li class="nav-item " id="tab-nosotros">
      <a class="btn btnNav rounded-pill" href="${nos1}">${nos}</a>
    </li>
    <li class="nav-item " id="tab-tortugas">
      <a class="btn btnNav rounded-pill" href="${tor1}">${tor}</a>
    </li>
    <li class="nav-item " id="tab-donacion">
      <a class="btn btnNav rounded-pill" href="${don1}">${don}</a>
    </li>
  </ul>
  </ul>
  <form class="form-inline my-2 my-lg-0 affix ">
          <botton type="button" class="btn btnDonacion  my-2 my-sm-0" style="border-radius: 1px 16px 16px 1px"
          onclick="location.href='${reg1}'">
            ${reg}
          </botton>
        </form>
      </div>`

//Muestra el footer en pantalla
anclaNavbar.innerHTML = myNavbar;

//Cambia el color de la nav-bar cuando se da scroll
window.addEventListener("scroll", function(){
  let header = document.querySelector("#anclaNavbar");
  header.classList.toggle("down",window.scrollY>0);
})

//Item selected nav-bar
const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLenght = menuItem.length
for (let i=0; i < menuLenght; i++){
  if(menuItem[i].href === currentLocation){
    menuItem[i].className = "active"
  }
}