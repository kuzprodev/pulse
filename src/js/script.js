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
    //   slick slider

    //tabs
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    //for tabs link btn
    // $('.catalog-item__link').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
    //     })
    // });
    // $('.catalog-item__back').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
    //     })
    // });


    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
            })
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //for modal
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow')
    });
    $('.modal__close').on('click', function () {
        $('.overlay,#consultation,#order, #thanks').fadeOut('slow')
    });
    $('.button_mini').on('click', function () {
        $('.overlay, #order').fadeIn('slow')
    });
    // .fadeOut() скрыть аккуратно
    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text()); //вытаскиваем и вставляем текст
        })
    });


    // for form validation
    // $('#consultation form').validate({
    //     rules: {
    //         name: "required",
    //         phone: "required",
    //         email: {
    //             required: true,
    //             email: true
    //         }
    //     },
    //     messages: {
    //         name: "Пожалуйста, введите свое имя",
    //         phone: "Пожалуйста, введите свой номер телефона"

    //             ,
    //         email: {
    //             required: "Пожалуйста, введите свою почту",
    //             email: "Неправильно введен адрес почты"
    //         }
    //     }

    // });
    // $('#order form').validate({
    //     // rules:{
    //     //     name:"required",
    //     //     phone:"required",
    //     //     email:{
    //     //         required:true,
    //     //         email:true
    //     //     }
    //     // },
    //     // messages: {
    //     //     name: "Пожалуйста, введите свое имя",
    //     //     phone:"Пожалуйста, введите свой номер телефона"

    //     //     ,
    //     //     email: {
    //     //       required: "Пожалуйста, введите свою почту",
    //     //       email: "Неправильно введен адрес почты"
    //     //     }
    //     //   }
    //     rules: {
    //         name: {
    //             required: true,
    //             minlength: 2
    //         }
    //     },
    //     messages: {
    //         name: {
    //             required: "We need your email address to contact you",
    //             minlength: jQuery.validator.format("At least {0} characters required!")
    //         }
    //     }

    // });
    // $("#myform").validate({
    //     errorClass: "invalid",
    //     validClass: "success",

    //   });


    function valideForm(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, введите свое имя",
                phone: "Пожалуйста, введите свой номер телефона"

                    ,
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    };
    valideForm('#consultation-form');
    valideForm('#consultation form');
    valideForm('#order form');
    // for  mask form
    $('input[name=phone]').mask('+7(999) 999-9999'); //ннада убрат type="number"

    // отправка форм
    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()

        }).done(function () {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('#overlay,#thanks').fadeIn('slow')
            $('form').trigger('reset')
        });
        return false
    })


//Smooth scroll and pageup
$(window).scroll(function(){
    if($(this).scrollTop()>1600){
        $('.pageup').fadeIn();
    }else{
        $('.pageup').fadeOut();
    }
});
$("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

});










// //замена jquery
// $('.may-container').css('border', '1px solid red');
// document.querySelector('.my-container');
// document.querySelectorAll('.my-container');

// const myBtn = document.querySelectorAll('.button');


// myBtns.forEach((item, i, arr) => {
//     item.style.color = 'red';
//     console.log(`Номер элемента по порядку: ${i}`);
//     console.log(`Внутри массива: ${arr}`);
// });


// //Jquery
// $('.button').on('click', () => {
//     console.log('Working on...');
// })

// //Pure JS
// const btn = document.querySelector('.button');

// btn.addEventListener('click', () => {
//     console.log('Working on...');
// })

// //Jquery
// $('.button').addClass('active');
// $('.button').removeClass('active');
// $('.button').toggleClass('active');
// //Pure JS
// const btn = document.querySelector('.button');

// btn.classList.add('active');
// btn.classList.remove('active');
// btn.classList.toggle('active');
// btn.classList.contains('active');

// //Jquery animation
// $('.button').on('click', () => {
//     $('.box').slideToggle('slow')
// })

// //Jquery
// const elems = $('.elements');
// elems.each();
// elems.map();
// elems.closest();
// elems[0].clone();

// //Pure JS
// const elems = document.querySelectorAll('.elements');

// elems.each();
// elems.map();
// elems.closest();
// elems[0].cloneNode(true);


// //jquery ajax
// $.ajax({
//     type: 'GET',
//     url: 'server.php',
//     success: function (msg) {
//         alert('Прибыли данные:' + msg)
//     }
// })

// //Pure JS
// fetch('server.php')
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .then(err => console.log(err))