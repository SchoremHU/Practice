var yyy = document.getElementById('xxx');
var context = yyy.getContext('2d');
var lineWidthToUser = 4
  lineS.onclick = function(){
    lineWidthToUser = 2;
    lineS.classList.add('action');
    lineM.classList.remove('action');
    lineX.classList.remove('action');
  }
  lineM.onclick = function(){
    lineWidthToUser = 4;
    lineS.classList.remove('action');
    lineM.classList.add('action');
    lineX.classList.remove('action');
  }
  lineX.onclick = function(){
    lineWidthToUser = 8;
    lineS.classList.remove('action');
    lineM.classList.remove('action');
    lineX.classList.add('action');
  }

var usingEraser = false;
eraser.onclick = function () {
  usingEraser = true;
  eraser.classList.add ('action') 
  pen.classList.remove ('action')
}
pen.onclick = function () {
  usingEraser = false;
  pen.classList.add ('action')
  eraser.classList.remove ('action')
}
black.onclick =function(){
  context.strokeStyle = 'black'
  context.fillStyle = 'black'
  black.classList.add('action')
  red.classList.remove('action')
  blue.classList.remove('action')
  green.classList.remove('action')
}
red.onclick =function(){
  context.strokeStyle = 'red'
  context.fillStyle = 'red'
  black.classList.remove('action')
  red.classList.add('action')
  blue.classList.remove('action')
  green.classList.remove('action')
}
blue.onclick =function(){
  context.strokeStyle = 'blue'
  context.fillStyle = 'blue'
  black.classList.remove('action')
  red.classList.remove('action')
  blue.classList.add('action')
  green.classList.remove('action')
}
green.onclick =function(){
  context.strokeStyle = 'green'
  context.fillStyle = 'green'
  black.classList.remove('action')
  red.classList.remove('action')
  blue.classList.remove('action')
  green.classList.add('action')
}

clear.onclick = function(){
  context.clearRect(0,0,yyy.width,yyy.height)
}
save.onclick = function(){
  var url = yyy.toDataURL('image/png')
  var a = document.createElement('a')
  document.body.appendChild(a)
  a.href = url
  a.download = 'myCanvas'
  a.target = '_blank'
  a.click()
}


/******总体******/
autocanvasSize(yyy);

ListenTousing(yyy);




/*******封装函数*******/
function drawCircle(x,y,radius){
  //圆形
  context.beginPath();
  context.arc(x,y,radius,0,Math.PI*2);
  context.fill();
  }
  
// 禁止页面滑动
function handler() {
  event.preventDefault();
}
 document.removeEventListener('touchmove', handler, false);


function autocanvasSize(canvasSize) {
  setCanvasSize();
  window.onresize = function () {
    setCanvasSize();
  }
  function setCanvasSize() {
    var pageWidth = document.documentElement.clientWidth;
    var pageHeight = document.documentElement.clientHeight;

    canvasSize.width = pageWidth;
    canvasSize.height = pageHeight;
  }
}


function drawline(x1, y1, x2, y2) {
  context.beginPath();
  context.lineWidth = lineWidthToUser;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

function ListenTousing(canvas) {
  var painting = false;
  var lastPoint = { x: undefined, y: undefined };

  if (document.body.ontouchstart !== undefined) {
    // 触屏设备
    canvas.ontouchstart = function (aaa) {
      var x = aaa.touches[0].clientX;
      var y = aaa.touches[0].clientY;
      if (usingEraser) {
        painting = true
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        painting = true;
        lastPoint = { x: x, y: y };
        drawCircle(x,y,lineWidthToUser/2)
      }
    }
    canvas.ontouchmove = function (aaa) {
      var x = aaa.touches[0].clientX;
      var y = aaa.touches[0].clientY;
      if (!painting) { return }
      if (usingEraser) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        var newPoint = { x: x, y: y };
        drawCircle(x,y,lineWidthToUser/2)
        drawline(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
        lastPoint = newPoint;
      }
    }
    canvas.ontouchend = function (aaa) {
    
  
    }
  
  } else {
    // 键鼠非触屏设备
    canvas.onmousedown = function (aaa) {
      var x = aaa.clientX;
      var y = aaa.clientY;
      if (usingEraser) {
        painting = true
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        painting = true;
        lastPoint = { x: x, y: y };
      }
    }
    canvas.onmousemove = function (aaa) {
      var x = aaa.clientX;
      var y = aaa.clientY;
      if (!painting) { return }
      if (usingEraser) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        var newPoint = { x: x, y: y };
        drawline(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
        lastPoint = newPoint;
      }
    }
    canvas.onmouseup = function (aaa) {
      painting = false;

    }
  }
}

