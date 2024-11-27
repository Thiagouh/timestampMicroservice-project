const ERROR_MESSAGES = {
  dataRequired: "Date is required.",
  invalidDataFormat: "Invalid Date",
};

function isValidUnix(unixTimestamp) {
  const timestamp = Number(unixTimestamp);
  return !isNaN(timestamp) && timestamp >= 0;
}

function unixToUTC(unixTimestamp) {
  const unixTimestampNumber = unixToUnixTimestamp(unixTimestamp);
  const date = new Date(unixTimestampNumber);
  return date.toUTCString();
}

function unixToUnixTimestamp(unixTimestamp) {
  return Number(unixTimestamp);
}

function createActualDate() {
  const date = new Date();
  const dateUTC = date.toUTCString();
  const dateUnixTimestamp = date.getTime();

  return {
    unix: dateUnixTimestamp,
    utc: dateUTC,
  };
}

module.exports = {
  ERROR_MESSAGES,
  isValidUnix,
  unixToUTC,
  unixToUnixTimestamp,
  createActualDate,
};
