document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hambutton');
    const mainNav = document.querySelector('.main-nav');

    hamburgerBtn.addEventListener('click', function() {
        mainNav.classList.toggle('open');
    });
});
