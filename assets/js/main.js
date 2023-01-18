const btnShowCompleteHistory = document.querySelector('#btnShowCompleteHistory');
const btnCloseWindow = document.querySelector('#btnCloseWindow');
const completeHistoryWindow = document.querySelector('#completeHistoryWindow');

const btnShowFormWindow = document.querySelector('#btnShowFormWindow');
const btnCloseFormWindow = document.querySelector('#btnCloseFormWindow');
const formWindow = document.querySelector('#formWindow');

const scrollBar = document.querySelector('body');

const toggleMenu = document.querySelector('#toggleMenu');
const menuList = document.querySelector('#menuList');

const menuListItems = document.querySelectorAll('[data-lista]');


btnShowCompleteHistory.addEventListener("click", () => {
    completeHistoryWindow.classList.add('show');
    scrollBar.classList.add('scroll');
});

btnCloseWindow.addEventListener("click", () => {
    completeHistoryWindow.classList.remove('show');
    scrollBar.classList.remove('scroll');
});

btnShowFormWindow.addEventListener("click", () => {
    formWindow.classList.add('show');
    scrollBar.classList.add('scroll');
});

btnCloseFormWindow.addEventListener("click", () => {
    formWindow.classList.remove('show');
    scrollBar.classList.remove('scroll');
});

toggleMenu.addEventListener("click", () => {
    menuList.classList.toggle('show-list');
});

menuListItems.forEach( list => {
    list.addEventListener("click", () => {
        let j = 0;
        while(j<menuListItems.length){
            menuListItems[j++].className = 'header__logo__item--link';
        }
        list.className = 'header__logo__item--link active';
    });
});
