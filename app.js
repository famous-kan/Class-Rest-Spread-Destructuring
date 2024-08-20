//////////////////////Rest//////////////////////

///lab1
// let multi = (...nums) => {
//   let results = 1
//   for(let num of nums) results*=num
//   return results
// }

// console.log(multi(3,5,9,6))

//lab2
// let filterOutOdds = (...nums) => {
//   return nums.filter(item=> {
//     return item%2 == 0
//   })
// }
// console.log(filterOutOdds(5,7,8,4))


//lab3
// let mergeObj = (...obj) => {
//   // console.log(obj)
//   let empty = {}
//   for (let i = 0; i < obj.length; i++) {
//     Object.assign(empty, obj[i])
//     // console.log(obj[i])
//   }
//   return empty
// }
// let obj1 = {
//   fname: 'Kanya',
//   lname: 'Supon'
// }
// let obj2 = {
//   nickName: 'FFFF'
// }
// let result = mergeObj(obj1, obj2)
// console.log(result)


/////////////////////////////SPREAD///////////////////////////////
//lab4 
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// let mix = [5,...nums1,-6,-1,...nums2]
// console.log(mix)

// let sum = mix.reduce((prev,curr) => {
//   return prev + curr
// },0)
// console.log(sum)


//lab5 
// const nums = [1, -2, 3, 4,5];
// let recieve = [...nums]
// console.log(recieve,recieve[3]*recieve[3])


// const nums = [1, -2, 3, 4,5];
// let recieve = (nums) => {
//   return nums.map((item,index) => {
//     if(index == 3){
//       return item*item
//     }
//     return item
//   })
// }
// console.log(recieve(nums))


//lab6 
// let recieve = (name,surname,...hobby) => {
//   return [name,surname,...hobby, hobby.length]
// } 
// console.log(recieve('f','h','music','swimming'))


//lab7

// let doubleAndReturnArgs = (arr,...number) =>{
//   return ([...arr,...number.map((item) => item*item)])
// }

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// console.log(doubleAndReturnArgs([2], 10, 4)); 


//lab9
// const nums = [1, 2, 3, 4, 5];
// let cloneArray = (arr) => {
//   return [...arr]
// }
// let a = cloneArray(nums)
// a.pop()
// console.log(nums)

// lab10
// const nums = {a:1, b:2, c:3, d:4, e:5};
// let cloneObject = (obj) => {
//   return {...obj}
// }
// let a = cloneObject(nums)
// console.log(a)

////////////////////////Destructuring/////////////////////

//lab 11 
// let [first,second,third] = ['Maya','Marisa','Chi']
// console.log(first)
// console.log(second)
// console.log(third)
// // มีค่าเป็น Maya Marisa Chi 


//lab12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops);
// console.log(whiskers);
// console.log(aFewOfMyFavoriteThings); 
// มีค่าเป็น Raindrops on roses , whiskers on kittens 
//และ Array(2) [Bright copper kettles,warm woolen mittens]

//lab13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers);
//ตอบ array(3)[10,30,20] ตำแหน่ง2แทน1 ส่วน1แทน2

//lab14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets)
// console.log(yearNeptuneDiscovered)
//ตอบ 8 กับ 1846 

//lab15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); 
//ตอบ { yearMarsDiscovered: 1659, yearNeptuneDiscovered: 1846}

//lab16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }));
// console.log(getUserData({ firstName: 'Melissa' }));
// console.log(getUserData({}));
// ตอบ   Your name is Alejandro and you like purple
//       Your name is Melissa and you like green
//       Your name is undefined and you like green


//lab17
// let guest = 'Jane';
// let admin = 'Pete';

// [guest,admin] = [admin,guest]
// console.log(guest,admin)

//lab18

// let user = {
//   firstName: 'Kan',
//   lastName: 'Supo',
//   age: 20
// }
// let checkage = (obj) => {
//   if (obj.age > 18){
//     console.log(`Hello ${obj.firstName} ${obj.lastName}`)
//   }
//   return ('ไม่มีสิทธิ์เข้าใช้งาน')
// }
// checkage(user)

//อีกวิธี
// function isOverEighteen(obj){
//   let { firstName, lastName, age } = obj
//   if (age >= 18){
//     console.log(`Welcome ${firstName} ${lastName}`)
//   }else{
//     console.log('You are not allowed')
//   }
// }
// isOverEighteen(user)


//lab19
// let user = {
//   name: 'John',
//   years: 27
// };

// let  {name,years:age,isAdmin = false} = user
// console.log(isAdmin)


//lab21
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [a, [b, [[[c, d], e], f]]] = arr
// console.log(a,b,c,d,e,f)

//lab22
// const obj = { prop: 5, prop2: 10 };
// let { prop: a, prop2: b } = obj
// console.log(a,b)

//lab23
// let a, b;
// ({ a, b } = { a: 1, b: 2 });
// console.log(a,b)
//a = 1 //b = 2

//lab24
// const [, , , a, b] = [1, 2, 3];
// console.log(a,b)
//a กับ b = undefined

//lab25
// const q = { prop: 5, prop2: [10, 100] };
// let {prop : x, prop2 : [ ,y]} = q
//  {prop : 5, prop2 : [10, 100] }
// console.log(x,y)


//lab26
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// let {prop: x,prop2: {prop2: {nested: [, y, ]}}} = q
// console.log(x,y)

//lab27
// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];
// for(let {firstName, lastName} of names){
//   console.log(`${firstName} ${lastName}`)
// }

//lab28
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];
// for (let {user,age = 'unknown'} of users){
//   console.log(user,age)
// }
