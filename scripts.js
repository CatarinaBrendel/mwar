const sideMenu = document.getElementById('side-menu');
const userLogo = document.getElementById('user-logo');

userLogo.addEventListener('click', () => {
    if (sideMenu.style.display == 'none'){
        sideMenu.style.display = 'block';
    } else {
        sideMenu.style.display = 'none';
    }
})