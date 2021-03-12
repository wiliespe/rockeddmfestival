document.addEventListener('DOMContentLoaded', function() {
    navegacionFija();
})

function navegacionFija() {
    //Registrar el Intersection Observer
    const observer = new IntersectionObserver( function(entries) {
        const barra = document.querySelector('.header');
        if(entries[0].isIntersecting) {
            barra.classList.remove('fijo')
        } else {
            barra.classList.add('fijo');
        }
    })

    //Elemento a observar 
    observer.observe(document.querySelector('.hero'));
}