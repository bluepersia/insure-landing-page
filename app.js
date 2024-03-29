const menu = document.querySelector('.menu');

document.querySelector ('.btn-menu').addEventListener ('click', () => {
    menu.classList.add ('open');
})

document.querySelector ('.menu_btn-close').addEventListener ('click', () =>
{
    menu.classList.remove ('open');
});

