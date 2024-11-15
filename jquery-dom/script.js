$(document).ready(function() {
    var shoppingCartItems = 0;

    // ADD TO SHOPPING CART BUTTON
    $('.add').on('click', function(event) {
        var itemName = $(this).attr('name');
        var itemID= $(this).attr('id');

        if(shoppingCartItems === 0){
            $('#empty').hide();
        }

        shoppingCartItems++;
        var cartLink = "<li class='cartItem' name='" + itemID + "'>" + itemName + " <span class='del'>Remove</span></li>";

        $('#cart').append(cartLink);
        $(this).hide();
      });

    // REMOVE FROM SHOPPING CART BUTTON
    $('#cart').on('click', '.del', function(event) {
        $(this).closest('.cartItem').remove();
        shoppingCartItems--;

        if (shoppingCartItems === 0) {
        $('#empty').show();
        }
        var delName = '#' + $(this).parent().attr('name');
        console.log(delName)
        $(delName).show();
    });
    
    // ADD A RATING BUTTON
    $('.rating').on('click','img', function(event){
        $(this).find('img').attr('src', 'staroff.gif');
        $(this).attr('src', 'staron.gif').prevAll().attr('src', 'staron.gif');
        $(this).attr('src', 'staron.gif').nextAll().attr('src', 'staroff.gif');
    });
 });