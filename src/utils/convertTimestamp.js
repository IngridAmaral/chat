const convertTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toUTCString().substring(4, 22);
};

export default convertTimestamp;
