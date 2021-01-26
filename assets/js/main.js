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

         // Glide for planning days
         const options = {
            type: 'carousel',
            perView: 4,
            gap: 0,
            breakpoints: {
               800: {
                  perView: 3
               },
               600: {
                  perView: 2
               }
            }
         };
         const planningCarousels = document.querySelectorAll(".js-glide-planning-days");
         Object.values(planningCarousels).map(carousel => {
            new Glide(carousel, options).mount();
         });

         // Glide for meal plans
         if ($('.js-carousel-mealplans').length > 0) {
            const mealplanCarousel = new Glide('.js-carousel-mealplans', {
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
            mealplanCarousel.mount();
         }

         if ($('.js-carousel').length > 0) {
            const carousel = new Glide('.js-carousel', {
               type: 'carousel',
               perView: 3,
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
            carousel.mount();
         }

      }
   });

   // Hamburger menu
   $(document).on('click', '.js-hamburger', function() {
      $(this).toggleClass('is-open');
      $('.js-header-nav').toggleClass('is-open');
   })

   // Dropdown menu
   $(document).on('click', '.js-dropdown-toggler', function() {
      const target = $(this).parents('.js-dropdown-container').find('.js-dropdown-menu');
      if (target.length > 0) {
         target.toggleClass('is-open');
      }
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

   // Switcher demo
   $(document).on('click', '.js-switcher', function() {
      $(this).toggleClass('is-on is-off');
   });

   // Nav tab
   $(document).on('click', '[data-show-tab]', function() {
      const target = $(this).data('show-tab');
      $(this).addClass('is-current').siblings('.js-nav-tab').removeClass('is-current');
      $(target).addClass('is-current').siblings('.js-tab-pane').removeClass('is-current');
   });

   // Toggler demo
   $(document).on('click', '.toggler[data-toggle]', function() {
      const target = $(this).data('toggle');
      $(this).toggleClass('is-open');
      $(target).toggle().toggleClass('d-none');
   });

   // Hover text demo
   (function() {

      let defaultText = '';
      let hoverText = '';

      $(document).on('mouseenter', '[data-hover-text]', function() {
         defaultText = $(this).text();
         hoverText = $(this).data('hover-text');
         $(this).text(hoverText);
      }).on('mouseleave', '[data-hover-text]', function() {
         $(this).text(defaultText);
      });
   })();

});
