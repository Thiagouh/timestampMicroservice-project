const ERROR_MESSAGES = {
  dataRequired: "Date is required.",
  invalidDataFormat: "Invalid date format. Use YYYY-MM-DD.",
};

function isValidFormat(dateString) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(dateString);
}

function isValidDate(dateString) {
  const date = new Date(dateString);
  return (
    date instanceof Date &&
    !isNaN(date) &&
    dateString === date.toISOString().split("T")[0]
  );
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

module.exports = {
  ERROR_MESSAGES,
  isValidFormat,
  isValidDate,
  isValidUnix,
  dateToUTC,
  unixToUTC,
  dateToUnixTimestamp,
  unixToUnixTimestamp,
};
