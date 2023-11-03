const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!nameInput.value.trim()) {
        alert('Name is required');
        return;
    }

    if (!emailInput.value.trim()) {
        alert('Email is required');
        return;
    }
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (confirm(`Name: ${name}\nEmail: ${email}\n\nDo you want to proceed?`)) {
        const userText = prompt('Please enter some text:');
        if (userText) {
            alert(`You entered: ${userText}`);
            form.reset();
        } else {
            alert('Text entry was canceled.');
        }
    }
});
