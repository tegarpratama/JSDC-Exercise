function displayNumber(result) {
   form.display.value += result;
}

function displayC() {
   form.display.value = "";
}

function displayBack() {
   var exp = form.display.value;
   form.display.value = exp.substring(0, exp.length - 1);
}

function displayResult(result) {
   form.display.value = eval(result);
}

function displaySqrt(){
   var number = form.display.value;
   var result = Math.sqrt(number);
   form.display.value = result;
}

function displayPersen(){
   var number = form.display.value;
   var result = number / 100;
   form.display.value = result;
}

function displaySin(){
   var number = form.display.value;
   var result = Math.sin(number);
   form.display.value = result;
}

function displayCos(){
   var number = form.display.value;
   var result = Math.cos(number);
   form.display.value = result;
}

function displayTan(){
   var number = form.display.value;
   var result = Math.tan(number);
   form.display.value = result;
}