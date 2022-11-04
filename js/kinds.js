$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:5, //Отступ от картино если выводите больше 1
        nav:false, //Отключил навигацию
        autoplay:true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:5000, //Время смены слайда
        responsive:{ //Адаптация в зависимости от разрешения экрана
            300:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            },
        }
    });
});