# Editorial Moon - Landing Page

Una landing page moderna y profesional para Editorial Moon, una editorial independiente comprometida con dar voz a nuevas historias y acompañar a escritores emergentes.

## 🌙 Características

### Diseño Moderno y Responsivo
- Interfaz elegante con temática lunar
- Totalmente responsiva para todos los dispositivos
- Animaciones suaves con Framer Motion
- Paleta de colores personalizada basada en la identidad de marca

### Secciones Principales
- **Hero Section**: Presentación impactante con el eslogan principal
- **Sobre Nosotros**: Misión, visión y valores de la editorial
- **Géneros**: Visualización atractiva de los géneros que publican
- **Proceso de Envío**: Guía paso a paso para autores
- **Convocatoria**: Información detallada sobre la convocatoria actual con Kryon
- **Valores**: Por qué elegir Editorial Moon
- **Footer**: Información de contacto y enlaces útiles

### Tecnologías Utilizadas
- **React 18**: Framework de JavaScript para UI
- **Tailwind CSS**: Framework de CSS para estilos rápidos y responsivos
- **Framer Motion**: Librería para animaciones fluidas
- **Vite**: Build tool rápido y moderno
- **React Intersection Observer**: Para animaciones al hacer scroll

## 🚀 Instalación y Uso

### Requisitos Previos
- Node.js 16+ instalado
- npm o yarn

### Instalación
```bash
# Clonar o navegar al directorio del proyecto
cd editorial-moon

# Instalar dependencias
npm install
```

### Desarrollo
```bash
# Iniciar servidor de desarrollo
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Compilación para Producción
```bash
# Crear build optimizado
npm run build

# Previsualizar build de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
editorial-moon/
├── src/
│   ├── assets/          # Imágenes y recursos
│   ├── components/      # Componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Genres.jsx
│   │   ├── Process.jsx
│   │   ├── Convocatoria.jsx
│   │   ├── Values.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── AnimatedSection.jsx
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales y Tailwind
├── index.html           # HTML principal
├── tailwind.config.js   # Configuración de Tailwind
├── postcss.config.js    # Configuración de PostCSS
├── vite.config.js       # Configuración de Vite
└── package.json         # Dependencias y scripts
```

## 🎨 Personalización

### Colores
Los colores personalizados están definidos en `tailwind.config.js`:
- `moon-blue`: #4F6589
- `moon-dark`: #0A0D1B
- `moon-light`: #FFFFFF

### Fuentes
- **Display**: Playfair Display (para títulos)
- **Body**: Inter (para texto)

### Imágenes
Las imágenes de stock provienen de Unsplash y están optimizadas para web. Puedes reemplazarlas con tus propias imágenes en los componentes correspondientes.

## 📧 Contacto

Para enviar manuscritos o consultas:
- Email: mooneditorial.oficial@gmail.com

## 🤝 Colaboración

Este proyecto fue desarrollado en colaboración con **Kryon** para la convocatoria actual.

## 📝 Licencia

© 2025 Editorial Moon. Todos los derechos reservados.

---

**"Donde cada historia tiene su propia luz"** ✨