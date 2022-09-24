//Google Connection Stuff
const express = require("express");
// const indexRouter = require("./routes/router.js")

const { google } = require("googleapis");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
// app.use('/', indexRouter);

app.set("views", "./views");
app.set("view engine", "ejs");

const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

app.get("/", async (req, res) => {
  //Create client instance for auth
  const client =  await auth.getClient();

  //Instance of Google Sheets API
  const googleSheets = google.sheets({version: "v4", auth: client});
  const spreadsheetId = "1pOcb-nK4NijY1Ett6smjupOaSm2L5iifncOmCG0JjBI";

  //Read row from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Inventory!C4:T4",
  });

  var q = [];

  for (let i = 0; i < 18; i++) {
    q.push(parseInt(getRows.data.values[0][i]));
  }
  res.render("index", {quantities: JSON.stringify(q)});
});

app.post("/", async (req, res) => {
  var { name, email, payment, cart, counts } = req.body;
  if (cart != "" && counts != "") {
    // console.log(cart);
    // console.log(counts);
    var cart = JSON.parse(cart);
    var counts = JSON.parse(counts);

    const client =  await auth.getClient();

    //Instance of Google Sheets API
    const googleSheets = google.sheets({version: "v4", auth: client});
    const spreadsheetId = "1pOcb-nK4NijY1Ett6smjupOaSm2L5iifncOmCG0JjBI";

    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: "Inventory!C:T",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [counts]
      }
    });

    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: "Orders",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [cart]
      }
    });

    res.redirect("back");
  }
  else {
    res.redirect("#");
  }
});

app.listen(1336, (req, res) => console.log("running"));

