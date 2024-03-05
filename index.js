
document.addEventListener('DOMContentLoaded', function() {
    const timeElement = document.querySelector('.time');
    const hamburger = document.querySelector('.hamburger');
    const closeIcon = document.querySelector('.close');
    const dropdown = document.querySelector('.header1');
    let isClose = true
    let isOpen = false
    currentTime();

    //event listeners
    hamburger.addEventListener('click', hamber)
    closeIcon.addEventListener('click', closet)

    //greetings function
    function currentTime() {
        const date = new Date();
        const t = date.getHours();

        if (t > 11 && t < 16) {
            timeElement.textContent = 'Good afternoon!';
        } else if (t >= 16 && t < 24) {
            timeElement.textContent = 'Good evening!';
        } else {
            timeElement.textContent = 'Good morning!';
        }
    }

    //hamburger function
function hamber (e){
    e.preventDefault();
    if (window.matchMedia('(max-width:670px)').matches){
        if(!isOpen){
            dropdown.style.display = 'flex'
            hamburger.style.display = 'none'
        }
    }
}

function closet(e){
    e.preventDefault();
    if (window.matchMedia('(max-width:670px)').matches){
        if(!isOpen){
            dropdown.style.display = 'none'
            hamburger.style.display = 'block'
        }
    }
}

    
});

