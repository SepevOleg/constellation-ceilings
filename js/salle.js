$(document).ready(function() {
  $('.owl-carouse1').owlCarousel({
      loop:true, //Зацикливаем слайдер
      margin:5, //Отступ от картино если выводите больше 1
      nav:false, //Отключил навигацию
      autoplay:true, //Автозапуск слайдера
      smartSpeed:900, //Время движения слайда
      autoplayTimeout:900000, //Время смены слайда
      responsive:{ //Адаптация в зависимости от разрешения экрана
          300:{
              items:2
          },
          768:{
              items:1
          },
          1000:{
              items:3
          },
      }
  });
});