const form = document.getElementById('form')
const formBtn = document.getElementById('sendEmail')
const inputs = {
  user_name: 'aleksey',
  contact_number: 'nomer'
}
const username = document.getElementById('userName');
const phone = document.getElementById('userPhone');
if (form) {
  formBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(username.value, phone.value)
    const data = {
      user_name: username.value,
      contact_number: phone.value
    }
    console.log(emailjs.sendForm)
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
