$('.open-modal').click(function(){
  $('.block-popup, .overlay').fadeIn();
})
$('.block-popup span').click(function(){
  $('.block-popup, .overlay').fadeOut();
})
$(document).ready(function(){
$("form").submit(function() { // Событие отправки с формы
var form = $(this).serialize(); // Собираем данные из полей
$.ajax({
type: "POST", 
url: "../form/sendform.php",
data: form,
success: function() {
$('.popup').addClass('active');
$('.thanks').addClass('active');
}
});
event.preventDefault();
});
});