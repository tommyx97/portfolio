# 🚀 Portfolio Project Automation System

Sistema automatizzato per la gestione dei progetti nel portfolio di Tommaso Piccioli.

## 📋 Funzionalità

Il sistema automatizza completamente la creazione di nuovi progetti:

1. **📁 Creazione cartella progetto** con struttura standardizzata
2. **📄 Template HTML** con markup completo e placeholders
3. **🖼️ Gestione immagini** con naming convention automatico
4. **🏠 Aggiornamento homepage** con nuovo progetto integrato
5. **🎨 Stili CSS** per pagine progetto responsive

## 🛠️ Utilizzo

### Comando Base
```bash
node create-project.cjs "Nome Progetto" "Descrizione Progetto"
```

### Esempi Pratici
```bash
# Progetto BMW X3
node create-project.cjs "BMW X3 Campaign" "A cinematic campaign for BMW X3 featuring brutalist architecture"

# Progetto Nike
node create-project.cjs "Nike Air Max" "Product photography and digital campaign for Nike Air Max collection"

# Progetto Apple
node create-project.cjs "Apple Watch Series" "Lifestyle photography and social media campaign for Apple Watch"

# Progetto Ferrari
node create-project.cjs "Ferrari F8 Tributo" "A luxury automotive campaign showcasing the Ferrari F8 Tributo in urban environments"
```

## 📁 Struttura Generata

Ogni progetto segue questa struttura standardizzata:

```
projects/
└── progetto-[nome-kebab-case]/
    ├── index.html              # Pagina principale del progetto
    └── assets/                 # Cartella immagini
        ├── cover.jpg           # Immagine hero (1920x1080px)
        ├── thumb.jpg           # Thumbnail homepage (400x300px)
        ├── img-01.jpg          # Immagine gallery 1 (1200x800px)
        ├── img-02.jpg          # Immagine gallery 2 (1200x800px)
        ├── img-03.jpg          # Immagine gallery 3 (1200x800px)
        └── ...                 # Altre immagini gallery
```

## 🎯 Template HTML Generato

Il template include:

- **Header navigazione** con pulsante "Torna al Portfolio"
- **Sezione Hero** con immagine cover e titolo progetto
- **Descrizione progetto** con dettagli (cliente, anno, categoria)
- **Galleria immagini** con layout responsive
- **Call-to-Action** con pulsante "Inizia un progetto"
- **Scripts** per navigazione e scroll smooth

## 🖼️ Regole Immagini

### Naming Convention
- **Solo lowercase**: `cover.jpg` ✅, `Cover.jpg` ❌
- **Hyphens invece di spazi**: `bmw-x3.jpg` ✅, `bmw x3.jpg` ❌
- **Numerazione a due cifre**: `img-01.jpg`, `img-02.jpg` ✅
- **Estensioni web**: `.jpg` o `.webp` ✅

### Dimensioni Consigliate
- **cover.jpg**: 1920x1080px (16:9 ratio)
- **thumb.jpg**: 400x300px (4:3 ratio)
- **img-XX.jpg**: 1200x800px (3:2 ratio)

### Ottimizzazione
- **Dimensione file**: < 500KB per immagine
- **Formato**: JPG per foto, WebP per grafica
- **Compressione**: 85-90% qualità per web

## 🏠 Integrazione Homepage

Il sistema aggiorna automaticamente la homepage aggiungendo:

```html
<div class="project-card" data-project="nome-progetto">
  <a href="projects/progetto-nome/index.html" class="project-link">
    <div class="project-image">
      <img src="projects/progetto-nome/assets/thumb.jpg" alt="Nome Progetto">
    </div>
    <div class="project-info">
      <h3 class="project-title">Nome Progetto</h3>
      <p class="project-description">Descrizione progetto</p>
      <div class="project-tags">
        <span class="tag">Categoria</span>
        <span class="tag">Anno</span>
      </div>
    </div>
  </a>
</div>
```

## 🎨 Stili CSS

Il sistema genera automaticamente:

- **Layout responsive** per tutti i dispositivi
- **Animazioni hover** per gallery e pulsanti
- **Tipografia coerente** con il design system
- **Colori palette** mantenendo coerenza visiva
- **Transizioni smooth** per UX professionale

## 📋 Checklist Post-Creazione

Dopo aver eseguito lo script:

### ✅ Immagini
- [ ] Sostituire `cover.jpg` con immagine hero del progetto
- [ ] Sostituire `thumb.jpg` con thumbnail per homepage
- [ ] Aggiungere immagini gallery (`img-01.jpg`, `img-02.jpg`, etc.)
- [ ] Verificare dimensioni e ottimizzazione

### ✅ Contenuti
- [ ] Aggiornare descrizione progetto nel template
- [ ] Inserire nome cliente, anno, categoria
- [ ] Personalizzare testo call-to-action
- [ ] Verificare meta tags SEO

### ✅ Test
- [ ] Testare pagina progetto su desktop/mobile
- [ ] Verificare navigazione homepage → progetto
- [ ] Testare pulsanti "Contattami" e "Inizia un progetto"
- [ ] Controllare performance e caricamento immagini

## 🔧 Personalizzazione

### Modificare Template
Il template HTML è completamente personalizzabile:
- Aggiungere sezioni specifiche
- Modificare layout gallery
- Inserire video o animazioni
- Personalizzare call-to-action

### Estendere Funzionalità
Lo script può essere esteso per:
- Generare automaticamente meta tags SEO
- Creare versioni mobile-specifiche
- Integrare con CMS esterni
- Aggiungere analytics tracking

## 🚨 Troubleshooting

### Errori Comuni

**"Project folder already exists"**
- Il progetto esiste già, scegliere nome diverso

**"Could not find projects section in homepage"**
- Verificare che `index.html` contenga sezione con `id="progetti"`

**"Images not loading"**
- Verificare che le immagini siano nella cartella `assets/`
- Controllare naming convention (lowercase, hyphens)

### Supporto
Per problemi o personalizzazioni:
1. Controllare log di errore nel terminale
2. Verificare struttura cartelle generata
3. Testare con progetto di esempio
4. Contattare sviluppatore per assistenza

---

**🎯 Obiettivo**: Rendere la gestione progetti completamente automatizzata, permettendo focus sulla creatività invece che su task tecnici ripetitivi.
