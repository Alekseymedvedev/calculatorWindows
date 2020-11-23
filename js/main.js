$(function () {
    $('.popup-modal').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#username',
      modal: true,
      slidesPerView: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
      e.preventDefault();
      $.magnificPopup.close();
    });
  });



let formSelect1 = document.querySelector('.form__select-1');
let formSelect2 = document.querySelector('.form__select-2');
let formSelect3 = document.querySelector('.form__select-3');
let formSelect4 = document.querySelector('.form__select-4');
let formSelect5 = document.querySelector('.form__select-5');
let formSelect6 = document.querySelector('.form__select-6');
let formSelect7 = document.querySelector('.form__select-7');
let formSelect8 = document.querySelector('.form__select-8');
let formSelect9 = document.querySelector('.form__select-9');
let formSelect10 = document.querySelector('.form__select-10');
let formSelect11 = document.querySelector('.form__select-11');
let formInput = document.querySelector('.form__input');
let formSumm = document.querySelector('.form__summ');

function summ() {
    formInput.value = parseInt(formSelect1.value) + parseInt(formSelect2.value) + parseInt(formSelect3.value) +
        parseInt(formSelect4.value) + parseInt(formSelect5.value) + parseInt(formSelect6.value) + parseInt(formSelect7.value)
        + parseInt(formSelect8.value)+ parseInt(formSelect9.value)+ parseInt(formSelect10.value)+ parseInt(formSelect11.value);
}
formSelect1.onchange = summ;
formSelect2.onchange = summ;
formSelect3.onchange = summ;
formSelect4.onchange = summ;
formSelect5.onchange = summ;
formSelect6.onchange = summ;
formSelect7.onchange = summ;
formSelect8.onchange = summ;
formSelect9.onchange = summ;
formSelect10.onchange = summ;
formSelect11.onchange = summ;