$(document).ready(function() {
    if ($('#iview').size() > 0)  {
        $('#iview').iView({
            fx: 'strip-up-right',
            directionNav: false,
            controlNav: true,
            controlNavNextPrev: false,
            controlNavTooltip: false,
            controlNavHoverOpacity: 1,
            timer:'',
            strips: 8,
            easing: 'easeInCubic',
            animationSpeed: 1000,
            pauseTime: 2500
        });
    }

//    checkboxes
    if ($('input.custom').size() > 0) {
        $('input.custom').prettyCheckable();
    }


//    priceRange
    if ($("#priceRange").size() > 0) {


        $("#priceRange").slider({
            range : true,
            min   : 0,
            max   : 10000,
            values: [ 1000, 10000 ],
            slide : function (event, ui) {
                var strValFrom = ui.values[ 0 ] + '', strValTo = ui.values[ 1 ] + '';
                $("#priceRangeFrom").val(strValFrom.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,
                                                            '$1 '));
                $("#priceRangeTo").val(strValTo.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
            }
        });
        var strValFromGlobal = $("#priceRange").slider("values", 0) + '',
            strValToGlobal = $("#priceRange").slider("values", 1) + '';
        $("#priceRangeFrom").val(strValFromGlobal.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        $("#priceRangeTo").val(strValToGlobal.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    }

//   rating http://www.radioactivethinking.com/rateit/example/example.htm#ex_11

    /*
    //we bind only to the rateit controls within the products div
     $('#products .rateit').bind('rated reset', function (e) {
         var ri = $(this);

         //if the use pressed reset, it will get value: 0 (to be compatible with the HTML range control), we could check if e.type == 'reset', and then set the value to  null .
         var value = ri.rateit('value');
         var productID = ri.data('productid'); // if the product id was in some hidden field: ri.closest('li').find('input[name="productid"]').val()

         //maybe we want to disable voting?
         ri.rateit('readonly', true);

         $.ajax({
             url: 'rateit.aspx', //your server side script
             data: { id: productID, value: value }, //our data
             type: 'POST',
             success: function (data) {
                 $('#response').append('<li>' + data + '</li>');

             },
             error: function (jxhr, msg, err) {
                 $('#response').append('<li style="color:red">' + msg + '</li>');
             }
         });
     });
    */

//    selects

    if ($("select[data-custom=true]").size() > 0) {
        $("select[data-custom=true]").selectBox();
    }


//    carousel in product page

    if ($('#productSlider').size() > 0) {
        $('#productSlider').tinycarousel({ display: 4, axis: 'y' });

        $('#productSlider li a').click(function (e) {
            e.preventDefault();
            var fThis = $(this),
                href = fThis.attr('href'),
                bigImg = $('#productImg');

            bigImg.attr('src', href);
            fThis.parent().siblings('li').removeClass('active');
            fThis.parent().addClass('active');
        });
    }

//    product tabs

    if ($("#productTabs").size() > 0) {
       $("#productTabs").tabs();
    }


    if ($('[data-control=history-collap]').size() > 0)  {
        $('[data-control=history-collap]').click(function (e) {
            e.preventDefault();
            if ($(this).hasClass('up')) {
                $(this).removeClass('up');
                $(this).parents('[data-control=history-row]').next('[data-control=history-details]').removeClass('active');
            } else {
                $(this).parents('[data-control=history-row]').next('[data-control=history-details]').addClass('active');
                $(this).addClass('up');
            }

        });
    }



    if ($('#slider-product').size() > 0) {
        $('#slider-product').tinycarousel({ display: 3});
    }


    jQuery(".ie7 input[type='text'], .ie8 input[type='text'], .ie9 input[type='text']").each(
        function() {
            if (jQuery(this).val() == "" && jQuery(this).attr("placeholder") != "") {
                jQuery(this).val(jQuery(this).attr("placeholder"));
                jQuery(this).focus(function() {
                    if (jQuery(this).val() == jQuery(this).attr("placeholder")) jQuery(this).val("");
                });
                jQuery(this).blur(function() {
                    if (jQuery(this).val() == "") jQuery(this).val(jQuery(this).attr("placeholder"));
                });
            }
        }
    );

});