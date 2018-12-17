$(document).keydown(function(e) {
    if (e.keyCode == 27 && $('#nav').hasClass('open')) {
        $('#hidden-nav').removeClass('open-my-nav');
   } if($('#nav').hasClass('open') ){
        $('#nav').removeClass('open')
   }
});
