const convertToTitleCase = (str) => {
  const lowerCaseStr = str.toLowerCase();
  const titleCaseStr = lowerCaseStr.replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
  return titleCaseStr;
};

export default convertToTitleCase;
