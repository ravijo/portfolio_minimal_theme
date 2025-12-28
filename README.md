# portfolio_minimal_theme
A responsive theme originally designed for Drupal 7, now upgraded for Drupal 10/11

_See [References](#references) for the original Drupal 7 theme._


## Todo
- [x] Remove bundled animate.css and use CDN version
- [x] Remove bundled font-awesome.css and use CDN/Composer
- [x] Remove bundled wow.min.js and use CDN version
- [x] Remove Font Awesome font files from theme
- [x] Fix insecure HTTP Google Fonts import (change to HTTPS)
- [ ] Test Twig 3 compatibility
- [ ] Test Symfony 6+ compatibility
- [ ] Sanitize all Twig output properly
- [ ] Replace outdated CSS reset with modern version
- [ ] Remove all vendor prefixes and add autoprefixer to build process
- [ ] Convert desktop-first to mobile-first media queries in media.css
- [ ] Replace float-based layouts with CSS Grid
- [ ] Add CSS custom properties for colors and spacing
- [ ] Remove fixed positioning from navigation (use sticky)
- [ ] Remove deprecated features from .info.yml
- [ ] Add semantic HTML5 tags throughout templates
- [ ] Add skip-to-content links
- [ ] Implement keyboard navigation support
- [ ] Fix color contrast ratios (WCAG 2.1 AA)
- [ ] Create Twig template suggestions for nodes/views/blocks
- [ ] Minify CSS/JS for production
- [ ] Add defer/async attributes to JavaScript
- [ ] Create theme settings form
- [ ] Run phpcs with Drupal coding standards
- [ ] Test cross-browser compatibility
- [ ] Test mobile responsiveness
- [ ] Run accessibility audit (axe/WAVE)
- [ ] Update FA4 to FA6 class names in templates
- [ ] Create helper script for subtheme generation
- [ ] Create starter/demo content package
- [ ] Add fallback URLs for CDN resources
- [ ] Replace image-based UI elements with CSS
- [ ] Rename non-semantic classes to BEM naming convention
- [ ] Remove unused CSS (file icons if not needed)
- [ ] Create utility class system
- [ ] Replace fixed pixel widths with relative units and clamp()
- [ ] Replace table-based display hacks with flexbox
- [ ] Update library definitions to use VERSION token
- [ ] Add aria-labels to navigation and interactive elements
- [ ] Add prefers-reduced-motion support
- [ ] Add theme preprocess functions
- [ ] Implement lazy loading for images
- [ ] Add preconnect hints for external resources
- [ ] Add logo upload functionality
- [ ] Add layout toggle options
- [ ] Add code comments throughout CSS/JS
- [ ] Create developer documentation in docs/ folder
- [ ] Add screenshots/GIFs to README
- [ ] Add starterkit support
- [ ] Add PHPDoc comments to functions
- [ ] Reorganize CSS into modular files (base/layout/components)
- [ ] Update libraries.yml with proper license information
- [ ] Consider replacing WOW.js with Intersection Observer
- [ ] Update Animate.css class names if used


## References
1. [Portfolio Zymphonies Theme](https://www.drupal.org/project/portfolio_zymphonies_theme)
2. [Theming Drupal](https://www.drupal.org/docs/develop/theming-drupal)
3. [Twig Template naming conventions](https://www.drupal.org/node/2354645)
4. [Drupal API page.html.twig](https://api.drupal.org/api/drupal/core%21modules%21system%21templates%21page.html.twig/10)
