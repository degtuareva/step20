// 1)Запросите у пользователя радиус окружности и выведите площадь такой окружности.
const radius=parseFloat(prompt('Введите радиус:'));
const area=Math.PI*Math.pow(radius,2);

alert(`Площадь окружности с радиусом ${radius} равна ${area.toFixed(2)}`);

// 2)Запросите у пользователя расстояние км между двумя городами и за сколько
// часов он хочет добраться.Посчитайте скорость,с которой необходимо двигаться,
// чтобы успеть вовремя.
var distance=parseFloat(prompt('Введите расстояние(км):'));
var time=parseFloat(prompt('За сколько часов вы хотите добраться(домой):'));
var speed=distance/time;
speed=speed.toFixed(2);

alert('Вам нужно ехать со скоростью'+speed+'км/ч,чтобы прибыть вовремя');

// 3)Тернарный оператор:запросить 2 числа и вывести большее из них.
var firstNamber=parseFloat(prompt('Введите первое число:'));
var secondNamber=parseFloat(prompt('Введите второе число:'));
var maxNamber=(firstNamber>secondNamber)?firstNamber:secondNamber;
alert('Большее число:'+' '+maxNamber);

// 4) switch.Запросить у пользователя номер месяца и вывести на экран  его название
var monthNamber=parseInt(prompt('Введите номер месяца:'));
switch(monthNamber){
    case 1:
        alert('Январь');
        break;
    case 2:
        alert('Февраль');
        break;
    case 3:
        alert('Март');
        break;
    case 4:
        alert('Апрель');
        break;
    case 5:
        alert('Май');
        break;
    case 6:
        alert('Июнь');
        break;
    case 7:
        alert('Июль');
        break;
    case 8:
        alert('Август');
        break;
    case 9:
        alert('Сентябрь');
        break;
    case 10:
        alert('Октябрь');
        break;
    case 11:
        alert('Ноябрь');
        break;
    case 12:
        alert('Декабрь');
        break;
    default:
        alert('Некорректный ввод');
        break;
}
// 5)Switch.Рeaлизовать калькулятор.Пользователь вводит 2 числа и знак (+-*/).В заисимости
// от введенного знака решить пример и вывести результат.
const operator=prompt('Введите оператор(+,-,*, или/):');
const number1=parseFloat(prompt('Введите 1 число:'));
const number2=parseFloat(prompt('Введите 2 число:'));

let result;

switch(operator){
    case'+':
    result=number1+number2;
    alert(`${number1}+${number2}=${result}`);
    break;
    case'-':
    result=number1-number2;
    alert(`${number1}-${number2}=${result}`);
    break;
    case'*':
    result=number1*number2;
    alert(`${number1}*${number2}=${result}`);
    break;
    case'/':
    result=number1/number2;
    alert(`${number1}/${number2}=${result}`);
    break;
    default:
        document.write('operator некорректен');
}
// if,else
// 6)Запросить у пользователя его возраст и проверить корректность данных(0-120 лет)
var age=prompt('Введите ваш возраст:');
if(age>=0&&age<=120){
    alert('Ваш возраст корректен');
}
else{
    alert('Введен некорректный возраст.');
}
// 7) Запросить у пользователя 2 числа,возвести первое число в степень второго.Сделать проверку на 0.
var namber1=parseFloat(prompt('Введите первое число'));
var namber2=parseFloat(prompt('Введите второе число'));

if(namber1==0&&namber2==0){
    alert('Оба числа равны 0,невозможно возвести 0 в степень 0');
}
else if(namber1==0){
    alert('Первое число равно 0,результат возведения в степень будет 0');
}
else if(namber2==0){
    alert('Второе число равно 0,результат возведения в степень будет 1');
}
// else{
//     var result=Math.pow(namber1,namber2);
//     alert('Результат:'+result);
// }
// 8)Пользователь вводит 3 числа вывести наибольшее из них.
var num1=parseFloat(prompt('Введите первое число:'));
var num2=parseFloat(prompt('Введите второе число:'));
var num3=parseFloat(prompt('Введите третье число:'));
if(num1>=num2&&num1>=num3){
    console.log('Наибольшее число:'+num1);
}
else if(num2>=num1&&num2>=num3){
    console.log('Наибольшее число:'+num2);
}
else{
    console.log('Наибольшее число:'+num3);
}

