const decimalize = (str) => {
  const baseArr = str.split("");
  const trimmed = baseArr.filter((letter) => letter !== ",");
  let decimalArr = [];
  for (let i = trimmed.length - 1; i >= 0; i--) {
    if ((trimmed.length - 1 - i) % 3 === 0) {
      if (i !== trimmed.length - 1) {
        decimalArr.unshift(",");
      }
    }
    decimalArr.unshift(trimmed[i]);
  }
  return decimalArr.join("");
};

export default decimalize;
