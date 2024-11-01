$(document).ready(function() {
    $('.botanic').hide();
    $('.imgdiv').hide();

    //change color of title thing
    $('h1, h2').hover(mouseoverFunc, mouseoutFunc);

    //click to show botanic name
    $('.flower').click(function(){
        $('.botanic').hide();
        $(this).children('.botanic').show();
    });

    //hover over to see picture
    $('.pic').hover(overPic, outPic);
    
    //key press event thing
    $(document).keypress(function(evt) {
        var keyPressed = String.fromCharCode(evt.which);
        var key = keyPressed.toLowerCase();
        console.log(key);
        window.location = '#' + key;
    });
});
function mouseoverFunc(){
    $(this).css('color', 'red');
}

function mouseoutFunc(){
    $(this).css('color', 'darkgreen');
}

function overPic(evt){
    var xPos = evt.pageX + 150;
	var yPos = evt.pageY;
	console.log('X:' + xPos + ' Y:' + yPos);
    var flowerName = $(this).attr('title');
    console.log(flowerName)
    var imgDivId = '#' + flowerName;
    console.log(imgDivId);
    $(imgDivId).css({
        top: yPos + 'px',
        left: xPos + 'px',
    }).show();
}

function outPic(){
    var flowerName = $(this).attr('title');
    var imgDivId = '#' + flowerName;
    $(imgDivId).hide();
}