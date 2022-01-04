function clears() {
  document.calc.txt.value = "";
}

function div() {
  document.calc.txt.value += "/";
}

function mul() {
  document.calc.txt.value += "*";
}

function seven() {
  document.calc.txt.value += "7";
}

function eight() {
  document.calc.txt.value += "8";
}

function nine() {
  document.calc.txt.value += "9";
}

function sub() {
  document.calc.txt.value += "-";
}

function four() {
  document.calc.txt.value += "4";
}

function five() {
  document.calc.txt.value += "5";
}

function six() {
  document.calc.txt.value += "6";
}

function plus() {
  document.calc.txt.value += "+";
}

function one() {
  document.calc.txt.value += "1";
}

function two() {
  document.calc.txt.value += "2";
}

function three() {
  document.calc.txt.value += "3";
}

function zero() {
  document.calc.txt.value += "0";
}

function doubleZero() {
  document.calc.txt.value += "00";
}

function dot() {
  document.calc.txt.value += ".";
}

function eql() {
  document.calc.txt.value = eval(calc.txt.value);
}
