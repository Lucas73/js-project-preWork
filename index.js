

function addTextArea(){
  if(document.querySelector('#X')===null){
    var rootDiv = document.querySelector('#root');

    var divNode = document.createElement("div");
    var node = document.createElement("textarea");
    var del = document.createElement("button");
    node.placeholder = "Escriba su texto aquí";
    node.style = "width: 500px; height: 50px"
    del.textContent = "X";
    del.id = "X";
    del.onclick = "removeNode()"
    del.style = "margin-left:5px"
    rootDiv.appendChild(divNode); 
    rootDiv.appendChild(node); 
    rootDiv.appendChild(del); 
    rootDiv.appendChild(divNode); 
  }else{
    return
  }
}
function removeNode(e){
  y = xmlDoc.getElementsByTagName(e.target)[0];
  xmlDoc.documentElement.removeChild(y)
}


function addInputArea(){
  if(document.querySelector('#inputName')===null){
    var rootDiv = document.querySelector('#root');
    var divNode = document.createElement("div");
    var node = document.createElement("input");
    var cellName = document.querySelector('#cell-name').value

    node.style = "width:150px; height: 30px"

    rootDiv.appendChild(divNode)
    rootDiv.appendChild(node);  
    rootDiv.appendChild(divNode)
    console.log(cellName)
    node.placeholder = cellName;
    document.querySelector('#cell-name').value!=''? node.id = document.querySelector('#cell-name').value:console.log()
    node.className = 'input-class'
    document.querySelector('#cell-name').value = ""
  }else{ 
    return 
  };
}
function changeColor(color){
  var element = document.querySelector('.input-class');
  element.style.backgroundColor = color;
}
