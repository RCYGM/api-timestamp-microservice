const express = require("express");
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

/*app.use("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});*/

//app.use(express.static("public"));

app.get("/api/hello", (req, res) => {
  res.json({ greeating: "Hello api" });
});

app.get("/api/:date?", (req, res) => {
  const theDate = req.params.date;
  let date;
  // Si no hay parámetro, devuelve la fecha actual
  if (!theDate) {
    date = new Date();
  } else if (!isNaN(theDate)) {
    // Si es un número (timestamp), conviértelo a fecha
    date = new Date(Number(theDate));
  } else {
    // Si es una fecha en texto, intenta convertirla
    date = new Date(theDate);
  }

  // Validar si la fecha es inválida
  if (date.toString() === "Invalid Date") {
    res.json({ error: "Invalid Date" });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
