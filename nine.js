const money = prompt(
  "Введіть, будь ласка, суму грошей, яку ви хочете поставити на гру."
);
alert(
  "Введіть, будь ласка, діапазон чисел в яких ви хочете грати, наприклад від 5 до 9."
);
const min = prompt("Введіть спочатку перше число.");
const max = prompt("Введіть друге число.");
const n1 = parseInt(min);
const n2 = parseInt(max);

guessNumber(money, n1, n2);

function guessNumber(money, n1, n2) {
  const moneyParse = Number.isFinite(parseFloat(money));
  const minParse = Number.isFinite(parseFloat(min));
  const maxParse = Number.isFinite(parseFloat(max));

  const n9 = parseInt(money);
  const prise = (n2 - n1) * 0.1 + n9;

  console.log(prise);
  if (moneyParse === false || minParse === false || maxParse === false) {
    alert("Ви нічого не ввели або ввели не число.");
  } else if (moneyParse === true || minParse === true || maxParse === true) {
    alert(`Ви виграєте ${prise} грн.`);
    const randomUser = prompt(
      "Відгадай число! Введіть число з заданого вами діапазону і виграйте приз, якщо відгадаєте."
    );
    const parseRandomUser = parseInt(randomUser);
    console.log(parseRandomUser);

    if (parseRandomUser < n1 || parseRandomUser > n2) {
      alert("На жаль, ви ввели число не в заданому діапазоні.");
    }

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const server = getRandomIntInclusive(n1, n2);
    console.log(server);

    if (parseRandomUser === server) {
      alert(
        `Ура! Вітаємо переможця! Ви відгадали число і виграли ${prise} грн.`
      );
    } else if (parseRandomUser !== server) {
      alert(`На жаль, ви програли ${money} грн.`);
    }
  }
}

/* 
9. Создайте игру "Угадай число". Попросите пользователя ввести сумму денег, которую он хочет поставить на игру. 
Попросите ввести диапазон чисел, в котором он хочет играть (например, от a до b). 
Выведите сумму, которую получит пользователь в том
случае, если угадает число. Сумма приза рассчитывается 
по формуле (b - a) * 0.1 + введенная пользователем сумма денег.
После чего запросите пользователя ввести число, добавьте проверку 
на заданный пользователем в начале диапазон (от а до b).
После ввода пользователем числа, сформируйте в скрипте рандомное 
число в заданном пользователем диапазоне (от a до b) 
(погуглите как получить рандомное число от числа до числа) и сравните 
введное пользователем число и сформированное рандомное
скриптом число. Если числа совпали, выведите в alert текст приветствия и сумму выигрыша, 
иначе сообщите о поражении и 
проигранное сумме. Не забудьте проверки типов данных и пустой строки на каждом пользовательском вводе;
*/
