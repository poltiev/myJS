$(function(burger) {
    // В класс "all" обернуто все содержимое страницы.
    // Можно повесить событие и на body, но тогда это меню не будет работать на I-pad
    $('.all').click(function( event ){
        // проверяем находится ли элемент на который кликнули в нашем меню,
        // то есть в контейнере "menu-container"
        let eventInMenu = burger( event.target ).parents('.menu-container');
        // если родителя нет, значит клик был вне меню и меню сворачиваем
        if( !eventInMenu.length ){
            burger('.main-menu').slideUp('800');
        }
    });
    $('.menu-container').click(function(){
        burger('.main-menu').slideToggle('800');
    });
});