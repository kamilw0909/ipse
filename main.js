$('.navbar-nav>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('#contact-form').css('display', 'none');

$('#form-button').click(function(){
    $('#contact-form').css('display', 'block');
    $(this).css('display', 'none');
});

$('#contact-form').submit(function (e) {
    e.preventDefault();

    var iframe = document.createElement('iframe');
    var uniqueString = 'UNIQUE_IFRAME_NAME_ON_IPSE_PAGE';
    document.body.appendChild(iframe);
    iframe.style.display = 'none';
    iframe.contentWindow.name = uniqueString;

    $(this).target = uniqueString;

    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val() || 'brak';
    var massege = $('#massege').val();

    $.ajax({
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSf_Q5kUCuQiqxtEzGKbovrP3YPKwZi-G4jky9-85XWEvYwLCQ/formResponse',
        data: {
            'entry.2005620554' :name,
            'entry.1045781291': email,
            'entry.1166974658': phone,
            'entry.839337160': massege
        },
        type: 'POST',
        dataType: 'xml',
        statusCode: {
            0: function(e) {
                console.log('błąd' + ' ', e);
            },
            200: function() {
                console.log('sukces');
            }
        }


    })
});