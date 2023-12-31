//Две функции - один объект
//Неправильное употребление конструктора
// let a = 1;
// function A() {
//   return a;
/* return {}, не смотря на то, что прописан return.
  Только если б return был объектом(или его составляющим:методом/свойством), 
  то return бы заменился. */
// }
// function B() {
//   return a;
// аналогично с A()
// }
// console.log(new A() == new B());
/* Создается два разных объекта, котрые хранятся в разных ячейках памяти,
поэтому после преобразований -> false */

//Верное употребление
let obj = {}; //глобально создается один объект

function A() {
  return obj;
}
function B() {
  return obj;
}

console.log(new A() === new B()); 
/* Return this заменяется на объект написанный через return вручную. Только другой объект может заменить дефолтный this в return'е!!!*/
