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
    income: [],
    savings: true
};

function chooseExpenses(){
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
}
chooseExpenses();

function detectDayBudget(){
    appData.moneyPerDay = +(appData.bugdet / 30).toFixed();
};

detectDayBudget();



alert(`Ваш бюджет на 1 день равен ${appData.moneyPerDay} рублей`);

function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Это высокий уровень достатка!");
    } else {
        console.log("Произошла ошибка");
    }
};

detectLevel();

function checkSavings(){
    if(appData.savings){
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент');

        appData.monthIncome = save/100/12*percent;
        alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
    }
}

checkSavings();

function chooseOptExpenses(){
    for(let i=1;i<4; i++ ){
        let answer = prompt(`Введите статью необязательных расходов в этом месяце №: ${i}`);
        appData.optionalExpenses[i] = answer;
    }
};

chooseOptExpenses();