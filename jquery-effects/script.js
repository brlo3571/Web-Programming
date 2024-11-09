$(document).ready(function() {
    $('#newsSignup').hide();
    $('#slogan').hover(mouseoverFunc, mouseoutFunc);
    $('#rose').animate(
        {
          right: '100px',
          opacity: 1
        },
        {
          duration: 'slow',
          easing: 'swing'
        }
    );
    $('#newsSignup').on('submit', function(event){
    event.preventDefault();
    alert("Thank you for registering");
    $('#newsSignup').slideToggle();
    $('#signuplink').css(
        {
            'opacity': '30%'
        }
    )
    });
});


function openSignup(event){
    event.preventDefault();
    $('#newsSignup').slideToggle();

    if($('#openclose').text() === '+'){
        $('#openclose').html('-');
    } else{
        $('#openclose').html('+');
    }
}

function mouseoverFunc(){
    $(this).fadeOut('normal', 'linear',function(){
        $(this).text('Hand Picked Just for You').fadeIn('slow', 'swing');
    });
}

function mouseoutFunc(){
    $(this).fadeOut('fast', 'swing', function(){
        $(this).text('The Power of Flowers').fadeIn('slow', 'linear');
    });
}