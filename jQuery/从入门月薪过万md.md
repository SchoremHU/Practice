jQuery
-

<pre>
$(function(){})


全部选择器
var $all = $('*')

类选择器
$('.cd')

标签选择器
$('div')

交集选择器
$('div.cd')

过滤选择器
$(.li:first)

包含选择器
var $div =$('div:contains("包含文本")')
console.log($div.text()) 
//


</pre>

隔行变色
-
<pre>
获得奇数行标签 :odd
var oddtrs = $('tr:odd')
偶数行 :even

隐式迭代
方法css('styleName','value')
传一个参数代表获取，传两个代表设置

oddtrs.css('backgroundColor','red')
等同于 $('tr:odd').css('backgroundColor','red')

</pre>

表格互斥选择高亮显示
-
<pre>
$(function(){

jQuery可以通过原型上的click方式进行绑定事件

$('tr')；  选择所有tr标签
$('tr').click(function(e){ //this依然指向绑定事件
	$(this).css('backgroundColor','red');
	拿到多个兄弟解决点，隐式迭代全部设置背景为黄色
	$(this).siblings().('backgroundColor','yellow')
})

})
</pre>


绑定事件
-
<pre>

$(function(){
	$('#btn').click(function(e){  // e = jQuery.fn.event
	
	})

jQuery绑定事件的事件方式，类似于DOM2级绑定事件方式
可以绑定多个事件处理程序，而且执行顺序按照注册顺序执行
})

</pre>


简单绑定事件案例
-
<pre>
var $inputArray = $('.input-box input')

$inputArray.focus(function(e){
	console.log(this.value) // this
})

jQuery构造函数传入选择器，返回的是一个jQuery的包装对象

简单绑定事件，接受两个参数情况
$inputArray.change('1212',function(e){
	console.log(e) // jQuery封装的事件对象
	console.log(e.data)
})

</pre>

触发事件和事件处理程序
-
<pre>
trigger触发事件

触发事件处理程序执行
triggerHandler(type,[data])

<div>
<input type="button" value="按钮" id="btn">
</div>

$(function(){
绑定事件
 $('#btn').click(function(e,a,b){
	console.log(e,a,b)
	})
$('div').click(function(e){
console.log('div被点击')
})
触发事件
第一种    $('#btn').click();
第二种	 $('#btn').trigger('click',['123','222'])
第二种可以出发任意事件，包括自定义事件


触发事件处理程序，不触发事件本身
$('#btn').triggerHandler('click',[2,5])

})


</pre>

each方法
-
<pre>
选择

</pre>
jQuery扩展的扩展extend方法

var target = {name:'sss'];

var obj1 ={age:11}

var newObj = jQuery.ectend(target,age)



浅拷贝，子对象只复制地址

深拷贝，