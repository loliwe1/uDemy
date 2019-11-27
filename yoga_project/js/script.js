window.addEventListener('DOMContentLoaded', function () {
    'use strict'
    // TABS----------------------------------------------------------------
    let tab = document.querySelectorAll('.info-header-tab');
    let info = document.querySelector('.info-header');
    let tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        };
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;

                }
            }
        }
    })

    // TIMER--------------------------------------------------------------
    let deadline = '2019-11-27';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());

        let seconds = Math.floor(t / 1000 % 60);
        let minutes = Math.floor(t / 1000 / 60 % 60);
        let hours = Math.floor(t / 1000 / 60 / 60);
        if (t <= 0) {
            seconds = '00';
            minutes = '00';
            hours = '00';
        }
        if (seconds < 10 && seconds >= 1) {
            seconds = '0' + seconds;
        }
        if (hours < 10 && hours >= 1) {
            hours = '0' + hours;
        }
        if (minutes < 10 && minutes >= 1) {
            minutes = '0' + minutes;
        }
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            "seconds": seconds
        }
    };

    function setClock(id, endtime) {
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);

    // Modal-----------------------------------------------------------------

    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');
    let infoTab = document.querySelector('.info');

    function modal() {
        document.body.style.overflow = 'hidden';
        overlay.style.display = 'block';
        this.classList.add('more-splash');
    };

    function closeM() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    };

    more.addEventListener('click', modal);
    close.addEventListener('click', closeM);

    infoTab.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('description-btn')) {
            document.body.style.overflow = 'hidden';
            overlay.style.display = 'block';
            infoTab.classList.add('more-splash');
        }
    });

    // Form(server)---------------------------------------------------------------------------

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы свяжемся с вами!',
        fuilure: 'Что-то пошло не так'
    };
    let form = document.querySelector('.main-form');
    let input = form.getElementsByTagName('input');

    let contactForm = document.querySelector('#form');
    let contactFormInput = contactForm.getElementsByTagName('input');

    let statusMesage = document.createElement('div');
    statusMesage.classList.add('status');

    function serverRequest(form, input) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            form.append(statusMesage);
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8') //Json
            // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); - AppData
            let formData = new FormData(form);
            let obj = {};
            formData.forEach((value, key) => obj[key] = value);
            let json = JSON.stringify(obj);
            request.send(json);

            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                    statusMesage.innerHTML = message.loading;

                } else if (request.readyState === 4 && request.status === 200) {
                    statusMesage.innerHTML = message.success;
                } else {
                    statusMesage.innerHTML = message.fuilure;
                }
            });

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        })
    };

    serverRequest(form, input);
    serverRequest(contactForm, contactFormInput);

    // Slider---------------------------------------------------------------------------------------------------------
    let slideIndex = 1;
    let slides = document.querySelectorAll('.slider-item');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let dotsWrap = document.querySelector('.slider-dots');
    let dots = document.querySelectorAll('.dot');
    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n)
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });
    next.addEventListener('click', function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event){
        let target = event.target;
        for(let i=0; i<dots.length+1; i++){
            if(target.classList.contains('dot') && target === dots[i-1]){
                currentSlide(i);
            }
        }

    })



});