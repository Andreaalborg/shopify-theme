# Known Issues - Nura Shopify Theme

## 1. Hover Transform Effects Still Present
**Date:** 2025-08-30
**Status:** Pending
**Description:** Despite removing multiple hover transform effects from CSS and JavaScript, some elements still move on hover.

### Attempted Fixes:
- Removed all `transform: translateY/X()` from hover states
- Removed all `transform: scale()` from hover states  
- Removed transition properties referencing transform
- Disabled JavaScript mouse-following effects (3D rotation and magnetic buttons)
- Commented out hover effects in:
  - `/assets/animations.css`
  - `/assets/essentia-styles.css`
  - `/assets/modern-styles.css`
  - `/assets/nura-theme.css`
  - `/sections/newsletter.liquid`
  - `/sections/products-essentia.liquid`
  - `/sections/product-showcase.liquid`
  - `/templates/product.liquid`

### Possible Causes:
- Theme editor might be injecting additional styles
- Browser extensions adding effects
- Shopify's own scripts adding hover effects
- Cached CSS not updating properly
- Third-party apps or integrations

### Next Steps:
- Check browser DevTools to identify which specific styles are being applied on hover
- Look for dynamically added classes or inline styles
- Check if Shopify theme editor has its own hover settings
- Review any installed Shopify apps that might add effects

---

## 2. Product Configurator - Implementation Pending
**Date:** 2025-08-30
**Status:** In Progress
**Description:** Need to implement product configurator with Type, Scent, and Refill options.

### Requirements:
- Select product type (Bil/Car, Hjem/Home)
- Select scent/fragrance
- Option to add refill
- Dynamic pricing based on selections
- Add to cart functionality

### Dependencies:
- Products need to be created in Shopify admin first
- Variant structure needs to be defined
- Pricing strategy for bundles/refills