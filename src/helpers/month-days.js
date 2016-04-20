const getMaxDays = (month, year = new Date().getUTCFullYear()) => {
  let result = 28;

  if (month) {
    const date = new Date(year, month - 1, result);

    while (result < 31) {
      date.setDate(date.getDate() + 1);

      /* eslint no-restricted-syntax: 0 */
      if (date.getMonth() + 1 !== month) {
        break;
      }

      result++;
    }
  } else {
    result = 31;
  }

  return result;
};


export default getMaxDays;
