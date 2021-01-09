const express = require("express");
const app = express();
const qr = require("qrcode");

const port = 5000;

app.get("/", (req, res) => {
    res.send("Welcome!");
});

app.get("/generate", (req, res) => {

    qr.toDataURL("Apurba Daria", (err, src) => {
        if (err) res.send("Error occured");

        res.send(src);
    });
});

app.get("/saveqrcode", (req, res) => {

    qr.toFile('filename.png', 'Some text', {
        // color: {
        //   dark: '#00F',  // Blue dots
        //   light: '#0000' // Transparent background
        // }
      }, function (err) {
        if (err) throw err
        console.log('done')
      })
      res.send("Done");
});

app.listen(port, () => console.log("Server at 5000"));