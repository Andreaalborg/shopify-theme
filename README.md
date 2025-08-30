# Modern Shopify Store Theme

En moderne og stilfull Shopify-tema med fokus på brukeropplevelse og moderne design.

## Funksjoner

- 🎨 Moderne og minimalistisk design
- 📱 Fullt responsiv
- ⚡ Raske animasjoner og scroll-effekter
- 🛒 Optimalisert for e‑handel
- 🎯 SEO‑vennlig struktur
- 🧩 Seksjoner fra scratch:
  - Hero med videoboks, justerbar overlay, chips (USP) og doble CTA‑er
  - Produktkonfigurator (biltype + duft + refill, legger flere varer i handlekurv)
  - Aurora Newsletter (AJAX, validering, honeypot, suksessmelding uten reload)
  - Nordic Essence About (feature‑chips som blocks + bilde/placeholder)
  - Sticky Slides (valgfri fullpage scroll, ren CSS)

## Sider

1. **Hjem** - Hero-seksjon med utvalgte produkter
2. **Produkter** - Collection-side med sortering og filtrering
3. **Om oss** - Informasjon om butikken
4. **FAQ** - Ofte stilte spørsmål med interaktiv accordion
5. **Kontakt** - Kontaktskjema og informasjon

## Installasjon

### Steg 1: Koble til Shopify

1. Logg inn på din Shopify-butikk
2. Gå til **Online Store** > **Themes**
3. Klikk på **Add theme** > **Upload theme**
4. Last opp tema-filene som ZIP

### Steg 2: Via GitHub (Anbefalt)

1. Push dette repositoriet til GitHub:
```bash
git add .
git commit -m "Initial theme setup"
git branch -M main
git remote add origin https://github.com/ditt-brukernavn/shopify-theme.git
git push -u origin main
```

2. I Shopify Admin:
   - Gå til **Online Store** > **Themes**
   - Klikk **Add theme** > **Connect from GitHub**
   - Velg ditt repository
   - Shopify vil automatisk synkronisere endringer

### Steg 3: Lokal utvikling med Shopify CLI

```bash
# Logg inn på Shopify
shopify login --store=din-butikk.myshopify.com

# Start utviklingsserver
shopify theme dev

# Push endringer til butikken
shopify theme push
```

## Tilpasning

### Farger og fonter
Rediger farger og fonter via Shopify Theme Editor eller direkte i `config/settings_schema.json`

### CSS
- Base: `assets/essentia-styles.css`
- Tema UI: `assets/nura-theme.css`
- Animasjoner: `assets/animations.css`

### JavaScript
- Animasjons‑observer: `assets/essentia-animations.js`
- Tema interaksjoner: `assets/nura-theme.js`
- Smooth scroll: `assets/smooth-scroll.js`
- Merk: Aurora Newsletter bruker en liten inline‑script for AJAX‑innsending

## Struktur

```
├── assets/          # CSS, JS, bilder
├── config/          # Tema-innstillinger
├── layout/          # Hovedlayout (theme.liquid)
├── locales/         # Språkfiler
├── sections/        # Gjenbrukbare seksjoner
├── snippets/        # Små gjenbrukbare deler
└── templates/       # Sidemaler
```

## Seksjoner (utdrag)

- Hero: `sections/hero.liquid` (video, overlay, chips, CTA)
- Featured Products Pro: `sections/featured-products-pro.liquid`
- Benefits Pro: `sections/benefits-pro.liquid`
- How It Works Pro: `sections/how-it-works-pro.liquid`
- Produktkonfigurator: `sections/product-configurator.liquid`
- Aurora Newsletter: `sections/newsletter-aurora.liquid`
- Nordic Essence About: `sections/about-nordic-essence.liquid`
- Sticky Slides (valgfri): `sections/sticky-slides.liquid`

### Tips

- Hero primærknapp kan peke til nyhetsbrev: sett `Primary link` = `#newsletter` i Hero‑innstillinger.
- Hvis en seksjon ikke vises: Theme Editor kan overstyre `templates/index.json`.
  - Gå til Customize → Hjem → Legg til riktig seksjon og Lagre.
  - Hard refresh / inkognito etter lagring.

## Teknologier

- Liquid (Shopify's templating språk)
- Vanilla JavaScript
- Modern CSS3 med animasjoner
- Responsive design

## Support

For spørsmål eller problemer, opprett en issue i GitHub eller kontakt utvikleren.

## Lisens

Dette temaet er utviklet for [Kundens navn] og er deres eiendom.