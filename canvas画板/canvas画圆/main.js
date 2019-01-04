var yyy = document.getElementById('xxx');
var context = yyy.getContext('2d');

function drawCircle(x,y,radius){
//圆形
context.beginPath();
context.arc(x,y,radius,0,Math.PI*2);
context.stroke();
}

var painting = false
yyy.onmousedown = function(aaa){
  painting = true
  var x = aaa.clientX
  var y = aaa.clientY
  drawCircle(x,y,5)
}
yyy.onmousemove = function(aaa){
  if(painting){
      var x = aaa.clientX
      var y = aaa.clientY
      drawCircle(x,y,5)
  }else{}
}
yyy.onmouseup = function(aaa){
  painting = false
}