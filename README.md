# portfolio_minimal_theme
A responsive theme originally designed for Drupal 7, now upgraded for Drupal 10/11

_See [References](#references) for the original Drupal 7 theme._


## Todo
- [ ] Test and ensure full compatibility with Drupal 11 core changes (e.g., Symfony updates, Twig 3 support).
- [ ] Add theme settings form to allow users to toggle layout options, upload logos, etc.
- [ ] Provide Twig template suggestions for nodes, views, and blocks (e.g., `node--portfolio--teaser.html.twig`).
- [ ] Improve accessibility (a11y): semantic HTML5 tags, keyboard navigation, skip links, color contrast checks.
- [ ] Include starter/demo content package to showcase theme layout and styles.
- [ ] Add support for Drupal’s `starterkit` system for easier subtheme generation.
- [ ] Improve code comments and add developer documentation inside `docs/` or within files.
- [ ] Create a helper script to generate subtheme `*.info.yml` files.
- [ ] Include screenshots and/or demo GIFs in the README to showcase theme features.
- [ ] Remove system-specific icons from the theme to reduce clutter and improve maintainability.
- [ ] Declare external libraries (e.g., `wow.js`, `Font Awesome`) as dependencies and remove bundled copies from the theme.
- [ ] Refactor `media.css` to follow a mobile-first design approach, ensuring better responsiveness across devices.
- [ ] Audit and clean up outdated CSS classes; replace them with modern, semantic, and utility-based classes where appropriate.


## References
1. [Portfolio Zymphonies Theme](https://www.drupal.org/project/portfolio_zymphonies_theme)
2. [Theming Drupal](https://www.drupal.org/docs/develop/theming-drupal)
3. [Twig Template naming conventions](https://www.drupal.org/node/2354645)
4. [Drupal API page.html.twig](https://api.drupal.org/api/drupal/core%21modules%21system%21templates%21page.html.twig/10)
