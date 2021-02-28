// Type Compatibility : 특정 타입이 다른 타입에 잘 호환되는지?
// -> interface 및 class 간에 호환이 되는가? type alias를 판별하는 것이 아니라 내용을 보고 판단.
interface Developer2 {
    name: string;
    skill: string;
}

interface Person2 {
    name: string;
}

let developer: Developer2
let person: Person2

developer = person; // 이건 person에 없는 속성(skill)이 있으므로 안 됨.
person = developer // 이건 person의 모든 속성을 가지고 있으므로 가능

// 함수
let add = ((a: number) => {
    // ...
})

let sum = ((a: number, b: number) => {
    // ...
})

add = sum // 인자가 부족하므로 안 된다.
sum = add // 인자를 모두 가지고 있으므로 가능

// Generic
interface Empty<T> {

}

let empty: Empty<string>
let empty2: Empty<number>
// 내용이 비어 있으므로 둘 간에 호환 가능
empty = empty2
empty2 = empty

interface NotEmpty<T> {
    data: T;
}

let notEmpty: NotEmpty<string>
let notEmpty2: NotEmpty<number>
// 내용에 generic의 사용이 있으므로 구조가 달라 호환 불가능
notEmpty = notEmpty2
notEmpty2 = notEmpty