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
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const newDateRegex = theDate.replace(/date=/, "");

  console.log("Valor recibido:", theDate);

  if (!theDate) {
    return res.json({ unix: new Date() });
  }

  if (!isNaN(Number(theDate)) && theDate.length >= 10) {
    // console.log("Es un número valido:", Number(theDate));
    const dateNumber = new Date(Number(theDate));
    // console.log("Fecha generada:", dateNumber);
    const numberToDate = new Date(dateNumber);
    // console.log("No tiene que ser fecha:", numberToDate.getTime());

    return res.json({
      unix: dateNumber.getTime(),
      utc: dateNumber.toUTCString(),
    });
  } else if (dateRegex.test(theDate) || dateRegex.test(newDateRegex)) {
    const utcDate = new Date(theDate).toUTCString();
    return res.json({
      unix: new Date(theDate).getTime(),
      utc: utcDate,
    });
  } else {
    res.json({ error: "Invalid Date" });
  }
});
