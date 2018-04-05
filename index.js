"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  var richiesta =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? req.body.result.parameters.echoText
      : "Seems like some problem. Speak again.";
  var speech="";
  if(richiesta =="Seems like some problem. Speak again.")
  {
	  speech ="Seems like some problem. Speak again."
  }else if(richiesta =="lista ristoranti")
  {
	 speech ="padrino, bam bam, malavoglia"; 
  } else if(richiesta =="padrino")
  {
	  speech ="Ristorante in centro, aperto a cena dalle 19:00 alle 23:00. Specialità di pesce di mare"; 
  }else
  {
	  speech ="Mi dispiace non riesco a recuperare informazioni per quello che mi hai chiesto"; 
  }
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-test-gianpaolo"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});