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
