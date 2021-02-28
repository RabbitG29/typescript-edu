interface IPerson {
    name: string;
    age: number;
}

type Person2 = {
    name: String;
    age: number;
}

let kdh2: IPerson = {
    name: 'kdh',
    age: 27
}

let kdh3: Person2 = {
    name: 'kdh',
    age: 27
}