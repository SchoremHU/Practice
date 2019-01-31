函数的五种
-
<pre>
普通函数
function f(){}

匿名函数
f = function(){}

复制函数
f1 = function f(){}

new函数
new Function('x','y','return x+y')

箭头函数
f1 = (x,y) => {return x+y}
f1 = n =>n*n

函数的name
声明一个命名函数，name就是这个名字
function f(){} //f.name f
var f1 = function(){} //f1.name  f1
var f2 = function f3(){} //f2.name f3
var f4 = new Function() //f4.name anonymous

</pre>

函数的调用-call
-
<pre>

eval  字符串当代码执行

f.call()
-------------------------
var f = {}
f.params=['x','y']
f.fbody='console.log('1')'
f.call = function(){
	return window.eval(f.fbody)
}
f.call() // 1

使用方法
function f(x,y){return x+y}
第一个位置写undefined，第二个位置开始传入第一个参数
f.call(undefined,1,2) //3

call的第一个参数可以用this得到，后面的参数可以用arguments得到
'use strict'严格模式

arguments 伪数组
__proto__ 不是Array.prototype,但又原型链跟length的，有数组特征没有数组的共有属性
</pre>



