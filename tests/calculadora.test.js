const calculadora = require("../models/calculadora.js");

test("soma-numbers", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("soma-string-number", () => {
  const resultado = calculadora.somar("5", 100);
  expect(resultado).toBe(105);
});

test("soma-string-number", () => {
  const resultado = calculadora.somar("string", "100");
  expect(resultado).toBe("Insira dois números válidos");
});

test("soma-vazia-number", () => {
  const resultado = calculadora.somar("", 100);
  expect(resultado).toBe("Insira dois números válidos");
});

test("soma-vazia", () => {
  const resultado = calculadora.somar("", "");
  expect(resultado).toBe("Insira dois números válidos");
});

test("soma-dot", () => {
  const resultado = calculadora.somar(3.5, 5.5);
  expect(resultado).toBe(9);
});

test("", () => {});
