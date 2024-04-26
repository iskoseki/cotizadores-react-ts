# Cotizadores component for Montepío Luz Saviñón

Este es un componente React personalizado, fue creado para ser integrado en un sitio Wordpress.

El componente utiliza diferentes funcionalidades obtenidas del servicio de [Google maps API](https://developers.google.com/maps/documentation). Fue pensado para integrarse en un sitio Wordpress, con la finalidad de mostrar las tiendas "Montepío Luz Saviñón" cercanas al usuario.

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

* Consulta Geolocación al usuario para buscar las sucursales cercanas segun su ubicacion actual.
  ```
  //Por default la ubicacion será de Ciudad de México.
  const defaultLocation = { lat: 19.43534430248748, lng: -99.13470289762083 };
  ```
* Búsqueda de Tiendas: Implementa una barra de búsqueda para que los usuarios encuentren tiendas cercanas en México, buscando por:
  * Dirección.
  * Código postal.
  * Ciudad/Localidad/Pueblo/ect...
* Marcadores Personalizados: Agrega marcadores para cada tienda en el mapa.
* Información Detallada: Muestra detalles relevantes de las tiendas al hacer clic en los marcadores. (Nombre, Direccion, link de re-direct a google maps)

## Util links & resources

[Zustand for state management](https://github.com/pmndrs/zustand)
[Axios as HTTP client](https://axios-http.com/)
[react-to-print for print managment](https://github.com/MatthewHerbst/react-to-print#readme)
[Maps JavaScript API ](https://developers.google.com/maps/documentation/javascript)

[react-geocode](https://www.npmjs.com/package/react-geocode)

[use-places-autocomplete](https://www.npmjs.com/package/use-places-autocomplete)
