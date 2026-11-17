# 🌐 Arquitectura Multi-API: Portafolio Orquestador (Frontend)

## 🧩 Entorno de desarrollo

Este portafolio fue desarrollado y probado en un entorno **WSL Debian**. Los microservicios backend se ejecutan localmente y se comunican con el frontend a través de los puertos configurados.

La base de datos MySQL/MariaDB utilizada por el servicio de Laravel está alojada en un servidor VPS. Para el desarrollo local, la conexión se expone mediante un túnel hacia `localhost`, lo que permite que la aplicación acceda a la base de datos como si estuviera instalada en el equipo.

## 🏛️ Arquitectura del Sistema

El cliente de Angular interactúa en tiempo real con los siguientes repositorios:

1. **[portafolio-backend-asp](https://github.com/jvasquezdev/portafolio-backend-asp):** (Puerto `5000`) Microservicio en ASP.NET Core que provee metadatos estáticos y configuración de perfil.
2. **[portafolio-backend-python](https://github.com/jvasquezdev/portafolio-backend-python):** (Puerto `8000`) Motor computacional en FastAPI que procesa algoritmos matemáticos (secuencia de Fibonacci), renderizados dinámicamente mediante `Chart.js`.
3. **[portafolio-backend-laravel](https://github.com/jvasquezdev/portafolio-backend-laravel):** (Puerto `8081`) Servicio de datos en Laravel que sirve el catálogo de proyectos consumiendo una base de datos MySQL.

## 🚀 Requisitos Previos

Para ejecutar este orquestador localmente, necesitas:

- **Node.js** (v18 o superior recomendado)
- **NPM** (Node Package Manager)

## ⚙️ Instalación y Configuración

Sigue estos pasos para levantar el entorno de desarrollo:

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/jvasquezdev/portafolio-frontend.git
   cd portafolio-frontend
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

   > **Nota para entornos WSL/Linux:** Si la instalación se detiene en scripts de post-instalación de paquetes compilados, fuerza la reconstrucción con:
   >
   > ```bash
   > npm rebuild esbuild @parcel/watcher lmdb msgpackr-extract
   > ```

3. **Configuración de Endpoints:**

   Por defecto, el servicio central (`src/app/services/api.ts`) está configurado para conectarse localmente. Asegúrate de que los puertos definidos coincidan con tus instancias locales:

   | Microservicio | Endpoint Base |
   | :--- | :--- |
   | ASP.NET | `http://localhost:5000/api` |
   | Python (FastAPI) | `http://localhost:8000/api` |
   | Laravel | `http://localhost:8081/api` |

## 🏃‍♂️ Ejecución del Servidor

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm start
```

Navega a `http://localhost:4200/`. La aplicación recargará automáticamente ante cualquier cambio en el código fuente.

## 🛠️ Stack Tecnológico Destacado

- **Framework:** Angular
- **Lenguaje:** TypeScript
- **Visualización:** Chart.js
- **UI:** HTML5 / CSS3 Puro (enfoque ligero, sin frameworks pesados)
- **Control de Estado:** RxJS (Observables) y control manual de la detección de cambios mediante `ChangeDetectorRef`.

## ⚠️ Dependencias de Ejecución

Para visualizar el flujo de datos completo y evitar errores de red (CORS o 500), **los tres repositorios backend mencionados en la sección de Arquitectura deben estar en ejecución simultánea** en sus respectivos puertos.
