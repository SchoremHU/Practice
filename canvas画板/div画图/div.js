var div = document.getElementById('canvas')
var painting = false

//鼠标被按下去
document.onmousedown = function (a){
  painting = true
   var x = a.clientX
   var y = a.clientY
   var divA = document.createElement('div')
   divA.style = "width:6px;height:6px;background:black;border-radius:3px;position:absolute;left:"+(x-3)+"px;top:"+(y-3)+"px;"
   div.appendChild(divA)
}


//鼠标移动

document.onmousemove = function (a){
  if(painting){
    var x = a.clientX
   var y = a.clientY
   var divA = document.createElement('div')
   divA.style = "width:6px;height:6px;background:black;border-radius:3px;position:absolute;left:"+(x-3)+"px;top:"+(y-3)+"px;"
   div.appendChild(divA)
  }else{}
}

//鼠标松开
document.onmouseup = function (z){
painting = false
}