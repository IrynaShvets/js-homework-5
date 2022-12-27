const numFirst = prompt("Введіть, будь ласка, перше число.");
const sign = prompt("Введіть, будь ласка, знак додавання, віднімання, множення або ділення.");
const numSecond = prompt("Введіть, будь ласка, друге число.");

calculate(numFirst, sign, numSecond);

function calculate(numFirst, sign, numSecond) {
  const numParseFirst = Number.isFinite(parseFloat(numFirst));
  const numParseSecond = Number.isFinite(parseFloat(numSecond));
  const n1 = parseInt(numFirst);
  const n2 = parseInt(numSecond);

  if (numParseFirst === false || numParseSecond === false || !sign.match(/(?=.*[+-/*])/g)) {
    alert("Ви нічого не ввели або ввели не число.");
  } else if (numParseFirst === true || numParseSecond === true || sign.match(/(?=.*[+-/*])/g)) {
    if (numSecond === "0") {
        if (sign === "/") {
            alert("На нуль ділити не можна.");
        }
    } else {
        const result = eval(`${numFirst} ${sign} ${numSecond}`);
      alert(result);
    }
  }
}

/* 
8. Создайте простой калькулятор. Попросите пользователя первый операнд, знак и второй операнд. 
Отобразите пользователю результат
выполнения математического действия. Например: ввели 10, ввели "+", 
ввели 20 (3 вызова prompt), результат - 30 (вывести в alert).
Знаки могут быть "+", "-", "*", "/". Так же добавьте проверки на ввод двух операндов и знака. 
При делении добавьте обработку
деления на ноль. Если происходит деление на ноль - вывести сообщение "На 0 делить нельзя". 
*/