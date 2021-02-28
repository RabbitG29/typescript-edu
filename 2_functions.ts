function sum(a: number, b: number): number {
    return a + b
}

// js와 달리 아래처럼 부르면 오류가 발생
// sum(10,20,30,40)

// ?를 붙이면 optional한 parameter가 된다.
function log(a: string, b?: string) {
    console.log(a)
}