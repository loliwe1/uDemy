$(document).ready(function(){
    $('.main_btna').on('click', function(){
        $('.overlay').fadeIn();
        $('.modal').slideDown();
    });
    $('.main_btn').on('click', function(){
        $('.overlay').fadeIn();
        $('.modal').slideDown();
    });
    $('span').on('click', function(){
        $('.overlay').fadeOut();
        $('.modal').slideUp();
    });
});

// document.querySelector('.main_btna').addEventListener('click', function(){
//     this.style.display = 'none';
// })