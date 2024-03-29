// 基本类型

const a: number = 89;
const b: string = "hello";
const c: boolean = true;
// null 和 undefined 是所有类型的子类型
// 可以把 null 和 undefined 赋值给其他类型变量
const d: null = null;
const e: undefined = undefined;

// any 类型

let value1: any = 64;
// any 类型可以赋值为任意类型
// 相当于暴力通过类型检查
value1 = "Hello World! ";
value1 = true;
value1 = {};

// unknown 类型

let value2: unknown = 10;
value2 = 1.25;
value2 = true;
// unknown 类型不能赋值给 unknown 和 any 外的任何类型
value1 = value2;
// 当 unknown 进行了类型断言或类型推断后，就可以赋值给其他类型
value2 = "Hello World! ";
if (typeof value2 === "string") {
  const str: string = value2.toLowerCase();
}

// void 类型

function print_greetings(): void {
  console.log("Hello World! ");
}

// never 类型

type Foo = string | number | boolean;

function withNever(foo: Foo) {
  if (typeof foo === "string") {
    console.log(foo.toLowerCase());
  } else if (typeof foo === "number") {
    console.log(foo - 1);
  } else if (typeof foo === "boolean") {
    console.log(!foo);
  }
  // never 类型可用于检查是否所有类型都已经处理
  else {
    const check: never = foo;
  }
}

// 数组类型

const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: Array<number> = [1, 2, 3, 4, 5];

// 元组类型

const tuple1: [number, string] = [1, "hello"];

// 接口类型

// 定义一个接口
interface Person {
  name: string;
  age: number;
}
// 使用接口
const person: Person = {
  name: "Sharon",
  age: 21,
};
// 只读和可选属性
interface Person1 {
  // 只读属性
  readonly name: string;
  // 可选属性
  age?: number;
  // 其它任意属性
  [prop: string]: any;
}

// 类型别名

type count = number | number[];
function hello(value: count) {
  if (Array.isArray(value)) {
    console.log(value.join(", "));
  } else {
    console.log(value);
  }
}

// 函数类型

// 需要指定参数和返回值类型
function add1(a: number, b: number): number {
  return a + b;
}
// 也可用接口定义函数类型
interface add2 {
  (a: number, b: number): number;
}
// 可选类型和默认值
function add3(a: number = 0, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}
// 用扩展运算符表示其他参数
function add4(...args: number[]): number {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}

// 函数重载
type Types = string | number;
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Types, b: Types): Types {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}