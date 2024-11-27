const ERROR_MESSAGES = {
  dataRequired: "Date is required.",
  invalidDataFormat: "Invalid Date",
};

function isValidFormat(dateString) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(dateString);
}

function isValidDate(dateString) {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
}

function isValidUnix(unixTimestamp) {
  const timestamp = Number(unixTimestamp);
  return !isNaN(timestamp) && timestamp >= 0;
}

function dateToUTC(dateString) {
  const date = new Date(dateString + "T00:00:00Z");
  return date.toUTCString();
}

function unixToUTC(unixTimestamp) {
  const unixTimestampNumber = unixToUnixTimestamp(unixTimestamp);
  const date = new Date(unixTimestampNumber);
  return date.toUTCString();
}

function dateToUnixTimestamp(dateString) {
  const date = new Date(dateString + "T00:00:00Z");
  return date.getTime();
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
  isValidFormat,
  isValidDate,
  isValidUnix,
  dateToUTC,
  unixToUTC,
  dateToUnixTimestamp,
  unixToUnixTimestamp,
  createActualDate,
};
