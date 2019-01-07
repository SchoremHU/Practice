var yyy = document.getElementById('xxx');
var context = yyy.getContext('2d');

var usingEraser = false;
eraser.onclick = function () {
  usingEraser = true;
  eraser.textContent = '正在使用橡皮擦';
  brush.textContent = '画笔';
}
brush.onclick = function () {
  usingEraser = false;
  brush.textContent = '正在使用画笔';
  eraser.textContent = '橡皮擦';
}


/******总体******/
autocanvasSize(yyy);

ListenToMouse(yyy);




/*******封装函数*******/
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

  context.lineWidth = 4;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

function ListenToMouse(canvas) {
  var painting = false;
  var lastPoint = { x: undefined, y: undefined };
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

