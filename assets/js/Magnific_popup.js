$(document).ready(function(){
    $('.photo').magnificPopup({
      type: 'image',
      mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out'
      }
      });
      $('.gallery-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-no-margins mfp-with-zoom',
          image: {
          verticalFit: true
        },
        zoom: {
          enabled: true,
          duration: 300,
          easing: 'ease-in-out'
        }
        });

      // $('.gallery-link').magnificPopup({
      //   type: 'image',
      //   closeOnContentClick: true,
      //   closeBtnInside: false,
      //   mainClass: 'mfp-with-zoom mfp-img-mobile',
      //   image: {
      //     verticalFit: true,
      //     titleSrc: function(item) {
      //       return item.el.find('figcaption').text() || item.el.attr('title');
      //     }
      //   },
      //   zoom: {
      //     enabled: true
      //   },
      //   // duration: 300
      //   gallery: {
      //     enabled: true,
      //     navigateByImgClick: false,
      //     tCounter: ''
      //   },
      //   disableOn: function() {
      //     return $(window).width() > 640;
      //   }
      // });
    
    // $('.video').magnificPopup({
    //   // disableOn: 700,
    //   type: 'iframe',
    //   // removalDelay: 160,
    //   // preloader: false,
    //   // fixedContentPos: false,
    //   mainClass: 'mfp-fade mfp-no-margins mfp-with-zoom',
    //   image: {
    //   verticalFit: true
    //   },
    //   zoom: {
    //     enabled: true
    //   },
    //   iframe: {
    //       markup: '<div class="mfp-iframe-scaler">'+
    //                 '<div class="mfp-close"></div>'+
    //                 '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
    //               '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
        
    //       patterns: {
    //         youtube: {
    //           index: 'youtube.com/',
        
    //           id: 'v=', 
        
    //           src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
    //         },
    //         vimeo: {
    //           index: 'vimeo.com/',
    //           id: '/',
    //           src: '//player.vimeo.com/video/%id%?autoplay=1'
    //         },
    //         gmaps: {
    //           index: '//maps.google.',
    //           src: '%id%&output=embed'
    //         }
        
    //       },
        
    //       srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    //     }
    // });
});