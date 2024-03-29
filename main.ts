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

function withNever(foo: Foo): void {
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
