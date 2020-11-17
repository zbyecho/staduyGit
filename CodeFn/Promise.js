/*
 * @Date: 2020-11-16 16:05:30
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2020-11-17 15:51:59
 * @FilePath: /Code/CodeFn/Promise.js
 */



// PromiseA 


(function() {

    function PromiseA(executor) {

        var self = this

        self.status = 'pending';

        self.data = undefined;

        self.callbacks = [];

        function resolve() {
            
        }

        function reject() {
            
        }

        executor(resolve(), reject())
    }

    window.PromiseA = PromiseA
})()


PromiseA.prototype.then = function (onResoled, onRejected) {
    var self = this

    if(self.status == "pending") {
        self.callbacks.push({
            onResoled(){onResoled(self.data)},
            onRejected(){onRejected(self.data)}
        })
    } else if( self.status === 'resolved') {

    } else {
        
    }
}

PromiseA.prototype.catch = function (onRejected) {
    
}

PromiseA.resolve = function (value) {

}

PromiseA.reject = function (value) {

}

PromiseA.all = function (allValue) {

}

PromiseA.race = function (value) {

}



// var PromiseA = new PromiseA((resolve, reject) => {

// })
// PromiseA.then(resolve => {}, reject => {})


// 例2
var PromiseA = new PromiseA((resolve,reject) => {
    setTimeout(function () {
        resolve(1)
        // eeee
    })
})

PromiseA.then(
    value=>{console.log(value)},
    err=>{console.log(err)}
)

