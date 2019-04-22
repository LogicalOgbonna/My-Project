var express = require("express");
var router = express.Router();
var xlsxj = require("xlsx-to-json");

/* GET users listing. */
router.get("/", function(req, res, next) {
  xlsxj(
    {
      input: "./Book1.xlsx",
      output: "output.json"
    },
    function(err, result) {
      if (err) {
        res.status(400).json(err);
      } else {
        if (result) {
          req.body.upload = result[0];
          next();
        }
      }
    }
  );
});

module.exports = router;
