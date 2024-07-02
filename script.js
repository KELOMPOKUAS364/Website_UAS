const form = document.getElementById('registration-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const birthDate = document.getElementById('birth-date').value;
  const birthPlace = document.getElementById('birth-place').value;
  const gender = document.getElementById('gender').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const email = document.getElementById('email').value;

  let errors = [];

  if (name === '') {
    errors.push('Name is required');
  }

  if (address === '') {
    errors.push('Address is required');
  }

  if (birthDate === '') {
    errors.push('Birth date is required');
  }

  if (birthPlace === '') {
    errors.push('Birth place is required');
  }

  if (gender === '') {
    errors.push('Gender is required');
  }

  if (phoneNumber === '') {
    errors.push('Phone number is required');
  }

  if (password === '') {
    errors.push('Password is required');
  }

  if (confirmPassword === '') {
    errors.push('Confirm password is required');
  }

  if (email === '') {
    errors.push('Email is required');
  }

  if (password !== confirmPassword) {
    errors.push('Passwords do not match');
  }

  if (errors.length > 0) {
    errorMessage.innerHTML = '';
    errors.forEach((error) => {
      const errorElement = document.createElement('p');
      errorElement.textContent = error;
      errorMessage.appendChild(errorElement);
    });
  } else {
    // Form is valid, submit it
    form.submit();
  }
});