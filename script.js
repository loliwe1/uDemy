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
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

        console.log("done");

        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    }
};

appData.moneyPerDay = appData.bugdet / 30;
alert(`Ваш бюджет на 1 день равен ${appData.moneyPerDay} рублей`);

if (appData.moneyPerDay < 100) {
    console.log("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log("Это высокий уровень достатка!");
} else {
    console.log("Произошла ошибка");
}