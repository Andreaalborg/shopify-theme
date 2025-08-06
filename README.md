# Modern Shopify Store Theme

En moderne og stilfull Shopify-tema med fokus på brukeropplevelse og moderne design.

## Funksjoner

- 🎨 Moderne og minimalistisk design
- 📱 Fullt responsiv
- ⚡ Raske animasjoner og scroll-effekter
- 🛒 Optimalisert for e-handel
- 🎯 SEO-vennlig struktur

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
- Hovedstiler: `assets/modern-styles.css`
- Animasjoner: `assets/animations.css`

### JavaScript
- Hovedfunksjonalitet: `assets/modern-scripts.js`
- Smooth scroll: `assets/smooth-scroll.js`

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

## Teknologier

- Liquid (Shopify's templating språk)
- Vanilla JavaScript
- Modern CSS3 med animasjoner
- Responsive design

## Support

For spørsmål eller problemer, opprett en issue i GitHub eller kontakt utvikleren.

## Lisens

Dette temaet er utviklet for [Kundens navn] og er deres eiendom.