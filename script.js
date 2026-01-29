function applyTheme(isLight) {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  html.classList.toggle("light", isLight)

  img.setAttribute(
    "src",
    isLight ? "./img/avatar-light.png" : "./img/avatar.png"
  )
}

function toggleMode() {
  const html = document.documentElement

  // ativa animação só após interação
  html.classList.add("animate")

  const isLight = !html.classList.contains("light")
  applyTheme(isLight)
}

// estado inicial (dark, sem animação)
applyTheme(false)