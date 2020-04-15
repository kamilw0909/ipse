$(document).ready(function(){
    $('.navbar-nav>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    
    $('#contact-form').css('display', 'none');
    
    $('#form-button').click(function(){
        $('#contact-form').css('display', 'block');
        $(this).css('display', 'none');
    });
    
    $('#hidden_iframe').css('display', 'none');

});
