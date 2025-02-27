type Person = {
  name: string;
};

const person: Person = {
  name: "Shaik",
};

// Annotation -
/**
 *
 * Annotation are used to specify the data type of a variable,
 * parameter, function return value and other type values.
 *
 */

// -- Annotating
// let myValL: type = value

// -------- String ---------
let myName: string = "Adnan Shaik";
console.log(myName);
myName = "Shaik yousuf Adnan";
console.log(myName);

// -------- Number ---------

let favNumber: number = 7;
console.log(favNumber);

// -------- Boolean ---------
let is_premium: boolean = false;
console.log(is_premium);

// Type inference

/**
 *
 * Type inference is a feature in TypeScript
 * that allows the compiler to automatically determine
 * the type of a variable.
 *
 */

let firstName = "Shaik Adnan";
let firstNumber = 8;
console.log(firstName);
console.log(firstNumber);

// Any Type

/**
 *
 * Used to represent any type and disable all type
 * checking for that variable and it's properties.
 *
 */

let color: any = "crimson";
console.log(typeof color);
color = 20;
console.log(typeof color);

// Function Parameter Annotations

/**
 *
 * Function parameter annotations in TypeScript are used to
 * specify the expected types types of the parameters that a
 * function takes
 *
 */

// Regular function

function double(x: number, y: number) {
  return x * y;
}

const resultD = double(5, 3);
console.log(resultD);

// Arrow function
const addOne = (num: number) => {
  return num + 1;
};

const result = addOne(5);
console.log(result);

// Default Params Value

function printName(name: string = "Adnan") {
  return `Hello ${name}`;
}
const nameRes = printName();
const nameRes2 = printName("Anjum");
console.log(nameRes);
console.log(nameRes2);

// Return Annotations

function double2(x: number): number {
  return x * x;
}
const doubleRes = double2(5);
console.log(doubleRes);

// -- Arrow function --

// Return Annotations
const arrGreet = (name: string): string => {
  return `Hello there, ${name}`;
};

const greetRes = arrGreet("Adnan");
console.log(greetRes);

// Default Params Value

const arrGreet2 = (name: string = "Anjum"): string => {
  return `Hello there, ${name}`;
};

const greetRes2 = arrGreet2("Adnan");
const greetRes3 = arrGreet2("Adnan");
console.log(greetRes2);
console.log(greetRes3);

// VOID in TS

/**
 *
 * Void is a type that represents absence of any value.
 * it is often used as the return type for functions that do
 * not return a value.
 *
 */

function printMessage(message: string): void {
  console.log(`This is my message: ${message}`);
}
printMessage("Hello");

// Never (rarely used)

/**
 *
 * The never keyword is used to indicate that a function will
 * not return anything, or that a variable can never have a value.
 *
 * The never type is useful for indicating that certain code paths
 * should never reached, or that certain vales are impossible.
 *
 */

// let x: never;

// function neverReturns(msg: string): never {
//   throw new Error(msg);
// }

// function infiniteLoop(): never {
//   while (true) {}
// }

// x = infiniteLoop();

// Array Types

/**
 *
 * Arrays are a type of object that can store multiple values
 * of the same data type.
 *
 * Arrays in TS are typed, which means you can specify
 * the type of values that an array can hold.
 *
 */

const strings: Array<string> = ["hello", "there", "how are"];
const numbers: Array<number> = [1, 2, 3];
const objects: Array<object> = [{}, {}, {}];

const nums: number[] = [1, 2, 3];
const strins: string[] = ["h1", "there"];
const objs: object[] = [{}, {}];

// Error
// nums.push(true);
// nums.push(20);

// Multi Dimensional

/**
 *
 * A multi dimensional array is an array that contains other arrays
 * as its elements.
 *
 * It can be defined using the same notation as one-dimensional
 * arrays, but with nested square brackets.
 *
 */

const multiArr: number[][] = [[12], [1, 4, 5]];

