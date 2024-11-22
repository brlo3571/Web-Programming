$(document).ready(function() {
    // mouse over
    $('#thumbs img').mouseover(function(){
        $(this).css('border','solid 3px green')
    });

    // mouse off
    $('#thumbs img').mouseout(function(){
        $(this).css('border','none')
    });

    // Change the src of large image to the src of the clicked img
    $('#thumbs img').each(function(){
        // this changes the large img to small img
        var imgSrc = $(this).attr('src');
        $(this).click(function(){
            $('#lgPic').attr('src', imgSrc);
        });

        // changes large img text to small img text
        var sImgtext = $(this).attr('alt');
        $(this).click(function(){
            $('#lgTitle').text(sImgtext);
        });
    })

    // click large image to take to new window
    $('#lgPic').click(function(){
        var imgUrl = $(this).attr('src');
        open(imgUrl)
    })
});