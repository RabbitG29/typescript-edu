interface Deveoper {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Deveoper | Person {
    return  { name: 'kdh', age: 13, skill: 'hi' }
}

let kdh = introduce()
// Type Assertion 사용
if((kdh as Deveoper).skill) {
    console.log((kdh as Deveoper).skill)
}

// Type Guard
function isDeveloper(target: Deveoper | Person):target is Deveoper {
    return (target as Deveoper).skill !== null
}

// Type Guard를 사용할 경우
if(isDeveloper(kdh)) {
    console.log(kdh.skill)
}