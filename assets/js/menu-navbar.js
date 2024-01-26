function mostrarMenu(){
    const menu = document.querySelector(".navbar-lado")
    menu.style.display = "flex"
}

function cerrarMenu(){
    const menu = document.querySelector(".navbar-lado")
    menu.style.display = "none"
}

window.addEventListener("scroll", function(){
    var header = document.querySelector(".nav-header");
    header.classList.toggle("abajo",window.scrollY>0);
})