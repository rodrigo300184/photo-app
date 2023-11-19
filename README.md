# Photo App

Esta aplicación web fue desarrollada utilizando React y diversas tecnologías relacionadas. Antes de sumergirnos en la implementación, tuve que seguir un conjunto estructurado de pasos y consideraciones para asegurar un proceso de desarrollo fluido y eficiente.

**Enlace a la aplicación: [Enlace](http://rodrigo300184-photo-app-bucket2.s3-website.eu-west-3.amazonaws.com/)**
<br>
<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/rodrigo300184/photo-app/blob/19e2760a945f605476e91edfa5ce49528b79d995/public/1.png" alt="Preview 1" width="250">
  <img src="https://github.com/rodrigo300184/photo-app/blob/19e2760a945f605476e91edfa5ce49528b79d995/public/2.png" alt="Preview 2" width="250">
  <img src="https://github.com/rodrigo300184/photo-app/blob/19e2760a945f605476e91edfa5ce49528b79d995/public/3.png" alt="Preview 3" width="250">
  <img src="https://github.com/rodrigo300184/photo-app/blob/19e2760a945f605476e91edfa5ce49528b79d995/public/4.png" alt="Preview 4" width="250">
</div>
<br>

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

----------------------------------------------------------------------------------------------------------------------------------------

# Photo App

This web application was developed using React and various related technologies. Before diving into the implementation, I followed a structured set of steps and considerations to ensure a smooth and efficient development process.

**Link to the application: [Link](http://rodrigo300184-photo-app-bucket2.s3-website.eu-west-3.amazonaws.com/)**
<br>
<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/rodrigo300184/photo-app/blob/19e2760a945f605476e91edfa5ce49528b79d995/public/1.png" alt="Preview 1" width="200">
  <img src="https://github.com/rodrigo300184/photo-app/blob/19e2760a945f605476e91edfa5ce49528b79d995/public/2.png" alt="Preview 2" width="200">
  <img src="https://github.com/rodrigo300184/photo-app/blob/19e2760a945f605476e91edfa5ce49528b79d995/public/3.png" alt="Preview 3" width="200">
  <img src="https://github.com/rodrigo300184/photo-app/blob/19e2760a945f605476e91edfa5ce49528b79d995/public/4.png" alt="Preview 4" width="200">
</div>
<br>
## Table of Contents

1. [Designing the App in Figma Before Writing Code](#1-designing-the-app-in-figma-before-writing-code)
2. [Importing Components from the Chosen Library](#2-importing-components-from-the-chosen-library)
3. [Defining Design, Colors, Typography, etc., in Figma](#3-defining-design-colors-typography-etc-in-figma)
4. [Creating the React Application with Essential Features](#4-creating-the-react-application-with-essential-features)
5. [Building the Search Page](#5-building-the-search-page)
6. [Developing the 'My Photos' Page](#6-developing-the-my-photos-page)
7. [Adding Extra Functionalities](#7-adding-extra-functionalities)
8. [Bonus Features](#8-bonus-features)
9. [Other Technical Requirements](#9-other-technical-requirements)
10. [Getting Started with Create React App](#10-getting-started-with-create-react-app)

## 1. Designing the App in Figma Before Writing Code

My initial step is to visually design the application using the Figma design tool. This design phase includes defining the user interface, selecting color schemes, typography, and other crucial visual aspects.

## 2. Importing Components from the Chosen Library

To streamline the development process and maintain a consistent visual style, I'll use component libraries, particularly Material-UI (MUI) in this case.

## 3. Defining Design, Colors, Typography, etc., in Figma

Prior to writing a single line of code, I ensure a clear vision of how the application should look and feel. This proactive approach helps avoid significant design changes later in the project.

## 4. Creating the React Application with Essential Features

To meet the project's core requirements, I'll focus on:

- Implementing a user-friendly dashboard for image management and downloads.
- Utilizing Create-React-App as the project's foundation.
- Integrating React-Router for seamless navigation.
- Harnessing Redux for efficient global state management (I may start with a Redux template).
- Incorporating Material-UI (MUI) components for styling and user interface layout.

## 5. Building the Search Page

I'll design a dedicated page where users can effortlessly search for images on Unsplash via its API. This involves utilizing the GET /search/photos route to execute these searches.

## 6. Developing the 'My Photos' Page

This section involves creating a page that empowers users to review imported images, complete with detailed information like width, height, likes, and the date of addition. Users can also filter their photo collection using a description search field.

## 7. Adding Extra Functionalities

To enhance the user experience, I'll include features such as:

- Allowing users to add images to their personal collections.
- Enabling image deletion and modification of descriptions within their collection.
- Providing diverse sorting options based on import date, dimensions, and likes.
- Implementing a 'Download' feature for easy access to image downloads from the 'full' URL.

## 8. Bonus Features

To go the extra mile and elevate the user experience further, I'm planning to:

- Create a tagging system employing the Chip component to categorize images (e.g., landscape, portrait, animal, building).
- Showcase all tags alongside the search bar on the 'My Photos' page, enabling users to filter images by tags.
- Implement pagination for both the 'Search' and 'My Photos' pages using the Pagination component.

## 9. Other Technical Requirements

To ensure the project's technical soundness, I'll adhere to these guidelines:

- Installing Create-React-App with the Redux template from the outset for a Redux-integrated project.
- Developing two distinct Redux slices: 'searchSlice' to manage search functionality and 'favoritesSlice' to handle favorite images into collections.
- Employing a thunk in 'searchSlice' to interact with the Unsplash API while ensuring that 'favoritesSlice' operates synchronously.
- Implementing a feature that performs random searches when users provide no valid input ('').
- Crafting a modal for editing descriptions of favorite images, thoughtfully placed outside the image loop (photos.map()).

## 10. Getting Started with Create React App

This project was bootstrapped with Create React App.

**Available Scripts**

In the project directory, you can run:

- `npm start`: Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes. Your app is ready to be deployed!

See the section about deployment for more information.

**Note**: The `npm run eject` command is a one-way operation. Once you eject, you can't go back. Use it only if you're sure you need to customize the configuration deeply.

I hope this `readme.md` guide is helpful for collaborators and users to understand your application and its development! Make sure to customize it with project-specific information and keep updating it as you develop more features.
