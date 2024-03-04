const menuic = document.getElementsByClassName("menuic")[0]
const mobileNavs = document.getElementsByClassName("nav-links")[0]
menuic.addEventListener("click", () => {
  mobileNavs.classList.toggle("active")
})