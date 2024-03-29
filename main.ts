// 基本类型

const a: number = 89;
const b: string = "hello";
const c: boolean = true;
// null 和 undefined 是所有类型的子类型
// 可以把 null 和 undefined 赋值给其他类型变量
const d: null = null;
const e: undefined = undefined;

// any 类型

let value: any = 64;
// any 类型可以赋值为任意类型
// 相当于暴力通过类型检查
value = "Hello World! ";
value = true;
value = {};
