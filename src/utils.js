export const getColorForLoad = (value) => {
  if (value < 0) {
    value = 0;
  } else if (value > 100) {
    value = 100;
  }

  var hue = ((1 - value / 100) * 120).toString(10);
  return "hsl(" + hue + ", 100%, 50%)";
};
