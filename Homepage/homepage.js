function toggleMenu() {
    const semiMenu = document.querySelector('.semi-menu');
    semiMenu.classList.toggle('active');
}
document.addEventListener('click', function(event) {
    const semiMenu = document.querySelector('.semi-menu');
    if (!semiMenu.contains(event.target) && !event.target.classList.contains('menu-button')) {
        semiMenu.classList.remove('active');
    }
});