const express = require("express");
const router = express.Router();
const {
  ERROR_MESSAGES,
  isValidDate,
  isValidFormat,
  isValidUnix,
  dateToUTC,
  unixToUTC,
  dateToUnixTimestamp,
  unixToUnixTimestamp,
} = require("../utils/dateUtils");

router.get("/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

router.get("/:date?", function (req, res) {
  let date = req.params.date;
  console.log(date);
  if (!date) {
    return res.status(400).send({ error: ERROR_MESSAGES.dataRequired });
  }

  if (isValidUnix(date)) {
    let response = {
      unix: unixToUnixTimestamp(date),
      utc: unixToUTC(date),
    };
    res.send(response);
  } else if (isValidDate(date) && isValidFormat(date)) {
    let response = {
      unix: dateToUnixTimestamp(date),
      utc: dateToUTC(date),
    };
    res.send(response);
  } else {
    res.status(400).send({ error: ERROR_MESSAGES.invalidDataFormat });
  }
});

module.exports = router;