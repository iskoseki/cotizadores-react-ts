export function calcularPagoQuincenal(monto: number, plazoMensual: number = 12): number {
    const pagosPorMes = 2; // 2 pagos por mes
    const totalPagos = monto / plazoMensual;
    const pagoQuincenal = totalPagos / pagosPorMes;

    return pagoQuincenal
}
export function formatearNumero(numero: number): string {
  // Convertir el número a string
  const numeroStr = numero.toString();

  // Separar la parte entera de la parte decimal
  const [parteEntera, parteDecimal] = numeroStr.split(".");

  // Formatear la parte entera con separadores de miles
  const parteEnteraFormateada = parteEntera.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Convertir la parte decimal a un número
  const numeroDecimal = Number(parteDecimal);

  // Si la parte decimal es un número entero, no se agrega el ".00"
  const parteDecimalFinal = numeroDecimal % 1 === 0 ? "" : `.${parteDecimal}`;

  // Combinar la parte entera y la parte decimal
  const numeroFormateado = `${parteEnteraFormateada}${parteDecimalFinal}`;

  // Devolver el número formateado
  return numeroFormateado;
}


