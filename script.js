const menuButton = document.getElementById("menuButton");

const nav = document.getElementById("nav");

const links = document.querySelectorAll(".nav a");

const year = document.getElementById("year");



/* MENU DO CELULAR */

menuButton.addEventListener("click", function () {

    nav.classList.toggle("active");

});



/* FECHAR MENU AO CLICAR */

links.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});



/* ANO AUTOMÁTICO */

year.textContent = new Date().getFullYear();



/* EFEITO DE APARECER */

const elements = document.querySelectorAll(
    ".timeline-item, .skill-card, .project-card"
);


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }
);


elements.forEach(function (element) {

    observer.observe(element);

});