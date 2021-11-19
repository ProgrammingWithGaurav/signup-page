// Inputs
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');

// Error Container 
let fnameError = document.querySelector('.fname-error');
let lnameError = document.querySelector('.lname-error');
let emailError = document.querySelector('.email-error');
let passwordError = document.querySelector('.password-error');

let btn = document.querySelector('.btn');

// Regex
let nameRegex = /^[A-Za-z]/
let emailRegex = /\S+@\S+\.\S+/;
let passwordRegex = /^[A-Za-z1-10]/

btn.addEventListener('click', () => {
    if (nameRegex.test(fname.value)) fnameError.classList.add('d-none');
    else fnameError.classList.remove('d-none');

    if (nameRegex.test(lname.value)) lnameError.classList.add('d-none');
    else lnameError.classList.remove('d-none');

    if (emailRegex.test(email.value)) emailError.classList.add('d-none');
    else emailError.classList.remove('d-none');

    if (passwordRegex.test(password.value)) passwordError.classList.add('d-none');
    else passwordError.classList.remove('d-none');

})