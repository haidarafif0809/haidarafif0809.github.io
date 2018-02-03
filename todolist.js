
var btnTambah = document.getElementById("btn-tambah");
var btnHapus = document.getElementsByClassName("hapus-list");
var btnSelesai = document.getElementsByClassName("selesai-list");
var inputTodo = document.getElementById("todo_text");
var todoList = ['Membantu ibu','membantu ayah'];
var hapusList  = function(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
};

for (var i = 0; i < btnHapus.length; i++) {
    btnHapus[i].addEventListener('click', hapusList , false);
}


var selesaiList = function(element) {
    var value = element.parentNode.textContent;
    value = value.replace('HapusSelesai','');
    element.parentNode.parentNode.removeChild(element.parentNode);
    addLiElementSelesai(value);
};

for (var i = 0; i < btnSelesai.length; i++) {
    btnSelesai[i].addEventListener('click', selesaiList, false);
}
function displayTodoList(todoList){

   for(var i = 0; i < todoList.length; i++){
       addLiElement(todoList[i]);
   }
}

function addLiElementSelesai(value){
    
     var todoListDisplay = document.getElementById('ul_list_selesai');
     var li = document.createElement("li");
     var buttonHapus = document.createElement("button");
     var contentHapus= document.createTextNode("Hapus");
     buttonHapus.appendChild(contentHapus);
     buttonHapus.className = "hapus-list btn btn-danger ";
     buttonHapus.setAttribute("onclick","hapusList(this);");
     li.className = "list-group-item";
     var content = document.createTextNode(value);
     li.appendChild(content)
     li.appendChild(buttonHapus);
     todoListDisplay.appendChild(li);
    
}
function addLiElement(value){
    
     var todoListDisplay = document.getElementById('ul_list');
     var li = document.createElement("li");
     var buttonHapus = document.createElement("button");
     var contentHapus= document.createTextNode("Hapus");
     buttonHapus.appendChild(contentHapus);
     buttonHapus.className = "hapus-list btn btn-danger ";
     buttonHapus.setAttribute("onclick","hapusList(this);");
     var buttonSelesai = document.createElement("button");
     var contentSelesai= document.createTextNode("Selesai");
     buttonSelesai.appendChild(contentSelesai);
     buttonSelesai.className = "selesai-list btn btn-success ";
     buttonSelesai.setAttribute("onclick","selesaiList(this);");
     li.className = "list-group-item";
     var content = document.createTextNode(value);
     li.appendChild(content)
     li.appendChild(buttonHapus);
     li.appendChild(buttonSelesai);
     todoListDisplay.appendChild(li);
    
}

function tambahList(){
  var inputan = inputTodo.value ;
  if(inputan === ''){
    alert("Todo Text Tidak Boleh Kosong");
  } else {
      addLiElement(inputan);
  }

}


window.onload = displayTodoList(todoList);

document.querySelector('body').addEventListener('click', function(event) {
  if (event.target.className.toLowerCase() === 'hapus-list') {
    // do your action on your 'li' or whatever it is you're listening for
    hapusList();
  }

});

