import { ui } from "./ui.module.js"
export let mmorpg = document.getElementById("mmorpg");
export let shooter = document.getElementById("shooter");
export let sailing = document.getElementById("sailing");
export let permadeath = document.getElementById("permadeath");
export let superhero = document.getElementById("superhero");
export let pixel = document.getElementById("pixel");


mmorpg.addEventListener("click", function () {
    mmorpg.setAttribute("class", "hovered nav-link text-uppercase active color-white hover-blue")
    shooter.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    sailing.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    permadeath.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    superhero.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    pixel.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    let mmo = new ui("mmorpg")
    mmo.ddata();



    
})
shooter.addEventListener("click", function () {
    mmorpg.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    shooter.setAttribute("class", "hovered nav-link text-uppercase active color-white hover-blue")
    sailing.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    permadeath.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    superhero.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    pixel.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    let shoot = new ui("shooter")
    shoot.ddata();

})
sailing.addEventListener("click", function () {
    mmorpg.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    shooter.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    sailing.setAttribute("class", "hovered nav-link text-uppercase active color-white hover-blue")
    permadeath.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    superhero.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    pixel.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    let sail = new ui("sailing")
    sail.ddata();

})
permadeath.addEventListener("click", function () {
    mmorpg.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    shooter.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    sailing.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    permadeath.setAttribute("class", "hovered nav-link text-uppercase active color-white hover-blue")
    superhero.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    pixel.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    let perma = new ui("permadeath")
    perma.ddata();

})
superhero.addEventListener("click", function () {
    mmorpg.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    shooter.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    sailing.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    permadeath.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    superhero.setAttribute("class", "hovered nav-link text-uppercase active color-white hover-blue")
    pixel.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    let hero = new ui("superhero")
    hero.ddata();

})
pixel.addEventListener("click", function () {
    mmorpg.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    shooter.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    sailing.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    permadeath.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    superhero.setAttribute("class", " nav-link text-uppercase active color-white hover-blue")
    pixel.setAttribute("class", "hovered nav-link text-uppercase active color-white hover-blue")
    let pix = new ui("pixel")
    pix.ddata();

})