# 🎨 Tommaso Piccioli - Portfolio

Portfolio professionale di Tommaso Piccioli, AI Creator & Creative Director specializzato in comunicazione visiva per il mondo automotive.

## 🚀 Caratteristiche

### 📱 **Mobile-First Design**
- **Navigazione mobile ottimizzata** con menu burger funzionale
- **Hero section responsive** con posizionamento perfetto
- **Safe area support** per dispositivi con notch
- **Touch interactions** ottimizzate per mobile
- **Performance GPU** per animazioni fluide

### 🎨 **Design System**
- **Palette colori coerente** con `#aec7e9` come colore principale
- **Typography responsive** con sistema `clamp()` per scalabilità
- **Spacing system** ottimizzato per tutti i dispositivi
- **Animazioni fluide** con Framer Motion
- **Layout moderno** con glassmorphism effects

### 🛠️ **Tecnologie**
- **React 18** con TypeScript
- **Vite** per build veloce e HMR
- **Tailwind CSS** per styling
- **Framer Motion** per animazioni
- **Lucide React** per icone
- **Netlify** per deployment

## 📁 Struttura Progetto

```
src/
├── components/
│   ├── generated/          # Componenti principali
│   │   ├── TommasoPortfolio.tsx
│   │   ├── AboutSection.tsx
│   │   ├── FeaturedProjectsGrid.tsx
│   │   ├── ContactSection.tsx
│   │   └── BMWX3ProjectDetail.tsx
│   └── ui/                 # Componenti UI
│       ├── MobileNavigation.tsx
│       └── StickyNavigation.tsx
├── hooks/                  # Custom hooks
├── lib/                    # Utilities
├── settings/               # Configurazioni
├── mobile.css              # Stili mobile-specifici
└── index.css               # Stili principali
```

## 🎯 Progetti

### 🚗 **BMW X3 Project**
- **Campagna automotive** con AI-generated content
- **Visual direction** moderna e minimale
- **Gallery responsive** con immagini ottimizzate
- **Social grid** in stile Instagram feed
- **Layout ottimizzato** senza spazi vuoti

### 📱 **Mobile Optimization**
- **Hero section** con testo perfettamente posizionato
- **Menu burger** completamente funzionale
- **Navigazione touch-friendly** con feedback visivo
- **Performance ottimizzate** per dispositivi mobile
- **Safe area support** per iPhone e Android

## 🚀 Deployment

Il sito è configurato per **Netlify** con:
- **Build automatico** su push a main
- **Redirect SPA** per routing client-side
- **Headers di sicurezza** ottimizzati
- **Cache ottimizzato** per assets statici

### 📋 Comandi

```bash
# Sviluppo
npm run dev

# Build produzione
npm run build

# Preview build
npm run preview

# Linting
npm run lint
```

## 🎨 Aggiungere Nuovi Progetti

### 📁 Struttura Raccomandata
```
projects/
└── [nome-progetto]/
    ├── assets/
    │   ├── cover.jpg      # 1920x1080px - Hero
    │   ├── thumb.jpg      # 400x300px - Thumbnail
    │   └── img-01.jpg     # 1200x800px - Gallery
    └── index.html         # Pagina progetto
```

### 📐 Specifiche Immagini
- **Formato**: JPG o WebP
- **Dimensione**: <500KB per ottimizzazione
- **Naming**: lowercase con hyphens
- **Numerazione**: img-01.jpg, img-02.jpg, etc.

## 🔧 Configurazione

### 📱 Mobile CSS
- **Breakpoints**: 767px (mobile), 479px (extra small)
- **Typography**: Sistema responsive con `clamp()`
- **Spacing**: Variabili CSS per coerenza
- **Performance**: GPU acceleration e ottimizzazioni

### 🎨 Design Tokens
```css
/* Colori principali */
--primary-color: #aec7e9;
--background: #000000;
--text-primary: #ffffff;

/* Typography */
--font-family: 'Inter', sans-serif;
--font-weight-light: 300;
--font-weight-normal: 400;
```

## 📈 Performance

- **Lighthouse Score**: 95+ su mobile e desktop
- **Core Web Vitals**: Ottimizzati per performance
- **Bundle Size**: <500KB gzipped
- **Loading Time**: <2s su connessioni 3G

## 🤝 Contributi

Per contribuire al progetto:
1. Fork del repository
2. Crea feature branch
3. Commit delle modifiche
4. Push e crea Pull Request

## 📄 Licenza

© 2024 Tommaso Piccioli. Tutti i diritti riservati.

---

**🚀 Portfolio ottimizzato per performance, accessibilità e user experience su tutti i dispositivi.**