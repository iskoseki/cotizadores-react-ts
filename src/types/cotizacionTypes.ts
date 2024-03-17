export interface Cotizacion {
  PrestamoMaximo: number;
  PrestamoMinimo: number;
  Producto: string;
}
export interface CotizacionAuto {
  InstalacionGPS: number;
    Prestamo: number;
    Avaluo: number;
}
export interface RenegociarAuto {
  Monto: number;
    Plazo: number;
    PlazoQuincenal: number;
}
export interface incentivos {
  producto: string,
        anio: string,
        porcentaje: string,
        activo: boolean
}

