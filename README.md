# Cotizadores component for Montepío Luz Saviñón

Este es un componente React personalizado, fue creado para ser integrado en un sitio Wordpress.

El componente cuenta de tres pasos. 

1. Elegir un cotizador de los 4 disponibles (Alhajas, Relojes, Diamantes y Auto)
2. Llenar un formulario para agendar una cita con un asesor.
3. Pantalla de final, donde veras reflejada tu cotizacion junto con tus datos de contacto. (Los cuales podrás imprimir o descargar en formato .pdf)

---

#### **Installation**

```
npm install 
or 
//install
pnpm install

//development
pnpm run dev

//Build 
pnpm run build

//Preview build 
pnpm run preview
```

## Estructura del proyecto

Estructura del proyecto con los modulos principales.

* `src/`

  * `api/`: Peticiones al wordpress api.
  * `assets/`: Carpeta para recursos (fonts/images)
  * `components/`: Carpeta de componentes personalizados.
    * `/CotizadorAlhajas`: Cotizador de Autoimpulsa.
      * `Options/`: Componentes de opciones para el cotizador.
        * `BrandOption.tsx`
        * `ModelOption.tsx`
        * `ProductOption.tsx`
        * `VersionOption.tsx`
        * `YearOption.tsx`
        * `OptionsAutomotor.tsx`: Devuelve un Row con todos las opciones.
      * `index.tsx`: Punto de entrada del componente autoimpulsa.
    * `/CotizadorDiamantes`: Cotizador de Autoimpulsa.
      * `Options/`: Componentes de opciones para el cotizador.
        * `BrandOption.tsx`
        * `ModelOption.tsx`
        * `ProductOption.tsx`
        * `VersionOption.tsx`
        * `YearOption.tsx`
        * `OptionsAutomotor.tsx`: Devuelve un Row con todos las opciones.
      * `index.tsx`: Punto de entrada del componente autoimpulsa.
    * `/CotizadorRelojes`: Cotizador de Autoimpulsa.
      * `Options/`: Componentes de opciones para el cotizador.
        * `BrandOption.tsx`
        * `ModelOption.tsx`
        * `ProductOption.tsx`
        * `VersionOption.tsx`
        * `YearOption.tsx`
        * `OptionsAutomotor.tsx`: Devuelve un Row con todos las opciones.
      * `index.tsx`: Punto de entrada del componente autoimpulsa.
    * `/CotizadorDiamantes`: Cotizador de Autoimpulsa.
      * `Options/`: Componentes de opciones para el cotizador.
        * `BrandOption.tsx`
        * `ModelOption.tsx`
        * `ProductOption.tsx`
        * `VersionOption.tsx`
        * `YearOption.tsx`
        * `OptionsAutomotor.tsx`: Devuelve un Row con todos las opciones.
      * `index.tsx`: Punto de entrada del componente autoimpulsa.
    * `/CotizadorAutomotor`: Cotizador de Autoimpulsa.
      * `Options/`: Componentes de opciones para el cotizador.
        * `BrandOption.tsx`
        * `ModelOption.tsx`
        * `ProductOption.tsx`
        * `VersionOption.tsx`
        * `YearOption.tsx`
        * `OptionsAutomotor.tsx`: Devuelve un Row con todos las opciones.
      * `index.tsx`: Punto de entrada del componente autoimpulsa.
      * `HeaderSede/`
        * `HeaderSede.tsx`: Render del titulo definido desde wordpress.
    * `/Form`: Manejo de formulario.
      * `FormOptions/`: Componentes de opciones para el formulario.
        * `BrandOption.tsx`
        * `ModelOption.tsx`
        * `ProductOption.tsx`
        * `VersionOption.tsx`
        * `YearOption.tsx`
        * `OptionsAutomotor.tsx`: Devuelve un Row con todos las opciones.
      * `FieldProps.tsx`: Punto de entrada del componente autoimpulsa.
      * `Form.tsx`: Punto de entrada del componente autoimpulsa.
      * `formFields.tsx`: Punto de entrada del componente autoimpulsa.
      * `HeaderSede/`
        * `HeaderSede.tsx`: Render del titulo definido desde wordpress.
  * `utils/`: Carpeta para funciones de utilidad.
  * `routes/`: Carpeta de paginas. (contiene los pasos de Formulario y de impresion de Ticket)
  * `hooks/`: Custom hook folder.
  * `types/`: Custom interfaces/types declarados para Typescript.
  * `App.js`: Punto de entrada de la aplicación.

## Funcionalidades

* Podes elegir entre 4 tipos de cotizadores. (Alhajas, Relojes, Automotor y Diamantes).
* Cada cotizador te dejará ajustar los parametros segun lo necesites, con los montos que se ajusten a tu consulta.
* Luego de hacer tu cotizacion, podes agendar una Cita con un vendedor.
* Al finalizar el proceso tendras tu cita agendada, junto con un resumen de los datos de contacto y cotizacion realizados. El cual puedes imprimir o descargar en formato pdf.

## links & resources

[Zustand for state management](https://github.com/pmndrs/zustand)
[Axios as HTTP client](https://axios-http.com/)
[react-to-print for print managment](https://github.com/MatthewHerbst/react-to-print#readme)
[Maps JavaScript API ](https://developers.google.com/maps/documentation/javascript)
[react-geocode](https://www.npmjs.com/package/react-geocode)
[use-places-autocomplete](https://www.npmjs.com/package/use-places-autocomplete)
