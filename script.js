$(document).ready(function() {
    // Hover effect on the About Us link
    $('.about-us-link').hover(
        function() {
            $(this).css('background-color', '#575757');
            $(this).css('transform', 'scale(1.1)');
        },
        function() {
            $(this).css('background-color', 'transparent');
            $(this).css('transform', 'scale(1)');
        }
    );

    // Click effect on the About Us header
    $('.about-content h1').click(function() {
        $(this).animate({
            fontSize: '3.2em',
            marginBottom: '30px',
        }, 500).animate({
            fontSize: '2.8em',
            marginBottom: '20px',
        }, 500);
    });

    // Fade-in effect for the About Content section
    $('.about-content').hide().fadeIn(2000);

    $(".title, .about-content h1").hover(
        function() {
            $(this).css("color", "gray"); 
        },
        function() {
            $(this).css("color", "white");
        }
    );
});