const num = prompt("Введіть, будь ласка число.");

isEven(num);

function isEven(num) {
  const numParse = Number.isFinite(parseFloat(num));

  if (numParse === false) {
    alert("Ви ввели не число.");
  } else if (numParse === true) {
    if (parseInt(num) % 2 == 0) {
      alert("Дякую, за вашу відповідь, ваше число парне.");
    }
    if (Math.abs(parseInt(num) % 2) == 1) {
      alert("Дякую, за вашу відповідь, ваше число не парне.");
    }
  }
}

/* 
3. С помощью prompt попросите пользователя ввести число. 
Сделать проверку на пустую строку и если значение является НЕ числом.
В результате вывести пользователю каким является число (четное или нечетное);
*/
