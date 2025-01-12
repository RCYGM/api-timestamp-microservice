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

// Métodos para obtener partes de la fecha
const fecha = new Date();

// Año completo
console.log(fecha.getFullYear());    // 2024

// Mes (0-11) → 0 = Enero, 11 = Diciembre
console.log(fecha.getMonth());       // 0 (Enero)

// Día del mes (1-31)
console.log(fecha.getDate());        // 15

// Día de la semana (0-6) → 0 = Domingo, 6 = Sábado
console.log(fecha.getDay());         // 1 (Lunes)

// Hora (0-23)
console.log(fecha.getHours());       // 14

// Minutos (0-59)
console.log(fecha.getMinutes());     // 45

// Segundos (0-59)
console.log(fecha.getSeconds());     // 30

// Milisegundos (0-999)
console.log(fecha.getMilliseconds()); // 123

// Timestamp (milisegundos desde 1 de enero de 1970)
console.log(fecha.getTime());         // 1705320123456

//=========================================================
// Métodos para obtener información en UTC
//=========================================================

// Año en formato UTC
console.log(fecha.getUTCFullYear());    // 2024

// Mes en UTC (0-11)
console.log(fecha.getUTCMonth());       // 0

// Día del mes en UTC (1-31)
console.log(fecha.getUTCDate());        // 15

// Día de la semana en UTC (0-6)
console.log(fecha.getUTCDay());         // 1

// Hora en UTC (0-23)
console.log(fecha.getUTCHours());       // 12

// Minutos en UTC (0-59)
console.log(fecha.getUTCMinutes());     // 30

// Segundos en UTC (0-59)
console.log(fecha.getUTCSeconds());     // 45

// Milisegundos en UTC (0-999)
console.log(fecha.getUTCMilliseconds()); // 500


//=========================================================
// Métodos para modificar la fecha
//=========================================================

// Cambiar el año
fecha.setFullYear(2025);
console.log(fecha);  // Año cambiado a 2025

// Cambiar el mes (0-11)
fecha.setMonth(11);  // Diciembre
console.log(fecha);

// Cambiar el día del mes (1-31)
fecha.setDate(25);  
console.log(fecha);

// Cambiar la hora (0-23)
fecha.setHours(18);
console.log(fecha);

// Cambiar los minutos (0-59)
fecha.setMinutes(45);
console.log(fecha);

// Cambiar los segundos (0-59)
fecha.setSeconds(30);
console.log(fecha);

// Cambiar los milisegundos (0-999)
fecha.setMilliseconds(500);
console.log(fecha);

// Cambiar el timestamp completo (milisegundos desde 1970)
fecha.setTime(1609459200000);  // 01/01/2021
console.log(fecha);


//=========================================================
// Métodos para formatear fechas
//=========================================================

// Fecha en formato legible
console.log(fecha.toDateString());  // "Mon Jan 01 2024"

// Hora legible
console.log(fecha.toTimeString());  // "18:45:30 GMT+0000"

// Fecha y hora en formato completo
console.log(fecha.toString());      // "Mon Jan 01 2024 18:45:30 GMT+0000"

// Fecha en formato ISO 8601
console.log(fecha.toISOString());   // "2024-01-01T18:45:30.500Z"

// Fecha en formato UTC
console.log(fecha.toUTCString());   // "Mon, 01 Jan 2024 18:45:30 GMT"

// Fecha en formato local
console.log(fecha.toLocaleDateString()); // "1/1/2024"

// Hora en formato local
console.log(fecha.toLocaleTimeString()); // "6:45:30 PM"

// Fecha y hora en formato local
console.log(fecha.toLocaleString());     // "1/1/2024, 6:45:30 PM"


//=========================================================
// Métodos estáticos de Date
//=========================================================

// Timestamp actual (igual a new Date().getTime())
console.log(Date.now());  // 1705320123456

// Crear fecha a partir de una cadena
console.log(new Date("2024-01-01"));  // Mon Jan 01 2024

// Obtener el timestamp de una fecha específica
console.log(Date.parse("2024-01-01"));  // 1704067200000

// Convertir fecha a string (heredado de Object)
console.log(fecha.valueOf());  // 1705320123456




