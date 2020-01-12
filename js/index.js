const headerList = document.querySelector('.header__list');
const headerMenuButton = document.querySelector('.header__menu-button');

function openMenu() {
    headerList.classList.toggle('header__list_open');
}
headerMenuButton.addEventListener('click', openMenu);

document.addEventListener('click', e => {
    let target = e.target;
    let itsMenu = target == headerList || headerList.contains(target);
    let itsHeaderMenuButton = target == headerMenuButton;
    let menuIsOpen = headerList.classList.contains('header__list_open');
    if (!itsMenu && !itsHeaderMenuButton && menuIsOpen) {
        openMenu();
    }
});