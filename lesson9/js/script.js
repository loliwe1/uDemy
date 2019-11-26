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

    info.addEventListener('click', function (event) {
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
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }



        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            "seconds": seconds
        }
    }

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
    function modal(){
        document.body.style.overflow = 'hidden';
        overlay.style.display = 'block';
        this.classList.add('more-splash');
    };
    function closeM(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    };

    more.addEventListener('click', modal);
    close.addEventListener('click', closeM);
    infoTab.addEventListener('click', function(event){
        let target = event.target;
        if(target.classList.contains('description-btn')){
            modal();
        }   
    })


    
});