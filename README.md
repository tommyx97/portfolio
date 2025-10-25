# 🎬 Tommaso Piccioli - AI Content Creator & Director Portfolio

Un portfolio moderno e minimalista che unisce creatività AI e design visivo per presentare il lavoro di Tommaso Piccioli come AI Content Creator & Director.

## ✨ Caratteristiche

### 🎨 Design "Crisp Current"
- **Stile Ultra-Minimalista**: Design pulito con molto spazio bianco
- **Tipografia Moderna**: Inter per testi, JetBrains Mono per codice
- **Layout Asimmetrico**: Design dinamico e fluido
- **Colori Neutri**: Palette neutra con accenti sottili
- **Animazioni Fluide**: Micro-interazioni eleganti
- **Stile Brutalist Elegante**: Design essenziale ma sofisticato

### 📱 Responsive Design
- **Mobile-first**: Breakpoints ottimizzati
- **Layout fluidi**: CTA responsive, immagini lazy-load
- **Accessibilità**: WCAG 2.2 AA compliant

### 🚀 Performance
- **Ottimizzato**: CLS <0.1, LCP <2.5s
- **Immagini responsive**: srcset, AVIF/WebP
- **Font preload**: Swap per performance ottimali
- **Lazy-load**: Video e immagini per caricamento veloce

## 🏗️ Struttura

### Homepage
1. **Hero Section** - Titolo principale con CTA
2. **Value Proposition** - Visione, Metodo, Impatto
3. **Featured Projects** - BMW X3, Vortex Energy, Ripar Caviar
4. **Capabilities** - 6 competenze chiave
5. **Toolkit** - 10 strumenti AI utilizzati
6. **About Mini** - Presentazione personale
7. **Proof Metrics** - Risultati concreti
8. **Contact CTA** - Call-to-action finale
9. **Footer** - Manifesto e link social

### Project Pages
- **BMW X3 "Vision Motion"** - Automotive AI-generated content
- **Vortex Energy** - Energy drink con effetti neon
- **Ripar Caviar** - Luxury brand con macro texture

## 🛠️ Tecnologie

- **React 19** - Framework principale
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling moderno
- **Vite** - Build tool veloce
- **CSS-in-JS** - Styling componenti

## 📦 Dipendenze

### Core
- `react` - Framework UI
- `react-dom` - Rendering DOM

### Development
- `typescript` - Type safety
- `vite` - Build tool
- `tailwindcss` - CSS framework
- `eslint` - Code linting

## 🚀 Installazione

```bash
# Clona il repository
git clone [repository-url]

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Preview del build
npm run preview
```

## 📁 Struttura File

```
src/
├── components/          # Componenti React
│   ├── Navigation.tsx   # Navigazione principale
│   ├── HeroSection.tsx # Sezione hero
│   ├── ValueProposition.tsx
│   ├── FeaturedProjects.tsx
│   ├── Capabilities.tsx
│   ├── Toolkit.tsx
│   ├── AboutMini.tsx
│   ├── ProofMetrics.tsx
│   ├── ContactCTA.tsx
│   └── Footer.tsx
├── pages/               # Pagine progetto
│   ├── BMWX3Project.tsx
│   ├── VortexEnergyProject.tsx
│   └── RiparCaviarProject.tsx
├── assets/              # Asset statici
│   ├── images/
│   └── videos/
├── utils/               # Utility functions
├── App.tsx              # Componente principale
├── main.tsx             # Entry point
└── index.css            # Stili globali
```

## 🎯 Funzionalità

### Navigazione
- **Sticky Navigation**: Sempre visibile con blur effect
- **Mobile Menu**: Hamburger menu per dispositivi mobili
- **Theme Toggle**: Switch Dark/Light mode
- **Smooth Scroll**: Navigazione fluida tra sezioni

### Interazioni
- **Hover Effects**: Animazioni eleganti
- **Fade-in**: Animazioni di entrata fluide
- **Motion Reduction**: Supporto per utenti con preferenze di movimento ridotto

### Accessibilità
- **Skip Links**: Navigazione rapida per screen reader
- **Focus Visible**: Indicatori di focus chiari
- **Alt Text**: Descrizioni complete per immagini
- **ARIA Labels**: Etichette per elementi interattivi

## 🎨 Palette Colori

```css
:root {
  --color-white: #FFFFFF;      /* Sfondo principale */
  --color-black: #000000;      /* Testo principale */
  --color-gray-50: #FAFAFA;    /* Sfondo sezioni */
  --color-gray-100: #F5F5F5;   /* Sfondo elementi */
  --color-gray-200: #E5E5E5;   /* Bordi */
  --color-gray-300: #D4D4D4;   /* Bordi hover */
  --color-gray-400: #A3A3A3;   /* Testo secondario */
  --color-gray-500: #737373;   /* Testo micro */
  --color-gray-600: #525252;   /* Testo corpo */
  --color-gray-700: #404040;   /* Testo scuro */
  --color-gray-800: #262626;   /* Testo molto scuro */
  --color-gray-900: #171717;   /* Testo più scuro */
}
```

## 📱 Breakpoints

```css
/* Mobile First */
@media (max-width: 767px) { /* Mobile */ }
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large Desktop */ }
```

## 🔧 Scripts Disponibili

- `npm run dev` - Server di sviluppo
- `npm run build` - Build produzione
- `npm run preview` - Preview build
- `npm run lint` - Linting codice

## 📄 Licenza

© 2025 Tommaso Piccioli. Tutti i diritti riservati.

---

**"Less chaos, more vision."** - Tommaso Piccioli