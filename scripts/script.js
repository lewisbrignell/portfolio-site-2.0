const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#main-nav');

const hideMenu = () => {
    menu.style.top = '-1000px';
    menuButton.value = 0;
}

menuButton.onclick = () => {
    toggleValue(menuButton.value);
    menuButton.value == 1 ? menu.style.top = '44px' : menu.style.top = '-1000px';
}

const toggleValue = () => {
    menuButton.value == 0 ? menuButton.value = 1 : menuButton.value = 0;
}