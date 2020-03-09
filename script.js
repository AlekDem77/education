
var money,time;

function start () {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money =="" || money == null){
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

var appData =  {
    budjet: money,
    timeData: time,
    expenses: {},
    income: [],
    saving: true,
    optionalExpenses: {},
    chooseExpenses: function(){
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
    },
    chooseOptExpenses: function(){
        for (var i = 0; i<3; i++ ){
            var a = prompt("введите не обязательную статью расходов в этом месяце");
        
            if (a != "") {
                appData.optionalExpenses[i+1] = a;
            } else {
                alert("ошибка при вводе попробуйте еще раз");
                i--;
            } 
        }
    },
    detectDayBudget: function(){
        appData.monetPerDay = Math.round(appData.budjet/30);

        alert ("Ваш бюджет на 1 день равен: "+ appData.monetPerDay + " рублей");
    },
    detectLevel: function(){
        if (appData.monetPerDay< 1666){
            alert("Ты нищеброд");
        } else if (appData.monetPerDay >= 1666 && appData.monetPerDay < 4000){
            alert("Нормалек ты в среднем классе");
        } else if (appData.monetPerDay >= 4000){
            alert("Красавчик");
        } else {
            alert("Что-то я не разобрался");
        }
    },
    checkSavings: function(){
        if (appData.saving == true ){
            let save = +prompt("какова сумма ваших накоплений?"),
             percent = +prompt("Под какой процент?");
    
            appData.monthIncome = (save/100*(percent/366*30)).toFixed(2);
            alert("Доход с вашего деползита " + appData.monthIncome+ " руб.");
        }
    },
    chooseIncome: function(){
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        while (items ==null || items ==""){
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }
        appData.income = items.split(', ');
        this.income.forEach(function(item, i, mass){
            if (i>0){
                alert('Способы доп. заработка: '+ item);
            }
        
        });
    }
};

for (let key in appData){
    console.log('Наша программа включает в себя: '+ key);
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