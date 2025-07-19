

document.addEventListener('click', (e) => {
    const ELEMENT = e.target;
    if (ELEMENT.classList.contains('__navbar_small_toggler')) {
        ELEMENT.classList.toggle('active');
        document.getElementById('Navbar').classList.toggle('mobile');
    }
})

window.addEventListener('resize', (e) => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
        document.getElementById('Navbar').classList.remove('mobile');
        document.querySelector('.__navbar_small_toggler').classList.remove('active')
    }
})