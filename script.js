// script.js content
function createForm() {
    var form = document.createElement("form");
    form.id = "customerForm";
    
    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.placeholder = "Name";

    var ageInput = document.createElement("input");
    ageInput.type = "number";
    ageInput.id = "age";
    ageInput.placeholder = "Age";

    var submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Submit";

    form.appendChild(nameInput);
    form.appendChild(ageInput);
    form.appendChild(submitBtn);

    document.body.appendChild(form);

    form.onsubmit = function(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        console.log("Name: " + name + ", Age: " + age);
        alert("Form submitted: Name: " + name + ", Age: " + age);
    };
}

// Call the function when the script is loaded
createForm();
