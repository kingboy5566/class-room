
var bg1 =document.getElementById("bgColor");
var pls = document.querySelectorAll("#plus")


function bg(e){
    bg1.style.backgroundColor="rgba(153, 153, 153, 0.308)"
  
}

function bgm(e){
    bg1.style.backgroundColor="pink"
  
}


// var main = document.getElementById("main")
function showmain(e){
  var main = document.getElementById("main")
 main.setAttribute('class','class-input')
 

 main.innerHTML =`<h3 class="text">Create class</h3>
 <div class="input1"> <input type="text" class="inp1" id='class' placeholder="class name "></div>
 <div class="input2"> <input type="text" class="inp1" id='selection' placeholder="selection"></div>
  
 
 <button class="btn1"   onclick="deletebtn(this) id='delet'">cancel</button>
  <button  class="btn2" onclick='card(this)'>creat</button>
`
};
function card(e){
   var card = document.getElementById("card")
    card.innerHTML =`<div class="card"> <div class="title" id='show'></div>
    <div class="selection" id='show1'> </div>
    
    <div class="footer"></div> </div>`

    var userText = document.querySelector('#class').value
   show.append(userText);

   var userSlc = document.querySelector("#selection").value
      show1.append(userSlc)
    
}


function deletebtn(e){
  Event.target.parentNode.remove()

}  
