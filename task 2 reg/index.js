let name = document.querySelector('#name');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let address = document.querySelector('#address');

let errorName = document.querySelector('#errorName');
let errorEmail = document.querySelector('#errorEmail');
let errorPhone = document.querySelector('#errorPhone');
let errorAddress = document.querySelector('#errorAddress');

function checkValidityName() {
    let validity = name.validity;

    if(validity.valueMissing) {
        errorName.innerHTML = 'Enter your name, please';
    } else {
        errorName.innerHTML = '';
    }
}

function checkValidityEmail() {
    let validity = email.validity;

    if(validity.valueMissing) {
        errorEmail.innerHTML = 'Enter your email, please';
    } else {
        errorEmail.innerHTML = '';
    }
}

function checkValidityPhone() {
    let validity = phone.validity;

    if(validity.valueMissing) {
        errorPhone.innerHTML = 'Enter your phone number, please';
    } else {
        errorPhone.innerHTML = '';
    }
}

function checkValidityAddress() {
    let validity = address.validity;

    if(validity.valueMissing) {
        errorAddress.innerHTML = 'Enter your address, please';
    } else {
        errorAddress.innerHTML = '';
    }
}

let btn = document.querySelector("#button");
btn.addEventListener("click", checkValidityName);
btn.addEventListener("click", checkValidityEmail);
btn.addEventListener("click", checkValidityPhone);
btn.addEventListener("click", checkValidityAddress);

btn.addEventListener('click', (event) => {
    event.preventDefault();

    let user = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        age: document.querySelector('#age').value,
        address: address.value
    }

    fetch ('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    })
        .then (response => response.json())
        .then (user => console.log(user))
        .catch (err => console.log(err))
})