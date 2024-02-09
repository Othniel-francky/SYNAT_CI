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


let global1 = document.querySelector(".global1");
let global2 = document.querySelector(".global2");
console.log(global1,global2);

let carre1 = document.querySelector(".carre1");
let carre2 = document.querySelector(".carre2");
console.log(carre1,carre2);

global1.addEventListener('click', (e)=>{
    carre1.style.display = "block";
    carre2.style.display = "none";
    global1.style.backgroundColor = "white";
    global1.style.border = "1px solid #0057FF";
    global1.style.color = "#0057FF";

    global2.style.backgroundColor = "#FF0000";
    global2.style.color = "white";
    
});

global2.addEventListener('click', (e)=>{
    carre1.style.display = "none";
    carre2.style.display = "block";
    global1.style.backgroundColor = "#0057FF";
    global1.style.color = "white";
    global2.style.backgroundColor = "white";
    global2.style.border = "1px solid #FF0000";
    global2.style.color = "#FF0000";
})