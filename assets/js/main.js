jQuery(document).ready(function($) {

   // Temporarily file includes
   $(function() {
      var includes = $('[data-include]');
      jQuery.each(includes, function(){
         var file = 'views/' + $(this).data('include') + '.html';
         $(this).load(file);
      });
   });

   // Carousel
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

   // Hamburger menu
   $(document).on('click', '.js-hamburger', function() {
      $(this).toggleClass('is-open');
      $('.js-header-nav').toggleClass('is-open');
   })
   // Filter toggler (mobile)
   .on('click', '.js-filter-toggler', function() {
      $(this).parents('.js-filter').toggleClass('is-open');
   })
   // Demo autocomplete show and hide
   .on('focus', '.js-autocomplete-input', function() {
      $(this).parents('.js-autocomplete').find('.js-autocomplete-results').fadeIn(100);
   })
   .on('blur', '.js-autocomplete-input', function() {
      $(this).parents('.js-autocomplete').find('.js-autocomplete-results').fadeOut(100);
   });

});