const multiArrObjs: object[][] = [[{}, {}], [{}]];

// Objects

type Person1 = {
  firstname: string;
  lastname: string;
  age: number;
};

const personObjType: Person1 = {
  firstname: "Shaik",
  lastname: "adnan",
  age: 33,
};

const personObj: { firstname: string; lastname: string; age: number } = {
  firstname: "Shaik",
  lastname: "adnan",
  age: 33,
};

console.log(personObj);
console.log(personObjType);

// Object as function return value

function printUser(): { name: string; age: number } {
  return {
    name: "shaik",
    age: 12,
  };
}

console.log(printUser());

// Type Aliases

/**
 *
 * A type alias is a way to create a new name for an existing
 * type. It allows you to define a custom type that refers to another type
 * and give it a more meaningful or descriptive name.
 *
 * Type aliases are defined using the type keyword, followed
 * by the name of the alias, an equal sign (=), and the type it refers to.
 *
 */

type myString = string;

type TypeObj = {
  type: object;
  name: string;
};

type Pers = {
  fn: string;
  ln: string;
  age: number;
};

const namedComp: myString = "hey there";
const namedObj: TypeObj = {
  type: {},
  name: "hey there",
};

const typeFunc = (person: Pers): string => {
  return `Hello mr.${person.fn} ${person.ln}, your age is ${person.age}`;
};

const typeFuncRes = typeFunc({ fn: "Shaik", ln: "Adnan", age: 20 });
console.log("---- here -----");
console.log(typeFuncRes);

// Optional Properties

/**
 *
 * Can make any property optional, by adding a question
 * mark at the end of the property.
 *
 */

type Optional = {
  name: string;
  age?: number;
  readonly location: string;
};

const optional: Optional = {
  name: "Adnan",
  location: "USA",
};

console.log(optional);

const optionalFunc = (user: Optional, age: number = 23): string => {
  return `Hello there, ${user.name} ${age} from ${user.location}`;
};

console.log(optionalFunc({ name: "Adnan", location: "India" }));

// Read-only

// will throw and error since optional.location is a readonly property
// Error
// optional.location = "China";

// Intersection Types

/**
 *
 * An intersection type is a way yo combine multiple
 * types into a single type that includes all the properties
 * and methods of constituent type.
 *
 */

type UserInfo = {
  fn: string;
  ln: string;
  age: number;
};

type AccountDetails = {
  email: string;
  phone: number;
};

type User = UserInfo & AccountDetails;

const Adnan: User = {
  fn: "Shaik",
  ln: "Anjum",
  age: 20,
  phone: 13255,
  email: "yousufwrk0@gmail.com",
};

console.log(Adnan);

// Unions

/**
 *
 * Unions are used to declare a type that can have one of
 * several possible types. Unions are useful when we want to
 * allow a variable or parameter to accept multiple types.
 *
 * The syntax for defining a union type in TS uses the pipe
 * symbol (|)
 *
 */

let myVar: number | string = 12;
myVar = "string";

type Adn = {
  name: string;
  age: number;
  location: string;
};

const multArr: (Adn | string)[] = [
  { name: "Adnan", age: 12, location: "China" },
  "hi",
];

const unionFunc = (users: number | string[]) => {
  return users;
};

const uniRes = unionFunc(1);

console.log(uniRes);
console.log(multArr);

// Literal type

/**
 *
 * Literal types allow us to specify a value that can only be one specific literal value.
 * This means that a variable with a literal type can only have one specific value and no other.
 *
 */

let colour: "red" | "green" | "blue";

colour = "red"; // valid
// colour = "pink"; // inValid

// Tuples

/**
 *
 * Tuple is a type that represents an array with a fixed number of elements, where each element can have
 * a different type. The order of the types in the tuples definition corresponds to the order of the values in the actual array.
 *
 */

let myTuple: [string, number] = ["4", 4];

console.log(myTuple[0]);
console.log(myTuple[1]);
