console.log('JS #2. Домашнє завдання. Від простих до складних обчислень і рядків')

/*
 * #1
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

var i = 10 // i
console.log(++i)
console.log(i++)
console.log(--i)
console.log(i--)


/*
 * #2
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */
var myNum = 10
var myTest = 20 // myTest
myTest += 5 // +=
console.log(myTest) // 25
myTest -= 5 // –=
console.log(myTest) // 20
myTest *= 5 // *=
console.log(myTest) // 100
myTest /= 10 // /=
console.log(myTest) // 10
myTest %= 3 // %=
console.log(myTest) // 1


/*
 * #3
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

let myPi = Math.PI // константа Pi → myPi
console.log(myPi) // 3.141592653589793
let myRound = Math.round(89.279) // округлене значення числа 89.279 → myRound
console.log(myRound) // 89
let myRandom = Math.floor(Math.random() * 10) // випадкове число між 0..10 (10 не включено) → myRandom
console.log(myRandom) // 0..9
let myPow = Math.pow(3, 5) // 3 у 5 степені → myPow
console.log(myPow) // 243


/*
 * #4
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

var strObj = {} 
strObj.str = 'Мама мыла раму, рама мыла маму' // Мама мыла раму, рама мыла маму
strObj.length = strObj.str.length // strObj


/*
 * #5
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.4), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

var isRamaPos = strObj.str.indexOf('рама') // isRamaPos
var isRama = strObj.str.includes('рама') // isRama
console.log(isRamaPos) // 10
console.log(isRama) // true


/*
 * #6
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.4), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

var strReplace = strObj.str.replace('мыла', 'моет')
strReplace = strReplace.replace('рама', 'Рама')
strReplace = strReplace.replace('мыла', 'держит') // strReplace
console.log(strReplace) // strReplace


/*
 * #7
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */
var someStr = 'some STRING' // var someStr = 'some STRING'
var upperStr = someStr.toUpperCase() // var upperStr
console.log(upperStr) // SOME STRING
var lowerStr = upperStr.toLowerCase() // var lowerStr
console.log(lowerStr) // some string
