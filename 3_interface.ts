interface User {
    age: number;
    name: string;
}

// 변수에 활용
let kdh: User = {
    age: 27,
    name: 'DH'
}

// 함수에 활용
function sample(user: User): void {
    console.log(user)
}

// 함수 스펙에 활용
interface ISum {
    (a: number, b:number): number;
}

const sum: ISum = function(a:number, b:number): number {
    return a+b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

// 딕셔너리
interface StringRegexDictionary {
    [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// 인터페이스 확장(상속)
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}