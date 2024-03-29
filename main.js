"use strict";
// 基本类型
const a = 89;
const b = "hello";
const c = true;
// null 和 undefined 是所有类型的子类型
// 可以把 null 和 undefined 赋值给其他类型变量
const d = null;
const e = undefined;
// any 类型
let value1 = 64;
// any 类型可以赋值为任意类型
// 相当于暴力通过类型检查
value1 = "Hello World! ";
value1 = true;
value1 = {};
// unknown 类型
let value2 = 10;
value2 = 1.25;
value2 = true;
// unknown 类型不能赋值给 unknown 和 any 外的任何类型
value1 = value2;
// 当 unknown 进行了类型断言或类型推断后，就可以赋值给其他类型
value2 = "Hello World! ";
if (typeof value2 === "string") {
    const str = value2.toLowerCase();
}
// void 类型
function print_greetings() {
    console.log("Hello World! ");
}
function withNever(foo) {
    if (typeof foo === "string") {
        console.log(foo.toLowerCase());
    }
    else if (typeof foo === "number") {
        console.log(foo - 1);
    }
    else if (typeof foo === "boolean") {
        console.log(!foo);
    }
    // never 类型可用于检查是否所有类型都已经处理
    else {
        const check = foo;
    }
}
// 数组类型
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];
// 元组类型
const tuple1 = [1, "hello"];
// 使用接口
const person = {
    name: "Sharon",
    age: 21,
};
function hello(value) {
    if (Array.isArray(value)) {
        console.log(value.join(", "));
    }
    else {
        console.log(value);
    }
}
// 函数类型
// 需要指定参数和返回值类型
function add1(a, b) {
    return a + b;
}
// 可选类型和默认值
function add3(a = 0, b, c) {
    return a + b + (c ? c : 0);
}
// 用扩展运算符表示其他参数
function add4(...args) {
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
// 泛型
// 单个泛型参数
function identity1(arg) {
    return arg;
}
// 多个泛型参数
function identity2(arg1, arg2) {
    return [arg1, arg2];
}
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
const student1 = { key: 1, value: "Sharon" };
// 联合类型
let acan;
acan = "Hello World! ";
acan = 21;
const pet = {
    name: "Sharon",
    age: 21,
    gender: "female",
};
// 类型推断
let value3 = 10;
// value3 的类型为 number
value3 = 1.25;
let value4 = "Hello World! ";
// value4 的类型为 string
value4 = "Hello TypeScript! ";
let value5;
// value5 的类型为 any
value5 = 10;
value5 = "Hello World! ";
value5 = true;
// 类型断言
let slogan = "Hello World! ";
// 断言 slogan 是 string 类型
let strLength1 = slogan.length;
let strLength2 = slogan.length;
// 非空断言
let user;
// 断言 user 不为空
user = "Sharon";
console.log(user.toUpperCase());
// 赋值断言
let dog;
console.log(dog);
// 使用 in 运算符判断属性是否存在
function isString(value) {
    if ("x" in value) {
        console.log(value.x);
    }
    if ("y" in value) {
        console.log(value.y);
    }
}
// 使用 typeof 运算符判断类型
function isTypeOf(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}
// 使用 instanceof 运算符判断实例
function isInstance(date) {
    if (date instanceof Date) {
        date.getDate();
    }
    else {
        return new Date("1970-01-01");
    }
}
// 枚举
var directions;
(function (directions) {
    directions[directions["UP"] = 0] = "UP";
    directions[directions["DOWN"] = 1] = "DOWN";
    directions[directions["LEFT"] = 2] = "LEFT";
    directions[directions["RIGHT"] = 3] = "RIGHT";
})(directions || (directions = {}));
var colors;
(function (colors) {
    colors[colors["RED"] = 6] = "RED";
    colors[colors["GREEN"] = 7] = "GREEN";
    colors[colors["YELLOW"] = 8] = "YELLOW";
})(colors || (colors = {}));
var subjects;
(function (subjects) {
    subjects["MATH"] = "Math";
    subjects["ENGLISH"] = "English";
    subjects["SCIENCE"] = "Science";
})(subjects || (subjects = {}));
console.log(directions.UP, directions.DOWN, directions.LEFT, directions.RIGHT);
console.log(colors.RED, colors.GREEN, colors.YELLOW);
console.log(subjects.MATH, subjects.ENGLISH, subjects.SCIENCE);
