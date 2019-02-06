var/let/const的使用区别
-
<pre>
var 属于全局变量，声明时会发生变量提升预操作，会产生代码垃圾，会循环调用变量，不受限制
{
var a = 2
}
function f(){
console.log('函数内'+a)
}
f.call()
console.log('函数外'+a)
//函数内3
//函数外3

let 块级作用域变量，只在所在的区块内可用，let无法做变量提升，必须等let声明语句执行之后，变量才能使用，否则报错。
{let a =3}
function f(){
console.log('函数内'+a)
}
f.call()
console.log('函数外'+a)
//发生报错，a未定义。
a只在他所在的{}内有效，外部无法调用。

const 与var类似，区别是必须进行初始化操作，否则报错；已声明的变量值固定，无法进行二次赋值操作，会报错，提示标识符已声明
</pre>

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
__proto__ 没有或没有指向Array.prototype,但有key跟length的，
有数组特征没有数组的共有属性，或者是没有push方法的。
</pre>

调用栈-call stack
-
<pre>
先入后出
代码从上往下运行，
当有函数有执行的时候标记位置，进入函数执行，
执行完再回到标记位置往下执行。
以此类推
</pre>
作用域
-
<pre>
作用域中声明不加 var 首先是赋值，
沿着作用域的树往上找 var a 变量，
没有找到就是赋值并声明全局变量 window a

<em>声明提升，var/function 提升声明到作用域最上方</em>
</pre>
闭包
-
<pre>
如果一个函数，使用了他范围外的变量，那么（这个函数+这个变量）就叫做闭包
</pre>
window.Array
-
<pre>
var a = Array(3)
生成一个length:3，__proto__指向Array.prototype的数组
var a =aArray(3,3)
生成长度是2，内容是[3,3]的数组

用Array构造出来的对象就是数组
有push函数，因为链接到了一个共用方法

number string boolean 前面加new返回的是复杂类型
object（array/function ）前面加new无影响
数组共用的属性

Array 数组 -> Array.prototype ->object.prototype
对象数组(伪数组) -> object.prototype

    Number() 返回的是基本类型
new Number() 返回的是复杂类型（对象）
</pre>
数组的API-forEach
-
<pre>
a = ['a','b','c']
a.forEach( function(x,y,z){} ) 
// 括号内必须接受一个函数，必须接受三个参数：
x是a的value，y是a的key，z是a的数组对象本身。

sort 排序

a.sort( function(x,y){return y-x} )
根据y-x返回值，判断排序要求

</pre>

const,var,let的区别
-
<pre>
const定义的变量不可变，且必须初始化
const = b = 2 //对
const b //错，未初始化

var 全局变量，定义的变量可以初始化，并且未初始化的参数输出undefined
var = a = 1 //对
var = a //对

let是块级作用域，函数内部使用let定义后，对函数外部无影响
let a = 3;
console.log('函数外let定义c:'+c);
function chang(){
let a = 4
console.log('函数内定义c:'+c);
}
chang();
console.log('c的最终值为：'+c)
</pre>

DOM节点API
-
<pre>
child/children/parent
子节点/多个子标签/父节点

node
节点

first/last
第一个/最后一个

next/previous
下一个/上一个

sibling/siblings
兄弟节点/多个兄弟节点

type
类型

value/text/content
值/文本/内容

inner/outer
内部的/外部的

element
元素


</pre>
DocumentFragment优化
-