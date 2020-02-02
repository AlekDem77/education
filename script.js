

var money = +prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");
var appData =  {};
appData.budjet = money;
appData.timeData = time;
appData.expenses = {};
appData.income = {};
appData.saving = false;

for (var i = 0; i<2; i++ ){
    var a = prompt("введите обязательную статью расходов в этом месяце");
    var b = +prompt("во сколько это обойдется?");

    if (a != "" && b != "" && a.length<50) {
        appData.expenses[a] = b;
    } else {
        alert("ошибка при вводе попробуйте еще раз");
        i--;
    } 
}

//var i = 0;
/*while(i<2) {
    console.log(i);
    var a = prompt("введите обязательную статью расходов в этом месяце");
    var b = +prompt("во сколько это обойдется?");
    
    if(a != "" && b != "" && a.length<50){
        appData.expenses[a]=b;
    } else {
        alert("ошибка при вводе попробуйте еще раз");
        i--;
    }
    i++;
}*/

/*do {
    var a = prompt("введите обязательную статью расходов в этом месяце");
    var b = +prompt("во сколько это обойдется?");
    
    if(a != "" && b != "" && a.length<50){
        appData.expenses[a]=b;
    } else {
        alert("ошибка при вводе попробуйте еще раз");
        i--;
    }
    i++;
}
while (i<2);*/


console.log(appData);

appData.monetPerDay = Math.round(appData.budjet/30);

alert ("Ваш бюджет на 1 день равен: "+ appData.monetPerDay + " рублей");

if (appData.monetPerDay< 1666){
    alert("Ты нищеброд");
} else if (appData.monetPerDay >= 1666 && appData.monetPerDay < 4000){
    alert("Нормалек ты в среднем классе");
} else if (appData.monetPerDay >= 4000){
    alert("Красавчик");
} else {
    alert("Что-то я не разобрался");
}


/* почему то не срабатывают условия непонятно почему
switch (appData.monetPerDay) {
    case appData.monetPerDay < 50000:
        alert("Ты нищеброд");
        break;
    case appData.monetPerDay >= 50000 && appData.monetPerDay < 120000:
        alert("Нормалек ты в среднем классе");
        break;
    case appData.monetPerDay >= 120000:
        alert("Красавчик");
        break;
    default:
        alert("Что-то я не разобрался");
        console.log(typeof(appData.monetPerDay));

}*/