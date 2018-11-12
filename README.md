# my-react-boilerplate-with-bootstrap
My PERSONAL React Boilerplate, after studying about **Babel** and **Webpack**:
* suitable **only for development** (at the moment);
* it supports **JSX**, **ES6** and **class properties** through **babel** presets and plugins;
* it supports styling with **SCSS** and **Bootstrap**;
* import images with webpack url-loader and file-loader;
* **Client-side routing** with **react-router-dom**.

## ABOUT THE PROJECT STRUCTURE

### components
add here your global components.

### pages
* add here the components that make up your single pages or "scenes";
* nest inside a page the components that are used only in that page;

### styles
this folder is only for:
* global styles
* normalization/reset
* variable and mixins declarations;

### routers
it is where you can configure client-side routing.

### images
store here your image assets.

## TODO
* adjust source-map settings (still not available);
* set up test font from googleFonts.