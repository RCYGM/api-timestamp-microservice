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

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

app.get("/api/hello", (req, res) => {
  res.json({ greeating: "Hello api" });
});

app.get("/api/:date?", (req, res) => {
  const theDate = req.params.date;
  console.log("Valor recibido:", theDate);

  if (!isNaN(Number(theDate))) {
    console.log("Es un número:", Number(theDate));
    const date = new Date(Number(theDate));
    console.log("Fecha generada:", date);
  } else {
    const fechaTexto = new Date(theDate);
    console.log("Fecha generada desde texto:", fechaTexto);
  }
});
