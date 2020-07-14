jQuery(document).ready(function($) {

   $('.js-hamburger').click(function() {
      $(this).toggleClass('is-open');
      $('.js-header-nav').toggleClass('is-open');
   });

});
