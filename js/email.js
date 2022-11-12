var templateName = ''
$('.open-modal').click(function(event){
  var template = event.target.parentNode.parentNode
  templateName = template.querySelector('.template-name')
  if (templateName) {
    templateName = templateName.querySelector('p').textContent
  }
  $('.block-popup, .overlay').fadeIn();
})
$('.block-popup span').click(function(event){
  templateName = ''
  $('.block-popup, .overlay').fadeOut();
})
const confAccept = document.getElementById('confAccept')
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
var templateNameValue = document.getElementById('templateName')
if (form) {
    formBtn.addEventListener('click', function(event) {
      if (confAccept.checked) {
        console.log(confAccept.checked)
        event.preventDefault();
        costValue.value = cost.textContent
        squareQtyValue.value = square.textContent
        console.log(squareQty.textContent, cost.textContent)
        if (!templateName) {
          emailjs.sendForm('service_rl5mcci', 'template_zszpsl7', form)
          .then(function() {
            alert('Ваши данные приняты, ждите ответной связи')
            console.log('SUCCESS!');
            form.reset()
          }, function(error) {
            alert(error)
            console.log('FAILED...', error);
          });
        } else {
          templateNameValue.value = templateName
          console.log(templateNameValue)
          emailjs.sendForm('service_rl5mcci', 'template_4fth5g8', form)
          .then(function() {
            alert('Ваши данные приняты, ждите ответной связи')
            console.log('SUCCESS!');
            form.reset()
          }, function(error) {
            alert(error)
            console.log('FAILED...', error);
          });
        }
      } else {
        event.preventDefault();
        return 
      }
      
      
    });
    

  // } else {
  //   templateNameValue.value = templateName
  //   console.log(templateNameValue)
  //   formBtn.addEventListener('click', function(event) {
  //     event.preventDefault();
  //     costValue.value = cost.textContent
  //     squareQtyValue.value = square.textContent
  //     emailjs.sendForm('service_rl5mcci', 'template_4fth5g8', form)
  //     .then(function() {
  //       alert('Ваши данные приняты, ждите ответной связи')
  //       console.log('SUCCESS!');
  //       form.reset()
  //     }, function(error) {
  //       alert(error)
  //       console.log('FAILED...', error);
  //     });
  //   });
  // }
  
}
