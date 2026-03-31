// Создаем символ
const symKey = Symbol('уникальный ключ');

// Создаем объект с обычным ключом и символом
const obj = {
    name: 'Alice',
    age: 25,
    [symKey]: 'Это значение символа'
};

// Выводим объект
console.log(obj);

// Доступ к значению по символу
console.log(obj[symKey]);