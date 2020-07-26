jQuery(document).ready(function($) {

   $(function() {
      var includes = $('[data-include]');
      jQuery.each(includes, function(){
         var file = 'views/' + $(this).data('include') + '.html';
         $(this).load(file);
      });
   });

   $(function() {

      if (typeof Glide != 'undefined') {
         const glide = new Glide('.glide', {
            type: 'carousel',
            perView: 4,
            gap: 0,
            breakpoints: {
               800: {
                  perView: 2
               },
               600: {
                  perView: 1
               }
            }
         });
         glide.mount();
      }
   });

   $(document).on('click', '.js-hamburger', function() {
      $(this).toggleClass('is-open');
      $('.js-header-nav').toggleClass('is-open');
   });

});
