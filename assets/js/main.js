jQuery(document).ready(function($) {

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

   $('.js-hamburger').click(function() {
      $(this).toggleClass('is-open');
      $('.js-header-nav').toggleClass('is-open');
   });

});
