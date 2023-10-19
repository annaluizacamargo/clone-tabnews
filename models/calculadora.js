function somar(num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (typeof num1 != "number" || typeof num2 != "number" || !num1 || !num2) {
    return "Insira dois números válidos";
  }

  return num1 + num2;
}

exports.somar = somar;
