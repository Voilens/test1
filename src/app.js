// import express from 'express'

import './scss/base.scss';
import './js/rainbows.js';
import './js/unicorns.js';


// const PORT = 9000;

// const app = express()

// app.listen(PORT, () => console.log('сервер запущен' + PORT))

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let menuBtnClose = document.querySelector('.menu-btn-close');

menuBtn.addEventListener('click', function() {
	menu.classList.toggle('active');
});

menuBtnClose.addEventListener('click', function() {
	menu.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(!e.target.closest('.menu') && !e.target.closest('.burger')
      ) {
        document.querySelector('.menu').classList.remove('active');
    }
});

//карусель

  /* этот код помечает картинки, для удобства разработки (пронумеровывает их)*/
let i = 1;
let carousel = document.querySelector('#carousel');
for (let li of carousel.querySelectorAll('li')) {
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}



let viewport = document.getElementById("viewport").offsetWidth; // Получаем видимую часть слайда
let btnNext = document.getElementById("next"); // Получаем кнопку вперёд
let slider = document.querySelector("ul.homepage-categories--carousel"); // Получаем элемент со всеми слайдами
let viewSliders = document.querySelectorAll('.homepage-categories--img'); // Получаем элементы показа слайда
let viewSlide = 0; // Объявляем переменную номера слайда

viewSliders[0].style.backgroundColor = "#E0BEA2"; // Назначаем цвет индикатор слайда зелёный

// Обработка клика на кнопку вперёд
btnNext.addEventListener('click', function() {
  
  viewSliders[viewSlide].style.backgroundColor = "#FFFFFF"; // Делаем индикатор слайда красный
  
  // Условие, если номер слайда меньше четырёх
  if (viewSlide < (viewSliders.length / 4) - 1) { // Если верно то    
      viewSlide++; // Увеличиваем номер слайда на один
    } else { // Иначе
        // Номер слайда равен нулю
        viewSlide = 0;
    }

viewSliders[viewSlide].style.backgroundColor = "#E0BEA2"; // Закрашиваем индикатор слайда в зелёный

slider.style.left = -viewSlide * (viewport + 15) + "px"; // Меняем позицию всего слайда
});



/*
$(document).ready(function(){
  $('.homepage-categories--carousel').slick({
    arrows: true, // если показывать стрелки
    dots:true, // если нужны точки слайдера
    adaptiveHeight: true, //автоматическая адаптивная высота слайдера (добавить в css align-items: flex-start; что бы высота была адаптивной. Она прижмет слайды кверху)
    slidesToShow: 4, // кол-во слайдов, которое нужно отобразить за раз сразу
    slidesToScroll: 3, //кол-во слайдов, кот пролистается за одно нажатие
    speed: 1000, //скорость пролистывания слайдеров. По умолчанию 300миллисекунды
    easing: 'ease', //тип анимации при смене слайда. По умолчанию 'linear'
    infinite: false,// будет ли слайдер бесконечным
  });
});
*/




// let viewport = document.getElementById("viewport").offsetWidth; // Получаем видимую часть слайда
// let btnNext = document.getElementById("next"); // Получаем кнопку вперёд
// //let slider = document.querySelector("ul.homepage-categories--carousel"); // Получаем элемент со всеми слайдами
// let slides = document.querySelectorAll('.homepage-categories--img'); // Получаем элементы показа слайда

// //Создаём массив с новыми слайдами
// let sliders = [];

// // Цикл по слайдам
// for (let i = 0; i < slides.length; ++i) {
//   // Добавляем изображение из слайда 
//   sliders[i] = slides[i].querySelector('img');
//   // Удаляем слайд
//   slides[i].remove()
// }

// // Номер слайда
// let step = 0;
// // Позиция сайда
// let offset = 0;
 
// // Функция для отрисовки слайда
// function drow() {
//     // Создаём элемент слайда
//     let slide = document.createElement("li");
//     // Добавляем касс slide новому элементу
//     slide.classList.add('homepage-categories--img');
//     // Добавляем дочерний элемент контент слайда
//     slide.appendChild(sliders[step]);
//     // Даём позицию для слайда
//     slide.style.left = offset * viewport + "px"
//     // Добавляем слайд в контейнер слайдеров
//     document.querySelector(".homepage-categories--carousel").appendChild(slide)
//     // Если следующий слайд равен числу слайдеров, то
//     if (step + 1 == slides.length) {
//         // Включаем первый слайд
//         step = 0;
//     } else { // Иначе
//         // Увеличиваем номер слайда на один
//         step++
//     }
//     // Назначаем позицию слайда
//     offset = 1
// }

// drow(); drow();

// function left() {
//   // Запрещаем событие кнопки вперёд на клик
//   btnNext.removeEventListener('click', left)
//   // Берём слайды
//   let slides2 = document.querySelectorAll(".homepage-categories--img")
//   // Позиция
//   let offset2 = 0;
//   // Цикл для перемещения слайда
//   for (let i = 0; i < slides2.length; i++) {
//       // Меняем позицию слайда
//       slides2[i].style.left = offset2 * viewport - viewport + "px"
//       // Увеличиваем позицию
//       offset2++;
//   } 
//   // Ставим таймер
//   setTimeout(function () {
//       // Удаляем прошлый слайд
//       slides2[0].remove()
//       // Рисуем следующий слайд
//       drow()
//       // Назначаем событие на кнопку вперёд
//       btnNext.addEventListener("click", left)
//   }, 500)
// }
// btnNext.addEventListener("click", left);
