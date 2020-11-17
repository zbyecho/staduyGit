/*
 * @Date: 2020-11-13 15:42:49
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-11-16 10:03:42
 * @FilePath: /Code/CodeFn/index.js
 */

//  import underscore from 'underscore';

 const _ = require('underscore')
 
 console.log( _.max([1, 2, 3, 4, 5]));
 console.log( _.max([1, 2, 3, 4.75, 4]));


 var people = [{name: 'fred', age: 65}, {name: 'fred', age: 36}];

 console.log(_.max(people,function(p) {return p.age}));


 function finder(valueFun, bestFun, coll) {

    return _.reduce(coll, function(best, current) {
        console.log('best: ', best);
        console.log('current: ', current);
        var bestValue = valueFun(best);
        var currentValue = valueFun(current)

        return (bestValue === bestFun(bestValue, currentValue)) ? best : current;
    })

 }

console.log( finder(_.identity, Math.max, [1,2,3,4,5]));


function best(fun, coll) {
    return _.reduce(coll, function (x, y) {
        return fun(x, y) ? x : y
    })
}

console.log(best((x,y) => x > y, [1,2,4,6,7,8]));


function repeat(times, VALUE) {
    return _.map(_.range(times), () => VALUE)
}

console.log(repeat(4, "Major"));
console.log(repeat(6, "Major"));


function repeatedly(times, fun) {
    return _.map(_.range(times), fun)
}

console.log(repeatedly(3, () => {
    return Math.floor((Math.random()*10)+1)
}));


function iterateUntil(fun, check, init) {
    var ret = [];
    var result = fun(init);

    while (check(result)) {
        ret.push(result)
        result = fun(result)
    }

    return ret;
}

// iterateUntil((n) => n + n , n => n <= 1024, 1)
console.log(
    iterateUntil((n) => n + n , n => n <= 1024, 1));

console.log(repeatedly(10, (exp) => Math.pow(2, exp+1) ));


function always(VALUE) {
    return function () {
        return VALUE
    }
}

var f = always(function() {})

var g = always(function() {})

console.log(f() === f());

console.log(f() === g());

console.log(repeatedly(2, always('always')));



// function uniqueString(len) {
//     return Math.random().toString(36).substr(2, len)
// }

function uniqueString(prefix) {
    return [prefix, new Date().getTime()].join('')
}

console.log(uniqueString("argento"));

{
    function makeUniqueStringFunction(start) {
        console.log('start', start);
        var COUNTER = start;
    
        return function (prefix) {
            console.log('prefix: ', prefix);
            return [prefix, COUNTER++].join('')
        }
        
    }
    const uniqueString = makeUniqueStringFunction("0")
    console.log(uniqueString("dari"));
    // console.log(uniqueString("dari"));
    // console.log(uniqueString("dari"));
    // console.log(uniqueString("dari"));
}


{
    function rightAwayInvoker() {
        var args = _.toArray(arguments);
        var methods = args.shift();
        var target = args.shift();

        return methods.apply(target, args);
    }

    // rightAwayInvoker(Array.prototype.reverse, [1, 2, 3])
    console.log(rightAwayInvoker(Array.prototype.reverse, [1, 2, 3]));
    // => [3, 2, 1]
}

{   
    //柯理化 向左
    function leftCurryDiv(n) {

        return function(d) {
            return n/d
        }
        
    }

    //柯理化 向右
    function leftCurryDiv(n) {

        return function(d) {
            return n/d
        }
        
    }

    var divide108y = leftCurryDiv(10);
    console.log(divide108y(2));
}