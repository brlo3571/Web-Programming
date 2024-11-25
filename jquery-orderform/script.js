$(document).ready(function () {
    // name
    $("#name").blur(function () {
      var name = $(this).val().trim();
      if (name === "") {
        $("#nameErr").text("Name is required.");
      } else {
        $("#nameErr").text("");
      }
    });
  
    // email checker
    $("#email").blur(function () {
      var email = $(this).val().trim();
      var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (email === "") {
        $("#emailErr").text("Email is required.");
      } else if (!emailRegex.test(email)) {
        $("#emailErr").text("Please enter a valid email address.");
      } else {
        $("#emailErr").text("");
      }
    });
  
    // billing adress checker
    $("#address").blur(function () {
      var address = $(this).val().trim();
      if (address === "") {
        $("#addressErr").text("Billing address is required.");
      } else {
        $("#addressErr").text("");
      }
    });
  
    // city checker
    $("#city").blur(function () {
      var city = $(this).val().trim();
      if (city === "") {
        $("#cityErr").text("City is required.");
      } else {
        $("#cityErr").text("");
      }
    });
  
    // zip code checker
    $("#zip").blur(function () {
      var zip = $(this).val().trim();
      var zipRegex = /^\d{5}$/;
      if (zip === "") {
        $("#zipErr").text("Zip code is required.");
      } else if (!zipRegex.test(zip)) {
        $("#zipErr").text("Zip code must be 5 numeric characters.");
      } else {
        $("#zipErr").text("");
      }
    });
  
    // shipping adress chcker
    $("#shipaddr").blur(function () {
      var shipaddr = $(this).val().trim();
      if (shipaddr === "") {
        $("#shipaddrErr").text("Shipping address is required.");
      } else {
        $("#shipaddrErr").text("");
      }
    });
  
    // shipping city checker
    $("#shipcity").blur(function () {
      var shipcity = $(this).val().trim();
      if (shipcity === "") {
        $("#shipcityErr").text("Shipping city is required.");
      } else {
        $("#shipcityErr").text("");
      }
    });
  
    // Shipping Zip Code checker
    $("#shipzip").blur(function () {
      var shipzip = $(this).val().trim();
      var zipRegex = /^\d{5}$/;
      if (shipzip === "") {
        $("#shipzipErr").text("Shipping zip code is required.");
      } else if (!zipRegex.test(shipzip)) {
        $("#shipzipErr").text("Shipping zip code must be 5 numeric characters.");
      } else {
        $("#shipzipErr").text("");
      }
    });

    // check for checkbox thing
    $('#copy').change(function () {
        if ($(this).prop('checked')) {
            console.log('checked');
            var address = $('#address').val().trim();
            var city = $('#city').val().trim();
            var zip = $('#zip').val().trim();
    
            console.log(address);
            console.log(city);
            console.log(zip);
            $('#shipaddr').val(address);
            $('#shipcity').val(city);
            $('#shipzip').val(zip);
    
        } else {
            console.log('unchecked');
            $('#shipaddr').val('');
            $('#shipcity').val('');
            $('#shipzip').val('');
        }
    });

    // change selected state in shipp state
    $('#state').change(function(){
        if ($(this).val()) {
            var stateStuff = $(this).val();
            console.log(stateStuff);
            $('#shipstate').val(stateStuff);
        }
    });

    // user moves off a quantity control
    $(".qty").blur(function () {
        let orderTotal = 0;

        $(".qty").each(function () {
            let qty = parseFloat($(this).val().trim());
            if (isNaN(qty)) qty = 0;

            let index = $(this).attr("id");
            let price = parseFloat($("#price" + index).text().trim());
            let total = price * qty;

            $("#total" + index).text(total.toFixed(2));
            orderTotal += total;
        });

        $("#subt").text(orderTotal.toFixed(2));

        let state = $("#shipstate").val();
        let tax = 0;
        if (state === "TX") {
            tax = orderTotal * 0.08;
        }
        $("#tax").text(tax.toFixed(2));

        let shipping = 0;
        if (state === "TX") {
            shipping = 5.00;
        } else if (state === "CA" || state === "NY") {
            shipping = 20.00;
        } else {
            shipping = 10.00;
        }
        $("#ship").text(shipping.toFixed(2));

        let grandTotal = orderTotal + tax + shipping;
        $("#gTotal").text(grandTotal.toFixed(2));
    });
  });