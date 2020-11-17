function whatWasTheLocal() {
    var CAPTURED = 'Oh hai';

    return function () {
        console.log(CAPTURED);
        return CAPTURED
    }
}
var reportLocal = whatWasTheLocal()
reportLocal()

function createScaleFunction(params) {

    return function(v) {
        return [v].map( n => {
            return (n * params)
        })
    }
    
}

var scale10 = createScaleFunction(10);

// 变量遮蔽
var shadowed = 0;

function argShadow(shadowed) {
    return ["Value is", shadowed].join(' ')
}

console.log((argShadow(108)));
console.log((argShadow()));

function varShadow(shadowed) {
    var shadowed = 4320000;
    return ["Value is", shadowed].join(' ')
}
console.log(varShadow(shadowed));