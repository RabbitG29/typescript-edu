function logText<T>(text: T): T {
    console.log(text)
    return text 
}

interface Dropdown<T> {
    value: T;
    selected: boolean;
}
// <T extends MyType>과 같은 형태로 Generic에 제한을 줄 수 있다.