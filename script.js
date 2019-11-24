let money = +prompt("Ваш бюджет на месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");

const appData = {
    bugdet: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings: false 
};

for(let i=0; i<2; i++){
    let q1 = prompt('Введите обязательную статью расходов в этом месяце');
    let q2 = prompt('Во сколько обойдется?');

    appData.expenses[q1] = q2;
};

alert(`Ваш бюджет на 1 день равен ${appData.bugdet/30} рублей`);

