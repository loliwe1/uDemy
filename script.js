let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money;
let time;

function isEmpty(obj) {
    for (let value in obj) {
        return false;
    }
    return true;
}

startBtn.onclick = function () {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц");
    }
    appData.bugdet = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
}

expensesBtn.addEventListener('click', function () {
    if (appData.bugdet !== undefined) {
        let sum = 0;
        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
                sum += +b;
            } else {
                console.log("bad result");
                i--;
            }
        };
        expensesValue.textContent = sum;
    }

});

optionalExpensesBtn.addEventListener('click', function () {
    if (appData.bugdet !== undefined) {
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    }

});

countBtn.addEventListener('click', function () {
    if (appData.bugdet !== undefined && isEmpty(appData.expenses) !== true) {
        let sum = 0;
        for(let value in appData.expenses){
            sum+= + appData.expenses[value];
        }
        appData.moneyPerDay = ((appData.bugdet - sum )/ 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Это минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Это средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Это высокий уровень достатка!";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        levelValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', function () {
    incomeValue.textContent = incomeItem.value;
    let items = incomeItem.value
    appData.income = items.split(", ");

});

checkSavings.addEventListener('click', function () {
    if (appData.savings) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }

});

sumValue.addEventListener('input', function () {
    if (appData.savings) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
percentValue.addEventListener('input', function () {
    if (appData.savings) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


const appData = {
    bugdet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [0],
    savings: false,
};