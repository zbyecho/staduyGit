/*
 * @Date: 2020-11-13 15:35:12
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-11-13 15:35:12
 * @FilePath: /undefined/Users/zhangbaoyan/Downloads/learningMaterials-master/Code/Untitled-5.js
 */

console.log(42 + (function() { return 42})() );

var a = {
    name: "a",
    fun: function () {
        return this;
    }
}
console.log(a.fun());

aGlobalVariable = 'i drink your milkshake';

aGlobalVariable

aVariable = "Outer";

function afun() {
    var aVariable = 'Middle';

    return [1,2,3].map( item => {
        var aVariable = "IN";
        console.log([aVariable, item].join(' '));
        return [aVariable, item].join(' ')
    })
}
afun()

function strangeIndent(n) {
    for( var i = 0; i < n; i++ ) 
    return i

    
    
}
console.log(strangeIndent(138));

function whatWasTheLocal() {
    var CAPTURED = 'Oh hai';

    return function () {
        console.log(CAPTURED);
        return CAPTURED
    }
}
var reportLocal = whatWasTheLocal(10)