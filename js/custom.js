/*
* ---------------------------------------------
* Filename: custom.js
* Version:  1.0.0
* -----------------------------------------------
*/

(function ($, Drupal) {
  Drupal.behaviors.portfolioMinimalTheme = {
    attach: function (context, settings) {
      // Hide empty social icons
      $('.social-icons li', context).each(function () {
        var url = $(this).find('a').attr('href');
        if (!url) {
          $(this).hide();
        }
      });

      // Assign unique class to front page blocks
      $('.front-blocks .region', context).each(function (index) {
        if (!$(this).hasClass('frontuniqueblocks' + (index + 1))) {
          $(this).addClass('frontuniqueblocks' + (index + 1));
        }
      });

      // Remove 'minimal' class on non-front pages
      $('.not-front div', context).removeClass('minimal');

      // Add animation classes to specific sections
      $('.frontblockwrap .region .block > div', context).addClass('minimal');
      $('.region-aboutme .block > div', context).addClass('bounceIn');
      $('.projects .project-list .project-item', context).addClass('minimal bounceInDown');
      $('.region-keyskills .publications', context).addClass('bounceInUp');
      $('.region-education .block > div', context).addClass('bounceIn');
      $('.region-contact .block > div', context).addClass('bounceInUp');
      $('#post-content .block, #post-content .content > div', context).addClass('minimal bounceInDown');

      // Initialize WOW.js (Only once to prevent re-initialization)
      if (typeof WOW !== 'undefined') {
        new WOW({
          boxClass: 'minimal',
          animateClass: 'animated',
          offset: 0
        }).init();
      }
    }
  };
})(jQuery, Drupal);

