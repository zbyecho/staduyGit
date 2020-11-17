/*
 * @Date: 2020-11-13 15:35:09
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-11-13 15:35:10
 * @FilePath: /undefined/Users/zhangbaoyan/Downloads/learningMaterials-master/Code/Untitled-1.js
 */

function existy(x) {
    console.log(x != null);
    return x != null
}

// existy(null)
// existy(undefined)
// existy({}.notHere)
// existy((function(){})())
// existy(0)
// existy(false)


function truthy(x) {
    console.log((x !== false) && existy(x));
    return (x !== false) && existy(x)
}

// truthy(false)
// truthy(undefined)
// truthy(0)
// truthy('')

{
    function doWhen(cond, action) {
        if(truthy(cond))
            return action();
        else 
            return undefined;
    }
}


[null, undefined, 1, 2, false].map(existy)

