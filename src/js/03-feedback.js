import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

// console.log(localStorage);
// localStorage.setItem("feedback-form-state", "")
// заменяем пратерн "магические числа и строки" на константу и используем ее
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
// ====нашла ссылки на элементы флрмы и поля для ввода текста===============
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
};
// ========повесила слушателя события сабмит на форму ======================
refs.form.addEventListener('submit', onFormSubmit);
// ========повесила слушателя события инпут на поле для ввода текста==========
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// ========повесила слушателя события инпут на форму======================
refs.form.addEventListener('input', throttle(onFormDataInput, 500));
 

// ===вызываем функцию, которая возвращает значение из инпутаб из локалсторедж
// populateTexarea();
 populateFormData();

// ========функция обработки события сабмит============
function onFormSubmit(event) {
    // ===запрещаем браузеру действия по умолчанию - перезан=грузку страницы=====
    event.preventDefault();
    //  проверяем, если хоть одно поле пустое, то форма не отправляется=====
    if (!formData[refs.input.name] || !formData[refs.textarea.name]) {
        console.log("заполните все поля формы");
    }
    else {
        // ===выводим объект с полями email, message и текущими их значениями в консоль.
    console.log(formData);
        console.log('отправляем форму');
        // ====очищаем форму после отправки формы====
        event.currentTarget.reset();
        // ====и после отправки формы очищаем локалсторедж тоже 
    localStorage.removeItem(STORAGE_KEY);
    formData[refs.input.name] = '';
    formData[refs.textarea.name] = '';
    // console.log(formData);
    }
};
// ========функция обработки события инпут=============
function onFormDataInput(e) {
    // console.log(e.target.name);
    // console.log(e.target.value);
    
    // =====записываем в обьект формдата ключ-значение====
    
        formData[e.target.name] = e.target.value;
        // console.log(formData);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
        // console.log(formData);
    };

function populateFormData() {
    // ==переменная сейвдДата хранит данные инпута из локалсторидж как строку
    const savedData = localStorage.getItem(STORAGE_KEY);
    // console.log(savedData);
    // =====преобразуем  строку в валидные данные (обьект)
    const parseddData = JSON.parse(savedData);
     // ===выводим объект с полями email, message и текущими их значениями в консоль.
    console.log(parseddData);
    // проверяем - не пустой ли сейвДата, если он есть, то дальше с ним работаем. Если его нету - ничего не делаем
    if (savedData) {
            // console.log(formData);
            // =====и обновляю формдата - добавляю туда эти значения
            if (parseddData.email) {
                refs.input.value = parseddData.email;
                formData[refs.input.name] = parseddData.email;
            }
            if (parseddData.message) {
                refs.textarea.value = parseddData.message;
                formData[refs.textarea.name] = parseddData.message;
            }
        }
    }


// =========ДЛЯ ОДНОГО ПОЛЯ ФОРМЫ==============
// function onTextareaInput(event) {
//     // ===значение в поле ввода текста====
//     const message = event.target.value;
//     console.log(message);
//     // ===записываем значение ввода в локалсторидж, это всегда строка, поэтому преобразовывать не нужно)
//     localStorage.setItem(STORAGE_KEY, message)
// };

// function populateTexarea() {
//     // ==переменная сейвдмесседж хранит данные инпута из локалсторидж
//     const savedMessage = localStorage.getItem(STORAGE_KEY);
 
//     // проверяем - не пустой ли сейвмесседж, если он есть, то дальше с ним работаем. Если его нету - ничего не делаем
//     if (savedMessage) {
//         console.log(savedMessage);
//         // ====обновляем  DOM - в поле текстэриа записываем значение сейвдмесседжа
//         refs.textarea.value = savedMessage;
//     }
//  };