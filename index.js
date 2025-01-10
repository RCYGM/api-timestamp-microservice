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
  console.log(theDate);
  console.log(Number(theDate));

  let date;
  if (!theDate) {
    date = new Date();
    return res.json({ unix: date.getTime() });
  } else if (!isNaN(theDate)) {
    console.log(!isNaN(theDate));
    console.log(Number(date));

    date = new Date(theDate);
  } else {
    date = new Date(parseInt(theDate));
    console.log(date);
  }
  console.log(isNaN(date.getTime()));

  if (isNaN(date.getTime())) {
    res.json({ error: "Invalid Date" });
  } else {
    if (isNaN()) res.json({ unix: date.getTime(), utc: date.toUTCString() });
  }
});
