let a = 'abc'

function getB(b = '') {
    return b
}

// Best Common Type -> 각 타입들과 가장 잘 호환되는 타입 선정
let arr = [1,2,true,true,'a']

// LangServer로 인해서 타입 추론이 가능한 것.