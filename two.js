const numberFirst = prompt("Введіть, будь ласка перше число.");
const numberSecond = prompt("Введіть, будь ласка друге число.");

if ( +numberSecond % +numberFirst === 0) {
 alert("Друге число є кратне першому числу.");
} 
if ( +numberSecond % +numberFirst !== 0) {
 alert("Друге число не є кратне першому числу.");
}

/* 
2. С помощью prompt попросите пользователя ввести два числа. 
После чего выведите результат является ли второе число 
кратным первому числу;
*/
