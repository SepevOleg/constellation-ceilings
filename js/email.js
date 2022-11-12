const form = document.getElementById('form')
const formBtn = document.getElementById('sendEmail')
const squareQty = document.getElementById('number')
const cost = document.getElementById('rezultatRange')
const costValue = document.getElementById('costValue')
const squareQtyValue = document.getElementById('squareQtyValue')
const inputs = {
  user_name: 'aleksey',
  contact_number: 'nomer'
}
const username = document.getElementById('userName');
const phone = document.getElementById('userPhone');
if (form) {
  formBtn.addEventListener('click', function(event) {
    event.preventDefault();
    costValue.value = cost.textContent
    squareQtyValue.value = square.textContent
    console.log(squareQty.textContent, cost.textContent)
    emailjs.sendForm('service_rl5mcci', 'template_zszpsl7', form)
    .then(function() {
      alert('Ваши данные приняты, ждите ответной связи')
      console.log('SUCCESS!');
      form.reset()
    }, function(error) {
      alert(error)
      console.log('FAILED...', error);
    });
  });
}
