  const express = require("express");
    const app = express();
    let fetch = require("node-fetch");
    var bodyParser = require("body-parser");
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.get("/webhook", (req, res) => {
      // the webhook GET route checks the query of the webhook route
      // to see if the hub.verify_token parameter is equal to the same
      // callback token set on the facebook app dashboard
      // this is a security check
      //remember that I set "devc" as the callback parameter on 
      // the facebook app dashboard
      if (req.query["hub.verify_token"] === "devc") {
        res.send(req.query["hub.challenge"]);
      } else {
        res.send("Error, wrong validation token");
      }
    });
    // listen for requests 
    const listener = app.listen(process.env.PORT, () => {
      console.log("Your app is listening on port " + listener.address().port);
    });
