# Portafolio Interactivo: Arquitectura Microservicios (Frontend)

Este repositorio contiene el **Frontend (SPA)** de mi portafolio interactivo, desarrollado en Angular. Su propósito principal no es solo mostrar mi información, sino demostrar empíricamente mi capacidad para orquestar y consumir múltiples arquitecturas de Backend de forma agnóstica.

## Arquitectura Multi-API

El proyecto está diseñado bajo un enfoque de separación de responsabilidades. Este cliente de Angular actúa como el orquestador principal que consume datos de tres servidores backend distintos, cada uno desarrollado con una tecnología diferente para resolver un problema específico:

| Tecnología Backend | Puerto Local | Propósito Demostrativo | Enlace al Repositorio |
| :--- | :--- | :--- | :--- |
| **ASP.NET Core** | `localhost:5000` | Entrega de datos estáticos (JSON) y configuración de perfiles. | *(Próximamente)* |
| **Python (FastAPI/Flask)** | `localhost:8000` | Procesamiento lógico y generación de algoritmos matemáticos en tiempo real. | *(Próximamente)* |
| **Laravel (PHP)** | `localhost:8080` | Interacción con Base de Datos, migraciones, ORM y gestión de entidades. | *(Próximamente)* |

## Stack Tecnológico (Frontend)
* Framework: Angular (Standalone Components)
* Lenguaje: TypeScript
* Paradigma: Programación Reactiva (RxJS)
* Estilos: CSS puro (Encapsulado por componente)

## Cómo ejecutar este proyecto en local

1. Clonar este repositorio:
   ```bash
   git clone [https://github.com/jvasquezdev/portafolio-frontend.git](https://github.com/jvasquezdev/portafolio-frontend.git)
