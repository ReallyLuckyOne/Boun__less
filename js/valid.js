"use strict"

document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('fContact');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        if (error === 0) {
            alert('Ви все ввели вірно, уря. І форма би відіслалась, якби не відсутність знань :(');
        } else {
            alert('Підсвічування червоним вказує на відсутність або неправильність введення даних. Перевірте і натисніть ще раз submit. При правильному введенні виведеться інше повідомлення, а червоне підсвічування зникне. Дякую :)');
        }
    }

    function formValidate(form) {

        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {

            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {

                if (emailTest(input)) {

                    formAddError(input);
                    error++;
                }
            } else {

                if (input.value === '') {

                    formAddError(input);
                    error++;
                }
            }

        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});