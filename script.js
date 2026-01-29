// Aplica o tema completo (classe + avatar)
function applyTheme(isLight) {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (isLight) {
    html.classList.add("light")
    img.setAttribute("src", "./img/avatar-light.png")
  } else {
    html.classList.remove("light")
    img.setAttribute("src", "./img/avatar.png")
  }
}

// Alterna o tema ao clicar no switch
function toggleMode() {
  const isLight = document.documentElement.classList.toggle("light")
  applyTheme(isLight)
}

// Estado inicial do tema (dark por padrão)
applyTheme(false)
