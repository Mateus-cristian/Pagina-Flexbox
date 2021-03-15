//Função de Sroll suave a página

export default function initScrollSuave() {

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');


    function vaiAteASecao(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;


        window.scrollTo({
            top: topo,
            behavior: 'smooth'
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', vaiAteASecao)
    });
}