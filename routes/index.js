const express = require("express");
const router = express.Router();
const {
  ERROR_MESSAGES,
  isValidDate,
  isValidUnix,
  dateToUTC,
  unixToUTC,
  dateToUnixTimestamp,
  unixToUnixTimestamp,
  createActualDate,
} = require("../utils/dateUtils");

router.get("/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

router.get("/:date?", function (req, res) {
  let date = req.params.date;
  if (!date) {
    res.json(createActualDate());
  }

  if (isValidUnix(date)) {
    let response = {
      unix: unixToUnixTimestamp(date),
      utc: unixToUTC(date),
    };
    res.json(response);
  } else if (isValidDate(date)) {
    let response = {
      unix: dateToUnixTimestamp(date),
      utc: dateToUTC(date),
    };
    res.json(response);
  } else {
    res.status(400).send({ error: ERROR_MESSAGES.invalidDataFormat });
  }
});

module.exports = router;
