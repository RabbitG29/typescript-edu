class Person7 {
    // 멤버 변수 선언, 접근 지정자도 선언 가능
    private name: string;
    public age: number;
    readonly log: string;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}