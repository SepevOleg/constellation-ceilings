
var inst = $('[data-remodal-id=modal]').remodal();
 
/*Открываем модальное окно*/
inst.open();
/*Закрываем модальное окно*/
inst.close();
/*Получаем текущее состояние окна @returns {'closed'|'closing'|'opened'|'opening'} */
inst.getState();
/*Уничтожаем объект модального окна*/
inst.destroy()
$(document).on('opening', '.remodal', function () {
  console.log('Modal is opening');
});
 
$(document).on('opened', '.remodal', function () {
  console.log('Modal is opened');
});
 
$(document).on('closing', '.remodal', function (e) {
 
  // Reason: 'confirmation', 'cancellation'
  console.log('Modal is closing' + (e.reason ? ', reason: ' + e.reason : ''));
});
 
$(document).on('closed', '.remodal', function (e) {
 
  // Reason: 'confirmation', 'cancellation'
  console.log('Modal is closed' + (e.reason ? ', reason: ' + e.reason : ''));
});
 
$(document).on('confirmation', '.remodal', function () {
  console.log('Confirmation button is clicked');
});
 
$(document).on('cancellation', '.remodal', function () {
  console.log('Cancel button is clicked');
});