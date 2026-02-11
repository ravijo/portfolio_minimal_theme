# portfolio_minimal_theme
A responsive theme originally designed for Drupal 7, now upgraded for Drupal 10/11

_See [References](#references) for the original Drupal 7 theme._


## Todo
### QUICK WINS (5-15 mins each)
- [x] Remove bundled animate.css and use CDN version
- [x] Remove bundled font-awesome.css and use CDN/Composer
- [x] Remove bundled wow.min.js and use CDN version
- [x] Remove Font Awesome font files from theme
- [x] Fix insecure HTTP Google Fonts import (change to HTTPS)
- [x] Replace outdated CSS reset with modern version
- [x] Add defer/async attributes to JavaScript
- [x] Update FA4 to FA6 class names in templates
- [x] Update Animate.css class names if used
- [x] Add screenshots/GIFs to README
- [x] Update library definitions to use VERSION token
- [x] Remove deprecated features from .info.yml
- [x] Add preconnect hints for external resources
- [x] Add CSS custom properties for colors and spacing
- [x] Remove all vendor prefixes and add autoprefixer to build process
- [x] Remove unused CSS (file icons if not needed)
- [ ] Replace fixed pixel widths with relative units and clamp()
- [ ] Add prefers-reduced-motion support

### MEDIUM (1-2 hours each)
- [ ] Remove fixed positioning from navigation (use sticky)

### HARD (2-4 hours each)
- [x] Convert desktop-first to mobile-first media queries in media.css
- [ ] Add semantic HTML5 tags throughout templates
- [ ] Reorganize CSS into modular files (base/layout/components)


## References
1. [Portfolio Zymphonies Theme](https://www.drupal.org/project/portfolio_zymphonies_theme)
2. [Theming Drupal](https://www.drupal.org/docs/develop/theming-drupal)
3. [Twig Template naming conventions](https://www.drupal.org/node/2354645)
4. [Drupal API page.html.twig](https://api.drupal.org/api/drupal/core%21modules%21system%21templates%21page.html.twig/10)
