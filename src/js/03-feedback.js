// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.

import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form")
const email = document.querySelector("input");
const message = document.querySelector("textarea");
const formData = {};
const SAVED_INPUT = "feedback-form-state";
const savedInfoJSON = localStorage.getItem(SAVED_INPUT);
const parsedFormData = JSON.parse(savedInfoJSON);

const onFormInput = function (event) {
    formData.email = email.value;
    formData.message = message.value;

    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem(SAVED_INPUT, formDataJSON);
};

const onFormSubmit = function (event) {
    event.preventDefault();

    if (email.value === '' || message.value === '') {
      return alert('Будь ласка, заповніть усі поля!');
    }

    const currentForm = { email: email.value, message: message.value };
    console.log(currentForm);

    event.currentTarget.reset();
    localStorage.removeItem(SAVED_INPUT);
};

form.addEventListener('input', throttle(onFormInput,500));
form.addEventListener('submit', onFormSubmit);


function updateForm() {

    if (savedInfoJSON) {
    email.value = parsedFormData.email || '';
    message.value = parsedFormData.message || '';
    } 
}

updateForm();
