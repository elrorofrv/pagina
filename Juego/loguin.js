const btn_continuar = document.getElementById('btn_continuar')
btn_continuar.addEventListener('click', guardarLogin)


function guardarLogin() {
  const Username = document.getElementById('Username').value
  const password = document.getElementById('password').value

  localStorage.setItem('Username', Username)
  localStorage.setItem('password', password)
}

function eliminarLogin() {
  localStorage.removeItem('Username')
  localStorage.removeItem('password')
}

function obtenerlogin() {
  const Username = localStorage.getItem('Username')
  const password = localStorage.getItem('password')

  return {
    Username,
    password
  }
}

function validarLogin() {
  const login = obtenerlogin()

  if (login.Username && login.password) {
    window.location = 'index.html'
  } else {
    alert('Debes ingresar para poder pasar.')
  }
}

function cerrarSession() {
  eliminarLogin()
  window.location = 'entrada.html'
}