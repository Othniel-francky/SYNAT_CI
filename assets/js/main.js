/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')

// modal
let modal = document.getElementById('contactModal')
let modalButton = document.getElementById('addContactModalButton')
let close = document.querySelector('.close')
let clos = document.querySelector(".clos")

modalButton.onclick = function () {
  modal.style.display = 'block'
}

close.onclick = function () {
  modal.style.display = 'none'
}
clos.onclick = function () {
    modal.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}