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
</pre>



