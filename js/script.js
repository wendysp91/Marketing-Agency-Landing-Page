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
                    setTimeout(update_count, 5);
                } else {
                    counter.innerText = quantity_max;
                } 
            }
        update_count();
        }
    }
    countersAnimate();
})