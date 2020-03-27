const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#main-nav');

const hideLoc = '-1000px';
const showLoc = '0';

const hideMenu = () => {
    menu.style.top = hideLoc;
    menuButton.value = 0;
}

menuButton.onclick = () => {
    toggleValue(menuButton.value);
    menuButton.value == 1 ? menu.style.top = showLoc : menu.style.top = hideLoc;
}

const toggleValue = () => {
    menuButton.value == 0 ? menuButton.value = 1 : menuButton.value = 0;
}