"use strict";
//명시적 유형
// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
// greet("A-1", new Date());
/**
    - string, number, boolean

    - [1, 2, 3] number[], string[] Array<number>  T<U>

    [ number] - Tuples - https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
 */
/**
    [any]
    - Typescript 에는 특정 값으로 인해 유형 검사 오류가 발생하는 것을 원하지 않을 때마다 사용할 수 있는 특수 유형
 */
// let obj: any = { x:0 };
// obj.bar = 100;
// console.log(obj);
// obj = "hello";
// console.log(obj);
// const n: number = obj;
// console.log(n);
/**
 * 변수에 대한 유형
 */
// let myName: string = "Alice";
// console.log(myName);
/**
 * 매개변수 유형
 */
// function greet(name: string) {
//     console.log(name);
// }
// greet(10);
// error: Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
/**
 * 반환 유형
 */
// function getNum(): number {
//     return 26;
// }
// console.log(getNum());
/**
 * 익명 함수
 * : 함수 선언과 다름, TS가 호출 방법을 결정할 수 있는 위치에 함수가 나타나면
 * 해당 함수의 매개 변수에 자동으로 유형이 저장됨
 */
// const names = ["abc", "def", "ghi"];
// names.forEach((s) => {
//     console.log(s.toUpperCase());
// });
/**
 * 객체 유형
 */
// function printCoord(pt: { x:number, y:number }) {
//     console.log("pt x: " + pt.x);
//     console.log("pt y: " + pt.y);
// }
// printCoord({ x:3, y:7 });
/**
 * 선택적 유형
 */
// function printName(obj: { a: string, b?: string }) {
//     console.log('obj-a: ', obj.a);
//     if(obj.b) console.log('obj-b: ', obj.b);        
// }
// printName({ a: "aa" });
// printName({ a: "aa", b: "bb" });
/**
 * 유니온 유형
 * : TS의 유형 시스템을 사용하면 다양한 연산자를 사용하여 가존 유형에서 새로운 유형을 구축가능하다
 */
// 문자열이나 숫자에 대해 연산 수행할 수 있는 함수
// function printId(id: number | string) {
//     console.log('ID: ', id);
//     //ex1) -- error
//     // console.log('ID: ', id.toUpperCase()); //error
//     //ex2) -- success
//     // if(typeof id === 'string') console.log('ID: ', id.toUpperCase());     
// }
// printId(10);
// printId("aa");
// printId({a: 10}); //error
// Array.isArray 사용 함수
// function welcomePeople(x: string[] | string) {
//     if(Array.isArray(x)) { 
//         console.log(x.join(" and "));
//     } else {
//         console.log(x);
//     }
// }
// welcomePeople(["a", "b"]);
// welcomePeople("a");
// string[], string 에 공통적으로 사용할수 있는 함수가 있을수도 있으니, 응용가능
// function welcomePeople(x: string[] | string) {
//     console.log(x.slice(0, 3));
// }
// welcomePeople(["a", "b"]);
// welcomePeople("a");
/**
 * 유형 별칭
 *  - 우리는 객체 유형과 공통체 유형을 유형 주석에 직접 작성하여 사용해 왔다.
 * 이는 편리하지만 동일한 유형을 두 번 이상 사용하고 단일 이름으로 참조하려는 경우가 많다.
 */
// type Point = {
//     x: number;
//     y: number;
// }
// function printCoord(pt: Point) {
//     console.log(pt.x);
//     console.log(pt.y);
// }
// printCoord({ x:10, y:20 });
/**
 * 인터페이스
 * : 인터페이스 선언은 객체 유형의 이름을 지정하는 또 다른 방법
 */
// interface Point {
//     x: number;
//     y: number;
// }
// function printCoord(pt: Point) {
//     console.log(pt.x);
//     console.log(pt.y);
// }
// printCoord({ x: 100, y:100 });
/**
 * type 과 interface의 차이점
 * - type과 interface는 매우 유사하며 대부분의 경우 자유롭게 선택할 수 있음.
 * 거의 모든 기능을 interface 에서 사용할 수 있음
 *
 * type 중요한 차이점은 항상 확장 가능한 인터페이스와 비교하여 새 속성을
 * 추가하기 위해유형을 다시 열 수 없다는 것임.
 */
// 참고: https://yceffort.kr/2021/03/typescript-interface-vs-type
//[interface]
// interface PeopleInterface {
//     name: string
//     age: number
// }
// const me1: PeopleInterface = {
//     name: 'yc',
//     age: 34,
// }
//[type]
// type PeopleType = {
//     name: string
//     age: number
// }
// const me2: PeopleType = {
//     name: 'yc',
//     age: 31,
// }
/**
 * https://typescript-kr.github.io/pages/literal-types.html
 *
 * 리터럴 타입
 */
