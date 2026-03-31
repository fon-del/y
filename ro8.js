// Создаем символы
const sym1 = Symbol('символ1');
const sym2 = Symbol('символ2');
const sym3 = Symbol('символ3');

// Проверяем уникальность
console.log(sym1); // Symbol(символ1)
console.log(sym2); // Symbol(символ2)
console.log(sym3); // Symbol(символ3)

console.log(sym1 === sym2); // false
console.log(sym2 === sym3); // false
console.log(sym1 === sym3); // false