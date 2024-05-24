document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var country = document.getElementById('country').value;

    if (!name || !email || !message || !gender || !country) {
        alert('Todos los campos son obligatorios.');
        return false;
    }

    alert('Formulario enviado correctamente.');
    this.submit();
});