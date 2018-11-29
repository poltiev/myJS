//клик по по элементу
$('.button').on('click', function(){
    //Используем для следующего объекта переключатель свернуть/развернуть
    $(this).next().slideToggle(500);
    //Используем для следующего объекта переключатель класаа
    $(this).next().toggleClass('active');
    //Для текущего объекта то-же переключатель класса
    $(this).toggleClass('active');
//    для произвольного класса то же добавляем или удаляем класс active
    $('.cont1').toggleClass('active');
});

//переключатель класс радителю
$('.button2').on('click', function () {
    $(this).parent().toggleClass('border');
});

//Переключаем класс дочернему
$('.click3').on('click', function () {
    $(this).children().toggleClass('active');
});