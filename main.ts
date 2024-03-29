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

// 泛型

// 单个泛型参数
function identity1<T>(arg: T): T {
  return arg;
}
// 多个泛型参数
function identity2<T, U>(arg1: T, arg2: U): [T, U] {
  return [arg1, arg2];
}
// 泛型约束
// 限制泛型参数必须包含 length 属性
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// 泛型接口
interface KeyPair<T, U> {
  key: T;
  value: U;
}
const student1: KeyPair<number, string> = { key: 1, value: "Sharon" };

// 联合类型

let acan: string | number;
acan = "Hello World! ";
acan = 21;

// 交叉类型

interface PetA {
  name: string;
  age: number;
}
interface PetB {
  name: string;
  gender: string;
}
const pet: PetA & PetB = {
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

let slogan: any = "Hello World! ";
// 断言 slogan 是 string 类型
let strLength1: number = (<string>slogan).length;
let strLength2: number = (slogan as string).length;

// 非空断言

let user: string | null | undefined;
// 断言 user 不为空
user = "Sharon";
console.log(user!.toUpperCase());

// 赋值断言

let dog!: string;
console.log(dog);

// 类型守卫

interface isInObj1 {
  index: number;
  x: string;
}
interface isInObj2 {
  index: number;
  y: string;
}
// 使用 in 运算符判断属性是否存在
function isString(value: isInObj1 | isInObj2) {
  if ("x" in value) {
    console.log(value.x);
  }
  if ("y" in value) {
    console.log(value.y);
  }
}
// 使用 typeof 运算符判断类型
function isTypeOf(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  }
}
// 使用 instanceof 运算符判断实例
function isInstance(date: Date | String) {
  if (date instanceof Date) {
    date.getDate();
  } else {
    return new Date("1970-01-01");
  }
}

// 枚举

enum directions {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}
enum colors {
  RED = 6,
  GREEN,
  YELLOW,
}
enum subjects {
  MATH = "Math",
  ENGLISH = "English",
  SCIENCE = "Science",
}
console.log(directions.UP, directions.DOWN, directions.LEFT, directions.RIGHT);
console.log(colors.RED, colors.GREEN, colors.YELLOW);
console.log(subjects.MATH, subjects.ENGLISH, subjects.SCIENCE);
