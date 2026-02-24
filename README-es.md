# 🔄 Conversor de Unidades

> Una aplicación de escritorio moderna para conversiones precisas de unidades construida con Tauri, React y TypeScript.

![Units Converter Banner](https://img.shields.io/badge/Tauri-FFC131?style=for-the-badge&logo=Tauri&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 📋 Tabla de Contenidos
- [Descripción General](#-descripción-general)
- [Características](#-características)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Desarrollo](#️-desarrollo)
- [Stack Tecnológico](#️-stack-tecnológico)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Contribuciones](#-contribuciones)
- [Licencia](#-licencia)

## 🎯 Descripción General

**Conversor de Unidades** es una aplicación de escritorio elegante, rápida y confiable que te permite convertir entre diferentes unidades de medida con precisión y facilidad. Perfecta para estudiantes, ingenieros, científicos y profesionales que necesitan conversiones precisas en su trabajo diario.

### ¿Por qué Conversor de Unidades?
- ✅ **Funciona Sin Internet**: Completamente offline, no requiere conexión a internet
- ⚡ **Súper Rápido**: Conversiones instantáneas mientras escribes
- 🎨 **Interfaz Moderna**: Diseño limpio e intuitivo con tema oscuro
- 🔄 **Funciones Inteligentes**: Intercambio de unidades, historial de conversiones y más
- 📱 **Responsive**: Optimizada para escritorio con tamaño de ventana perfecto
- 🛡️ **Confiable**: Construida con tecnologías modernas para mayor estabilidad

## ✨ Características

### 🌡️ **Conversor de Temperatura**
Convierte entre:
- Celsius (°C)
- Fahrenheit (°F) 
- Kelvin (K)

### 📏 **Conversor de Longitud**
Convierte entre:
- Milímetros (mm)
- Centímetros (cm)
- Metros (m)
- Kilómetros (km)
- Pulgadas (in)
- Pies (ft)
- Yardas (yd)
- Millas (mi)

### ⚖️ **Conversor de Peso**
Convierte entre:
- Miligramos (mg)
- Gramos (g)
- Kilogramos (kg)
- Onzas (oz)
- Libras (lb)
- Toneladas (t)

### ⏰ **Conversor de Tiempo**
Convierte entre:
- Segundos (s)
- Minutos (min)
- Horas (h)
- Días (d)
- Semanas (w)
- Meses (mo)
- Años (y)

### 🚀 **Características Avanzadas**
- **Conversión en Tiempo Real**: Ve los resultados instantáneamente mientras escribes
- **Intercambio de Unidades**: Intercambia rápidamente entre unidades "desde" y "hacia"
- **Historial de Conversiones**: Mantén un registro de tus conversiones anteriores
- **Navegación Lateral**: Cambio fácil entre tipos de conversores
- **Tema Oscuro**: Interfaz amigable para uso prolongado
- **Cálculos Precisos**: Conversiones matemáticas exactas
- **Diseño Responsive**: Optimización perfecta del diseño

## 📸 Capturas de Pantalla

<!-- Agregar capturas de pantalla aquí cuando estén disponibles -->
*Capturas de pantalla próximamente...*

## 💾 Instalación

### Para Usuarios de Windows

1. **Descargar el instalador**:
   - Ve a la página de [Releases](https://github.com/YeralAndre/units-conversor/releases)
   - Descarga el archivo `.msi` más reciente

2. **Instalar la aplicación**:
   - Haz doble clic en el archivo `.msi` descargado
   - Sigue el asistente de instalación
   - La aplicación se instalará automáticamente

3. **Ejecutar la aplicación**:
   - Encuentra "Conversor de Unidades" en tu Menú de Inicio
   - Haz doble clic para abrir
   - ¡Disfruta de conversiones instantáneas de unidades!

## 🚀 Uso

1. **Seleccionar Tipo de Conversor**: Usa la barra lateral izquierda para elegir entre Temperatura, Longitud, Peso o Tiempo
2. **Ingresar Valor**: Escribe el valor que quieres convertir en el campo "Desde"
3. **Elegir Unidades**: Selecciona las unidades de origen y destino de los menús desplegables
4. **Ver Resultados**: La conversión aparece instantáneamente en el campo "Hacia"
5. **Intercambiar Unidades**: Usa el botón de flecha para intercambiar rápidamente entre unidades
6. **Revisar Historial**: Haz clic en el ícono de historial para ver tus conversiones recientes

### Ejemplos de Conversiones
```
Temperatura: 100°C → 212°F → 373.15K
Longitud: 1 km → 1000 m → 3280.84 ft
Peso: 5 kg → 11.023 lb → 176.37 oz
Tiempo: 1 semana → 7 días → 168 horas
```

## 🛠️ Desarrollo

### Prerequisitos
- [Node.js](https://nodejs.org/) (v18 o superior)
- [Rust](https://rustlang.org/) (versión estable más reciente)
- [pnpm](https://pnpm.io/) (gestor de paquetes recomendado)

### Configuración
```bash
# Clonar el repositorio
git clone https://github.com/your-username/units-conversor.git
cd units-conversor

# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm tauri dev

# Construir para producción
pnpm tauri build
```

### Scripts Disponibles
```bash
pnpm dev          # Iniciar servidor de desarrollo
pnpm build        # Construir para producción
pnpm tauri dev    # Ejecutar modo desarrollo de Tauri
pnpm tauri build  # Construir aplicación Tauri
pnpm lint         # Ejecutar ESLint
pnpm type-check   # Ejecutar verificación del compilador TypeScript
```

## 🏗️ Stack Tecnológico

### Frontend
- **React 18**: Librería moderna de UI con hooks
- **TypeScript**: Desarrollo JavaScript con tipado seguro
- **CSS3**: Estilos personalizados con variables CSS
- **Lucide React**: Íconos hermosos y consistentes

### Backend y Escritorio
- **Tauri**: Framework de aplicaciones de escritorio basado en Rust
- **Rust**: Lenguaje de programación de sistemas para rendimiento
- **WebView**: Integración nativa de webview

### Herramientas de Desarrollo
- **Vite**: Herramienta de construcción rápida y servidor de desarrollo
- **ESLint**: Linting y calidad de código
- **pnpm**: Gestión eficiente de paquetes

## 📁 Estructura del Proyecto

```
units-conversor/
├── src/                    # Aplicación React frontend
│   ├── components/         # Componentes React
│   │   ├── ConversorCard.tsx
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── HistorySidebar.tsx
│   ├── lib/               # Funciones utilitarias
│   │   └── conversors.ts  # Lógica de conversiones
│   ├── data/              # Datos estáticos
│   │   └── conversors.json # Definiciones de unidades
│   ├── App.tsx            # Componente principal de la aplicación
│   ├── App.css            # Estilos globales
│   └── main.tsx           # Punto de entrada de la aplicación
├── src-tauri/             # Backend Tauri
│   ├── src/               # Código fuente Rust
│   ├── Cargo.toml         # Dependencias Rust
│   ├── tauri.conf.json    # Configuración Tauri
│   └── build.rs           # Script de construcción
├── public/                # Recursos estáticos
├── index.html             # Plantilla HTML
├── package.json           # Dependencias Node.js
├── vite.config.ts         # Configuración Vite
└── tsconfig.json          # Configuración TypeScript
```

## 🙏 Agradecimientos

- Construido con ❤️ usando [Tauri](https://tauri.app/)
- Íconos proporcionados por [Lucide](https://lucide.dev/)
