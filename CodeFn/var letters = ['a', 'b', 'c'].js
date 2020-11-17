var letters = ['a', 'b', 'c']

function nativeH(a, index) {

    if(!IsNumber(index)) fail('number')

    if(!Indexed(a, index)) fail('string')

    if((index < 0 ) || (index > a.length - 1) ) {
        fail('index Not')
    }

    return (a[index])
}

function isString(str) {
    if(Object.prototype.toString.call(str)=="[object String]") {
        return true
    } else {
        return false
    }
}

function Indexed(data) {
    return Array.isArray(data) || isString(data)
}


function fail(str) {
    throw new Error(str);
}

function IsNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

function second(a) {
    console.log(nativeH(a,1));
    return nativeH(a,1)
}

// nativeH(letters, 0)
// second(['a','b'])
second('hello')
// second({})
// console.log(nativeH(letters, 0));
// console.log(nativeH({}, 0));
// console.log(nativeH("letters", 0));