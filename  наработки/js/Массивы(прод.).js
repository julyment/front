//КАК  РАБОТАЮТ МЕТОДЫ ДЛЯ ДАННЫХ? (смотреть заметку)
// let obj = [];
// obj.soort = () => {};
// console.log("Сейчас юудет применение метода");
// obj.soort(console.log("Еще что-то выведем"));

// //forEach похожа на map в Питоне
// let array = [1, 2, 3];
// array.forEach((item, index, array) => {
//   console.log(`У ${item} индекс ${index} в array`);
// });

// /* При переборе items в массиве, в данном случае перебираются объекты (поэтому можно вызывать всякие методы и свойства)  */
let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];

let user = users.find(item.id == 1);
// /* Find - это метод, функция которого хранится в объекте с методами для array.
// Так как это функция, то необходиом перердать ей какие-то аргументы.
// Стрелочная функция служит для установки условий.  */
console.log(user.name);
// /* Item- объект, можем вернуть свойство/метод по ключу. */

// let users1 = [
//   { id: 1, name: "Вася" },
//   { id: 2, name: "Петя" },
//   { id: 3, name: "Маша" },
//   { id: 4, name: "Вася" },
// ];

// // Найти индекс первого Васи
// console.log(users1.findIndex((user) => user.name == "Вася")); //перебираем users1 и проверяем условие в теле стрелочных функций

// // Найти индекс последнего Васи
// console.log(users1.findLastIndex((user) => user.name == "Вася"));
