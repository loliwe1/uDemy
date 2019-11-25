let money;
let time;

function start() {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц");
    }
}

start();

const appData = {
    bugdet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [0],
    savings: true,
    optionalExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = +(appData.bugdet / 30).toFixed();
        alert(`Ваш бюджет на 1 день равен ${appData.moneyPerDay} рублей`);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент');

            appData.monthIncome = save / 100 / 12 * percent;
            alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let answer = prompt(`Введите статью необязательных расходов в этом месяце №: ${i}`);
            appData.optionalExpenses[i] = answer;
        }
    },
    chooseIncome: function () {
        appData.income[0] = " ";
        let items = prompt('Что принесет доп. доход?(перечислете через запятую)');
        while ((typeof (items)) !== 'string' || items === null || items === '') {
            items = prompt('Что принесет доп. доход?(перечислете через запятую)');
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Что-то еще?", "ничего"));
        appData.income.sort();

        appData.income.forEach((value, index)=>{
            alert(`${index +1}  : ${value}`);
        });
    }

};

for(let value in appData){
    console.log(`Наша программа включает в себя: ${value} : ${appData[value]}`);
}