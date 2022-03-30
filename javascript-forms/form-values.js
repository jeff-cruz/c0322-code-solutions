var $form = document.querySelector('#contact-form');
$form.addEventListener('submit', preventDefault);

function preventDefault(event) {
  event.preventDefault();
  var formName = document.querySelector('#user-name').value;
  var formEmail = document.querySelector('#user-email').value;
  var formMessage = document.querySelector('#user-message').value;
  var theForm = {
    name: formName,
    email: formEmail,
    message: formMessage
  };
  console.log('messageData:', theForm);
}
