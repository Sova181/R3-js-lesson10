console.log("   Интерполяция\n"); 

const firstName = 'Joffrey';
const greeting = 'Hello';

console.log(greeting + ', ' + firstName + '!');
// => Hello, Joffrey! 
console.log("  Пример кода с использованием интерполяции: \n"); 
const firstName1 = 'Joffrey';
const greeting1 = 'Hello';

// Обратите внимание на ограничители строки, это бектики
// Интерполяция не работает с одинарными и двойными кавычками
console.log(`${greeting1}, ${firstName1}!`);
// => Hello, Joffrey! 

console.log(`- Are you hungry?
- Aaaarrrgh!`); 

console.log(`Интерполяция работает только со строками в бектиках. Это символ \` `);