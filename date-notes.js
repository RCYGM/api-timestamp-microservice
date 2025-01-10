const fechaActual = new Date();
console.log("new Date()", fechaActual);
//2025-01-10T15:30:45.123Z  // Fecha y hora actual en formato ISO

const fechaUnix = new Date(1609459200000); // 01/01/2021
console.log("1609459200000", fechaUnix);
// Fri Jan 01 2021 00:00:00 GMT+0000 (Coordinated Universal Time)

const fechaTexto = new Date("2021-01-01");
console.log("2021-01-01", fechaTexto);
// Fri Jan 01 2021 00:00:00 GMT+0000 (Coordinated Universal Time)

const fechaCompleta = new Date(2021, 0, 1, 10, 30, 0);
// new Date(año, mes, día, horas, minutos, segundos, milisegundos);
console.log("2021, 0, 1, 10, 30, 0", fechaCompleta);
// Fri Jan 01 2021 10:30:00 GMT+0000 (Coordinated Universal Time)

const fechaISO = new Date("2021-01-01T10:30:00Z");
console.log("2021-01-01T10:30:00Z", fechaISO);
// Fri Jan 01 2021 10:30:00 GMT+0000 (Coordinated Universal Time)

getTime(); // Devuelve el timestamp en milisegundos.
toUTCString(); // Devuelve la fecha en formato UTC.
toISOString(); // Devuelve la fecha en ISO 8601.
getFullYear(); // Año actual.
getMonth(); // Mes (0-11).
getDate(); // Día del mes.
