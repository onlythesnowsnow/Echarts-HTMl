


(function ($) {
    "use strict";
    var mainApp = {
       
        
        gallery_fun: function () {
            /*====================================
                 FOR IMAGE/GALLERY POPUP
            ======================================*/
            $("a.preview").prettyPhoto({
                social_tools: false
            });

            /*====================================
            FOR IMAGE/GALLERY FILTER
            ======================================*/

            // MixItUp plugin
            // http://mixitup.io

            $('#port-folio').mixitup({
                targetSelector: '.portfolio-item',
                filterSelector: '.filter',


            });
        },
      
      
        custom_fun:function()
        {
            /*====================================
             WRITE YOUR   SCRIPTS  BELOW
            ======================================*/




        },

    }
   
   
    $(document).ready(function () {
        mainApp.gallery_fun();
        mainApp.custom_fun();

    });
}(jQuery));


