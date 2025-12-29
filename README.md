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
- [ ] Update library definitions to use VERSION token
- [ ] Remove deprecated features from .info.yml
- [ ] Add preconnect hints for external resources
- [ ] Update libraries.yml with proper license information
- [ ] Add fallback URLs for CDN resources
- [ ] Add CSS custom properties for colors and spacing
- [ ] Remove all vendor prefixes and add autoprefixer to build process
- [ ] Replace fixed pixel widths with relative units and clamp()
- [ ] Add prefers-reduced-motion support
- [ ] Remove unused CSS (file icons if not needed)
- [ ] Add code comments throughout CSS/JS
- [ ] Add PHPDoc comments to functions
- [ ] Replace image-based UI elements with CSS

### MEDIUM (1-2 hours each)
- [ ] Create utility class system
- [ ] Add aria-labels to navigation and interactive elements
- [ ] Minify CSS/JS for production
- [ ] Test mobile responsiveness
- [ ] Test cross-browser compatibility
- [ ] Implement lazy loading for images
- [ ] Remove fixed positioning from navigation (use sticky)

### HARD (2-4 hours each)
- [ ] Convert desktop-first to mobile-first media queries in media.css
- [ ] Replace float-based layouts with CSS Grid
- [ ] Rename non-semantic classes to BEM naming convention
- [ ] Replace table-based display hacks with flexbox
- [ ] Add skip-to-content links
- [ ] Implement keyboard navigation support
- [ ] Fix color contrast ratios (WCAG 2.1 AA)
- [ ] Add semantic HTML5 tags throughout templates
- [ ] Create Twig template suggestions for nodes/views/blocks
- [ ] Add theme preprocess functions
- [ ] Reorganize CSS into modular files (base/layout/components)

### VERY HARD (Full day+)
- [ ] Create theme settings form
- [ ] Add logo upload functionality
- [ ] Add layout toggle options
- [ ] Test Twig 3 compatibility
- [ ] Test Symfony 6+ compatibility
- [ ] Sanitize all Twig output properly
- [ ] Run phpcs with Drupal coding standards
- [ ] Run accessibility audit (axe/WAVE)
- [ ] Create helper script for subtheme generation
- [ ] Create starter/demo content package
- [ ] Add starterkit support
- [ ] Create developer documentation in docs/ folder
- [ ] Consider replacing WOW.js with Intersection Observer


## References
1. [Portfolio Zymphonies Theme](https://www.drupal.org/project/portfolio_zymphonies_theme)
2. [Theming Drupal](https://www.drupal.org/docs/develop/theming-drupal)
3. [Twig Template naming conventions](https://www.drupal.org/node/2354645)
4. [Drupal API page.html.twig](https://api.drupal.org/api/drupal/core%21modules%21system%21templates%21page.html.twig/10)
