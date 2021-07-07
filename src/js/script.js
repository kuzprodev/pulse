$(document).ready(function () {
    $('.carousel__inner').slick({
        dots: false,
        speed: 1200,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
//   slick slider

//замена jquery
$('.may-container').css('border', '1px solid red');
document.querySelector('.my-container');
document.querySelectorAll('.my-container');

const myBtn = document.querySelectorAll('.button');


myBtns.forEach((item, i, arr) => {
    item.style.color = 'red';
    console.log(`Номер элемента по порядку: ${i}`);
    console.log(`Внутри массива: ${arr}`);
});


//Jquery
$('.button').on('click', () => {
    console.log('Working on...');
})

//Pure JS
const btn = document.querySelector('.button');

btn.addEventListener('click', () => {
    console.log('Working on...');
})

//Jquery
$('.button').addClass('active');
$('.button').removeClass('active');
$('.button').toggleClass('active');
//Pure JS
const btn = document.querySelector('.button');

btn.classList.add('active');
btn.classList.remove('active');
btn.classList.toggle('active');
btn.classList.contains('active');

//Jquery animation
$('.button').on('click', () => {
    $('.box').slideToggle('slow')
})

//Jquery
const elems = $('.elements');
elems.each();
elems.map();
elems.closest();
elems[0].clone();

//Pure JS
const elems = document.querySelectorAll('.elements');

elems.each();
elems.map();
elems.closest();
elems[0].cloneNode(true);


//jquery ajax
$.ajax({
    type: 'GET',
    url: 'server.php',
    success: function (msg) {
        alert('Прибыли данные:' + msg)
    }
})

//Pure JS
fetch('server.php')
    .then(res => res.json())
    .then(res => console.log(res))
    .then(err => console.log(err))