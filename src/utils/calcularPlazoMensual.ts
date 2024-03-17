export function calcularPlazoMensual(monto: number, pagoQuincenal: number): number {
    const pagosPorMes = 2; // 2 pagos por mes
    const totalPagos = monto / pagoQuincenal;
    const plazoMensual = totalPagos / pagosPorMes;

    return plazoMensual;
}
