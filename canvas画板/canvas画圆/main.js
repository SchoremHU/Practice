var yyy = document.getElementById('xxx');
var context = yyy.getContext('2d');

var painting = false;
var lastPoint = {x:undefined,y:undefined};
yyy.onmousedown = function(aaa){
  painting = true;
  var x = aaa.clientX;
  var y = aaa.clientY;
  lastPoint = {x:x,y:y};
  drawCircle(x,y,2);
}

yyy.onmousemove = function(aaa){
  if(painting){
      var x = aaa.clientX;
      var y = aaa.clientY;
      var newPoint = {x:x,y:y};
      drawCircle(x,y,2);
      drawline(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
      lastPoint = newPoint;
  }
}
yyy.onmouseup = function(aaa){
  painting = false;
}

function drawCircle(x,y,radius){
  //圆形
  context.beginPath();
  context.arc(x,y,radius,0,Math.PI*2);
  context.fill();
  }
  
  function drawline(x1,y1,x2,y2){
    context.beginPath();
  
    context.lineWidth = 4;
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();
  }
  