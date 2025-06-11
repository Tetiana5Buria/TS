"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("hi");
// 1.
/*  function getFirstWord(a) {
    return a.split(/ +/)[0].length;
}*/
function getFirstWord(a) {
    //srting=>number
    return a.split(/ +/)[0].length;
}
console.log(" function 1:", getFirstWord("Tomorrow will be ok!"));
// 2.
/* function getUserNamings(a) {
  return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}
 */
function getUserNamings(a) {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0],
    };
}
const user = { name: "Ivan", surname: "Laso" };
console.log(" function 2:", getUserNamings(user));
// 3.// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
/* function getAllProductNames(a) {
  return a?.products?.map(prod => prod?.name) || [];
} */
function getAllProductNames(a) {
    var _a;
    //optional
    return ((_a = a === null || a === void 0 ? void 0 : a.products) === null || _a === void 0 ? void 0 : _a.map((prod) => (prod === null || prod === void 0 ? void 0 : prod.name) || "")) || [];
}
console.log(" function 3:", getAllProductNames({
    products: [
        { name: "apple" },
        { name: "" },
        { name: "bread" },
        { name: "sweets" },
    ],
}));
// 4.1
// easy way is using 'as' keyword
// hard way is ?...
/* function hey(a) {
    return "hey! i'm " + a.name();
}
hey({name: () => "roman", cuteness: 100})
hey({name: () => "vasyl", coolness: 100}) */
{
    function hey(a) {
        // use as=> easy way
        return "hey! i'm " + a.name();
    }
    console.log(" function 4.1a:", hey({ name: () => "Roman", cuteness: 100 }));
    console.log(" function 4.1b:", hey({ name: () => "Vasyl", coolness: 100 }));
}
/* hard way  Union types*/
{
    function heyHard(a) {
        return "hey! i'm " + a.name();
    }
    console.log(" function 4.1 UnionType:", heyHard({ name: () => "roman", cuteness: 100 }));
    console.log(" function 4.1 UnionType:", heyHard({ name: () => "vasyl", coolness: 100 }));
}
// 4.2
/* function hey(abstractPet) {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("snizhok", true)
let b = new Dog("sirko", 333)
hey(a)
hey(b) */
{
    class AbstractPet {
        constructor(name, property) {
            this.name = name;
            this.property = property;
        }
    }
    class Cat extends AbstractPet {
    }
    class Dog extends AbstractPet {
    }
    function hey(abstractPet) {
        return "hey! i'm " + abstractPet.name();
    }
    let a = new Cat(() => "snizhok", true);
    let b = new Dog(() => "sirko", 333);
    console.log(" function 4.2:", hey(a));
    console.log(" function 4.2:", hey(b));
}
// 4.3
{
    /* or second option
       type Cat = { name: () => string; type: "cat"; cuteness: number };
  type Dog = { name: () => string; type: "dog"; coolness: number };
  type Pets = Cat | Dog; */
    function hey(a) {
        return ("hey! i'm " +
            a.name() +
            ", " +
            (a.type === "cat" ? "cuteness: " + a.cuteness : "coolness: " + a.coolness));
    }
    console.log(" function 4.3:", hey({ name: () => "snizhok", type: "cat", cuteness: 100 }));
    console.log(" function 4.3:", hey({ name: () => "sirko", type: "dog", coolness: 100 }));
}
// 5.
// google for Record type
/* function stringEntries(a) {
   return Array.isArray(a) ? a : Object.keys(a)
} */
function stringEntries(a) {
    return Array.isArray(a) ? a : Object.keys(a);
}
console.log("function 5:", stringEntries(["apple", "bread", "sweets"]));
console.log("function 5:", stringEntries({ apple: 5, bread: 2, sweets: 1 }));
// 6.
// ....can be hard, don't worry and SKIP if you do not know how to do it
/* async function world(a) {
    return "*".repeat(a)
}
const hello = async () => {
   return await world(10)
}
hello().then(r => console.log(r)).catch(e => console.log("fail"))

 */
function world(a) {
    return __awaiter(this, void 0, void 0, function* () {
        return "*".repeat(a);
    });
}
const hello = () => {
    return world(10); //return Promise
};
hello()
    .then((r) => console.log(r))
    .catch((e) => console.log("fail"));
/*  the second option without Hello()
async function world(a: number): Promise<string> {
return "*".repeat(a);
}

world(10)
.then((r) => console.log(r))
.catch((e) => console.log("fail"));
*/
