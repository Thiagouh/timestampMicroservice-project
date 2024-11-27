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
  return res.json({ greeting: "hello API" });
});

router.get("/:date?", function (req, res) {
  let date = req.params.date;

  if (!date) {
    return res.json(createActualDate());
  }

  const parsedDate = new Date(date);

  if (isValidUnix(date)) {
    let response = {
      unix: unixToUnixTimestamp(date),
      utc: unixToUTC(date),
    };
    return res.json(response);
  }

  if (!isNaN(parsedDate)) {
    let response = {
      unix: parsedDate.getTime(),
      utc: parsedDate.toUTCString(),
    };
    return res.json(response);
  }

  res.status(400).send({ error: ERROR_MESSAGES.invalidDataFormat });

  // let date = req.params.date;
  // if (!date) {
  //   return res.json(createActualDate());
  // }

  // if (isValidUnix(date)) {
  //   let response = {
  //     unix: unixToUnixTimestamp(date),
  //     utc: unixToUTC(date),
  //   };
  //   return res.json(response);
  // } else if (isValidDate(date)) {
  //   let response = {
  //     unix: dateToUnixTimestamp(date),
  //     utc: dateToUTC(date),
  //   };
  //   return res.json(response);
  // } else {
  //   return res.status(400).send({ error: ERROR_MESSAGES.invalidDataFormat });
  // }
});

module.exports = router;
