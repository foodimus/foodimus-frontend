jQuery(document).ready(function($) {

   const glide = new Glide('.glide', {
      type: 'carousel',
      perView: 4,
      gap: 20,
      breakpoints: {
         800: {
            perView: 3
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