// const helloWorld = "Hello World";
//Const를 사용하여 Hell world가 변경되지 않음을 보장
// 따라서, TS는 문자열이 아닌 Hello World로 타입을 정함
// let hiWorld = "Hello World";
// 반명, let은 변경될 수 있으므로 컴파일러는 문자열이라고 선언
/** 문자열 리터럴 타입 String Literal Types  */
// 문자열 리터럴 타입은 유니언 타입, 타입 가드 그리고 타입 별칭과도 잘 결함됨 
// 이런 기능을 함께 사용하여 문자열로 enum과 비슷한 형태를 갖출 수 있음
// type temp = "a" | "b" | "c";
// function tempFunc(s: string, s1: temp) { 
// }
// tempFunc("a", "fewfw"); //error
// error 발생, s1의 매개변수는 a, b, c 의 유형으로 지정되어있기 떄문임.
//EX1) 문자열 리터럴 
// declare function handleRequest(url: string, method: "GET" | "POST") { }
// const req = { url: "https://..", method: "GET" };
// handleRequest(req.url, req.method);
//Error: handleRequest() 함수에서의 method는 string 유형이 아니라, "GET", "POST" 유형이기떄문에
// 사용 불가함. 그래서 아래와 같은 2가지 방법으로 사용이 가능함
//방법1)
//Change 1
// const req = { url: "https://..", method: "GET" as "GET"};
// handleRequest(req.url, req.method);
//Change 2
// handleRequest(req.url, req.method as "GET");
//방법2)
// const req = { url: "https://..", method: "GET"} as const;
// handleRequest(req.url, req.method);
// -> as const 전체 객체를 유형 리터럴로 변환해서 사용 가능
/** 숫자 리터럴 타입 Numeric Literal Types */
// function compare(a: string, b: string): -1 | 0 | 1 {
//     return a === b ? 0 : a > b ? 1 : -1;
// }
// let res = compare("1", "2");
// console.log(res);
/**
 * null, undefined
 * : JS에는 없거나 초기화되지 않은 값을 알리는 데 사용되는 두 가지 기본 값인 null, undefined가
 * 있음
 */
// function liveDangerously(x?: number | null) {
//     console.log(x!.toFixed);
// }
/**
 * ---- Narrowing ----
 * : https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 */
//error
// function padLeft(padding: number | string, input: string) {
//     return " ".repeat(padding) + input;
// }
//padding이 명시적으로 number 인지 string인지 알수 없기 떄문에 오류가 발생됨.
//sovled
// function padLeft(padding: number | string, input: string) {
//     if(typeof padding === 'number') {
//         return " ".repeat(padding) + input;
//     }
//     //TS는 typeof padding === 'number' 라고 하는 특별한 형태의 코드를 보고 이해함
//     //TS는 주어진 위치에서 가능한 가장 구체적인 유형의 값을 분석하기 위해 프로그램이 취할 수 있은
//     //실행 경로를 따름. 
//     //이러한 특수검사(유형가드)와 할당을 살펴보고 선언된 것보다 더 구체적인 유형으로
//     //유형을 구체화하는 프로세스를 축소라고 함
//     return padding + input;
// }
/**
 * typeof 타입 가드
 * : JS는 typeof 런타임에 갖는 유형에 때한 매우 기본적인 정보를 제공할 수 있는 연산자를 지원함
 *
 * - string, number, bigint, boolean, symbol, undefined, object, function
 */
/**
 * [Generics] - 제네릭
 *
 * https://typescript-kr.github.io/pages/generics.html
 *
 * C#과 Java 같은 언어에서, 재사용 가능한 컴포넌트를 생성하는 도구상자의 주요 도구 중 하나는 제니릭 이다.
 * 즉, 단일 타입이 아닌 다양한 타입에서 작동하는 컴포넌트를 작성할 수 있다. 사용자는 제네릭을 통해
 * 여러 타입의 컴포넌트나 자신만의 타입을 사용할 수 있다.
 */
function identity(arg) {
    return arg;
}
console.log(identity("mystring"));
function loggingIndentity(arg) {
    console.log(arg.length);
    return arg;
}
console.log(loggingIndentity(["mystring", "mystring"]));
function loggingIndentity2(arg) {
    console.log(arg.length);
    return arg;
}
console.log(loggingIndentity2(["mystring", "mystring"]));
//제네릭 제약조건에서 타입 매개변수 사용 
// (Using Type Parameter in Generic Constraints)
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
getProperty(x, "m"); // error a, b, c, d 에 해당안됨
/**
 * functions
 *
 * https://www.typescriptlang.org/docs/handbook/2/functions.html
 *
 *
 * : 함수는 로컬 함수, 다른 모듈에서 가져온 함수, 클래스의 메서드 등 모든 애플리케이션의
 * 기본 구성 요소 입니다. 값이기도 하며 다른 값과 마찬가지로 TS에는 함수 호출 방법을 설명하는
 * 다양한 방법이 있음.
 */
//함수 유형 표현식
// function greeter(fn: (a: string) => void) {
//     fn("Hello World");
// }
//위의 함수 greeter함수를 아래와 같이 표현가능
// type GreetFunction = (a: string) => void;
// function greeter(fn: GreetFunction) {
//     fn("Hello World");
// }
// function printToConsole(s: string) {
//     console.log(s);
// }
// greeter(printToConsole);
//Call Signatures
//: JS에서 함수는 호출 가능 외에도 속성을 가질 수 있음
// 그러나 함수 유형 표혀닉 구문에서는 속성 선언을 허용하지 않으며, 속성으로 호출 가능한것을
// 설명하려면 객체 유형에 호출 서명을 작성할수 있음
// type DecribableFunction = {
//     description: string;
//     (someArg: number): boolean;
// }
// function doSomething(fn: DecribableFunction) {
//     console.log(fn.description + " returned " + fn(6));
// }
// function myFunc(someArg: number) {
//     return someArg > 3;
// }
// myFunc.description = 'default description';
// doSomething(myFunc);
// Construct Signatures
// - [new]. TS는 일반적으로 새 객체를 생성하기 때문에 이를 생성자라고 부름
// 호출 서명 앞에 키워드를 추가하여 구문 서명을 작성가능함
// type SomeContructor = {
//     new (s: string): SomeObject;
// }
