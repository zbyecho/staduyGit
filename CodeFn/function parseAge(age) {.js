/*
 * @Date: 2020-11-13 15:34:59
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-11-13 15:34:59
 * @FilePath: /undefined/Users/zhangbaoyan/Downloads/learningMaterials-master/Code/function parseAge(age) {.js
 */
function parseAge(age) {
    if(!isString(age)) throw new Error(' aaaaaa ');
    var a;

    a = parseInt(age, 10)
    if (isNaN(a)) {
        console.log(["hello :", age].join(" "));
        a = 0
    }
    console.log('age:', a);
    return a
}

function isString(str) {
    if(Object.prototype.toString.call(str)=="[object String]") {
        return true
    } else {
        return false
    }
}

parseAge('11')