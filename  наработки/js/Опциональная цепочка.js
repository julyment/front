let user = {};
user = {
  address: {
    street: "value",
  },
};
console.log(user.address?.street); //увлекатоься опциональной цепочкой не стоит, можно проверить родительску ветку- если она существует, то и дочерние ветки могут существовать

/* Опциональная цепочка проверяет существованние свойства, если натыкается на undefined прекращает проверку и выводит его на экран, 
иначе-ьпродолжает проверку и выводит запрашиваеме свойство. Оператор (?.) используется после упоминания свойства */
