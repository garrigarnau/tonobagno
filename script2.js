// Create the form
var form = document.createElement('form');
form.id = 'myForm';

var nameLabel = document.createElement('label');
nameLabel.innerHTML = 'Name: ';
var nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.name = 'name';

var ageLabel = document.createElement('label');
ageLabel.innerHTML = 'Age: ';
var ageInput = document.createElement('input');
ageInput.type = 'text';
ageInput.name = 'age';

var submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'Submit';

form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(document.createElement('br'));
form.appendChild(ageLabel);
form.appendChild(ageInput);
form.appendChild(document.createElement('br'));
form.appendChild(submitButton);

// Append the form to the body of the webpage
document.body.appendChild(form);

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting
    const name = nameInput.value;
    const age = ageInput.value;
    console.log('Name: ' + name + ', Age: ' + age);
    alert('Form Submitted: Name = ' + name + ', Age = ' + age);
});
