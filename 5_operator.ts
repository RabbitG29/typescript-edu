// Union Type
function logMessage(value: string | number) {
    if(typeof value === 'number') {
        // Type guard로 동작. value가 number로 가정된다.
    }
    console.log(value);
}
logMessage('hi')
logMessage(100)

interface Person3 {
    name: string;
    age: number;
}

interface Developer2 extends Person3 {
    skill: string;
}

function askSomeone(someone: Developer2 | Person3) {
    // Union Type들이 공통적으로 가지는 속성에만 바로 접근 가능.
    someone.name
    // someone.skill은 Type Unsafe.
}

function askSomeone2(someone: Developer2 & Person3) {
    // someone은 Person3의 속성과 Developer2의 속성을 모두 가져야 한다. 둘을 합친 새로운 Type의 느낌
    someone.name
    someone.skill
}

// intersection type, 즉 &로 연결된 모든 type을 만족해야 한다.
let kdh4: string & number & boolean;