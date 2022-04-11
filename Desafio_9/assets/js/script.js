const btnMobile = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu nav');

function openClose() {
    if(menu.style.display == 'none') {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
}

btnMobile.addEventListener('click', openClose)