$('.navbar-nav>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('#contact-form').css('display', 'none');

$('#contact-form').submit(function (e) {
    e.preventDefault();
    console.log('Formularz wysłany')
});

$('#form-button').click(function(){
    $('#contact-form').css('display', 'block');
    $(this).css('display', 'none');
});