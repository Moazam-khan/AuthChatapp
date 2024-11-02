export const truncateString = (str: string, length: number) => {
  if (str.length > length) {
    return str.slice(0, length) + "...";
  }
  return str;
};

export const roundToFiveDecimalPlaces = (number: any) => {
  const decimalPlaces = (Number(number).toString().split(".")[1] || []).length;

  if (decimalPlaces > 5) {
    return parseFloat(Number(number).toFixed(5));
  } else {
    return number;
  }
};
