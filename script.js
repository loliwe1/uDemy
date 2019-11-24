let money = +prompt("Ваш бюджет на месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");

const appData = {
    bugdet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let q1 = prompt('Введите обязательную статью расходов в этом месяце');
    let q2 = prompt('Во сколько обойдется?');

    if((typeof (q1) )!== 'string'|| q1=== '' || q1=== null ||q2=== ''|| q2=== null || isNaN(q2)|| q1.length >50){
        i--;
    }else{
        appData.expenses[q1] = q2;
    }


};

appData.moneyPerDay = appData.bugdet/30;
alert(`Ваш бюджет на 1 день равен ${appData.moneyPerDay} рублей`);

if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}
