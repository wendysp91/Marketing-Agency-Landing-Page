addEventListener("DOMContentLoaded", () =>{
    const counters = document.querySelectorAll(".counter__quantity");
    const skip = 1000;
    
    const countersAnimate = () => {
        for (const counter of counters) {
            const update_count = () => {
                let quantity_max = +counter.dataset.total,
                    current_value = +counter.innerText,
                    increase = quantity_max / skip;

                if (current_value < quantity_max) {
                    counter.innerText = Math.ceil(current_value + increase);
                    setTimeout(update_count, 3);
                } else {
                    counter.innerText = quantity_max;
                } 
            }
        update_count();
        }
    }
    
    function isVisible(){
        var elem = document.getElementById('Contact');
        var posTopView = window.scrollY;
        var posButView = posTopView + window.innerHeight;
        var elemTop = elem.offsetTop;
        /*var elemBottom = elemTop + elem.offsetHeight;*/
        if (elemTop > posTopView && elemTop < posButView) {
            countersAnimate();
        }  
    }
    window.addEventListener('scroll',isVisible);
    const hamburguer = document.getElementById('hamburguer');
    const nav = document.getElementById('nav');
    hamburguer.addEventListener('click', (e) => {
        nav.classList.toggle("menu-opened");

        /*nav.className += " menu-opened";*/
    })
    window.addEventListener('click', (e)=>{
        if (nav.classList.contains('menu-opened') && e.target != nav && e.target != hamburguer) {
            nav.classList.toggle("menu-opened");
        }
    })
})
