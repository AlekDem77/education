

var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");
var appData =  {};
appData.budjet = money;
appData.timeData = time;
appData.expenses = {};
appData.income = {};
appData.saving = false;
appData.expenses [money] = time;

alert ("Ваш бюджет на 1 день равен: "+ Math.round(money/30) + " рублей");

console.log(appData);
console.log(appData.expenses);