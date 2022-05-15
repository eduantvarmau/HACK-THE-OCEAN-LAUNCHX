const logo = `../img/ayotl_salve.png`

const inc = `Inicio`;
const inc1 = `../index.html`;
const nos = `Nosotros`;
const nos1 = `../pages/nosotros.html`;
const ser = `Tortugas Marinas`;
const ser1 = `../pages/tortugas.html`;
const don = `Donaciones`;
const don1 = `../pages/donacion.html`;

//Crear el navbar
let navbar = ` <div class="container-fluid">
<a class="navbar-brand" href="index.html"><img src="${logo} "
    class="img-fluid d-flex align-items-center" width="100px" alt="Logo"></a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="${inc1}">${inc} <i class="bi bi-house-door-fill"
          style="font-size: 1.2rem;"></i></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="${nos1}">${nos} <i class="bi bi-people-fill"
          style="font-size: 1.2rem;"></i></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="${ser1}">${ser} <i class="bi bi-tsunami"
          style="font-size: 1.2rem;"></i></a>
    </li>
  </ul>
  <ul class="navbar-nav">
<li class="nav-item">
      <button id="bNav" class="btn" type="submit">
      <span class="button-content">
        <a class="nav-link" href="${don1}"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H24V24H0z" fill="none"></path>
          <path
            d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"
            fill="currentColor"></path>
        </svg> DONACIÓN <i class="bi bi-currency-exchange" style="font-size: 1.2rem;"></i>
      </span></a>
    </button>
  </li>
  </ul>
</div>
</div>`

anclaIndex.innerHTML = navbar;