# Photo App

Esta aplicación web fue desarrollada utilizando React y diversas tecnologías relacionadas. Antes de sumergirnos en la implementación, tuve que seguir un conjunto estructurado de pasos y consideraciones para asegurar un proceso de desarrollo fluido y eficiente.

**Enlace a la aplicación en GitHub Pages: [Enlace](https://rodrigo300184.github.io/photo-app/)**

## Tabla de Contenidos

1. [Diseñando la Aplicación en Figma Antes de Escribir Código](#1-diseñando-la-aplicación-en-figma-antes-de-escribir-código)
2. [Importando Componentes de la Biblioteca Elegida](#2-importando-componentes-de-la-biblioteca-elegida)
3. [Definiendo Diseño, Colores, Tipografía, etc., en Figma](#3-definiendo-diseño-colores-tipografía-etc-en-figma)
4. [Creando la Aplicación React con Características Esenciales](#4-creando-la-aplicación-react-con-características-esenciales)
5. [Construyendo la Página de Búsqueda](#5-construyendo-la-página-de-búsqueda)
6. [Desarrollando la Página 'Mis Fotos'](#6-desarrollando-la-página-mis-fotos)
7. [Añadiendo Funcionalidades Adicionales](#7-añadiendo-funcionalidades-adicionales)
8. [Características Adicionales](#8-características-adicionales)
9. [Otros Requisitos Técnicos](#9-otros-requisitos-técnicos)
10. [Comenzando con Create React App](#10-comenzando-con-create-react-app)

## 1. Diseñando la Aplicación en Figma Antes de Escribir Código

Mi primer paso es diseñar visualmente la aplicación utilizando la herramienta de diseño Figma. Esta fase de diseño incluye la definición de la interfaz de usuario, la selección de paletas de colores, la tipografía y otros aspectos visuales clave.

## 2. Importando Componentes de la Biblioteca Elegida

Para agilizar el proceso de desarrollo y mantener un estilo visual coherente, utilizaré bibliotecas de componentes, en particular Material-UI (MUI) en este caso.

## 3. Definiendo Diseño, Colores, Tipografía, etc., en Figma

Antes de escribir una sola línea de código, me aseguro de tener una visión clara de cómo debería verse y sentirse la aplicación. Este enfoque proactivo ayuda a evitar cambios importantes en el diseño más adelante en el proyecto.

## 4. Creando la Aplicación React con Características Esenciales

Para cumplir con los requisitos básicos del proyecto, me centraré en:

- Implementar un panel de usuario amigable para la gestión y descarga de imágenes.
- Utilizar Create-React-App como base del proyecto.
- Integrar React-Router para una navegación sin problemas.
- Utilizar Redux para una gestión eficiente del estado global (puedo comenzar con una plantilla de Redux).
- Incorporar componentes de Material-UI (MUI) para estilos y diseño de la interfaz de usuario.

## 5. Construyendo la Página de Búsqueda

Diseñaré una página dedicada donde los usuarios puedan buscar imágenes en Unsplash a través de su API. Esto incluye utilizar la ruta GET /search/photos para realizar estas búsquedas.

## 6. Desarrollando la Página 'Mis Fotos'

Esta sección implica crear una página que permita a los usuarios revisar imágenes importadas, con información detallada como ancho, alto, likes y fecha de adición. Los usuarios también pueden filtrar su colección de fotos utilizando un campo de búsqueda por descripción.

## 7. Añadiendo Funcionalidades Adicionales

Para mejorar la experiencia del usuario, incluiré características como:

- Permitir a los usuarios agregar imágenes a sus colecciones personales.
- Habilitar la eliminación de imágenes y la modificación de descripciones dentro de su colección.
- Proporcionar diversas opciones de ordenamiento basadas en la fecha de importación, dimensiones y likes.
- Implementar una función de 'Descarga' para facilitar el acceso a la descarga de imágenes desde la URL 'full'.

## 8. Características Adicionales

Para llevar la experiencia del usuario un paso más allá, tengo planes para:

- Crear un sistema de etiquetas utilizando el componente Chip para categorizar imágenes (por ejemplo, paisaje, retrato, animal, edificio).
- Mostrar todas las etiquetas junto con la barra de búsqueda en la página 'Mis Fotos', permitiendo a los usuarios filtrar imágenes por etiquetas.
- Implementar paginación tanto en las páginas de 'Búsqueda' como en 'Mis Fotos' utilizando el componente de paginación.

## 9. Otros Requisitos Técnicos

Para garantizar la solidez técnica del proyecto, seguiré estas pautas:

- Instalación de Create-React-App con la plantilla Redux desde el principio para un proyecto integrado con Redux.
- Desarrollo de dos segmentos Redux distintos: 'searchSlice' para gestionar la funcionalidad de búsqueda y 'favoritesSlice' para manejar imágenes favoritas en colecciones.
- Utilización de un 'thunk' en 'searchSlice' para interactuar con la API de Unsplash, asegurando que 'favoritesSlice' funcione de forma sincrónica.
- Implementación de una característica que realice búsquedas aleatorias cuando los usuarios no proporcionen una entrada válida ('').
- Creación de un modal para editar descripciones de imágenes favoritas, ubicado cuidadosamente fuera del bucle de imágenes (photos.map()).

## 10. Comenzando con Create React App

Este proyecto se inició con Create React App.

**Scripts Disponibles**

En el directorio del proyecto, puedes ejecutar:

- `npm start`: Ejecuta la aplicación en modo de desarrollo. Abre http://localhost:3000 para verla en tu navegador.
- `npm test`: Lanza el corredor de pruebas en el modo de observación interactivo.
- `npm run build`: Compila la aplicación para la producción en la carpeta `build`. La compilación está optimizada para obtener el mejor rendimiento.

¡Tu aplicación está lista para ser desplegada!

Para obtener más información sobre cómo desplegar la aplicación, consulta la sección sobre despliegue en la documentación de Create React App.

**Nota:** El comando `npm run eject` es una operación de un solo sentido. Una vez que lo ejecutes, no podrás deshacerlo. Utilízalo solo si estás seguro de que necesitas personalizar profundamente la configuración de la aplicación.

¡Espero que esta guía en el archivo `readme.md` sea útil para que los colaboradores y usuarios comprendan tu aplicación y su desarrollo! Asegúrate de personalizarla con información específica de tu proyecto y seguir actualizándola a medida que desarrolles más características.
