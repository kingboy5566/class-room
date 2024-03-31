
var bg1 =document.getElementById("bgColor");
var pls = document.querySelectorAll("#plus")





// var main = document.getElementById("main")
function showmain(e){
  var main = document.getElementById("main")
  
  
 main.setAttribute('class','class-input')
 

main .innerHTML =`<h3 class="text">Create class</h3>
 <div class="input1"> <input type="text" class="inp1" id='class' placeholder="class name "></div>
 <div class="input2"> <input type="text" class="inp1" id='selection' placeholder="selection"></div>
  
 
 <button class="btn1"   onclick="deletebtn(this)">cancel</button>
<button  class="btn2" onclick='card(this)'>creat</button>
`
};
function card(e){
  
   var card = document.getElementById("card")
   var li = document.createElement('li')
   card.appendChild(li)
   
   li.setAttribute("class","card")
    li.innerHTML =` <div class="title" id='show'></div>
    <div class="selection" id='show1'> </div>
    
    <div class="footer"></div>`

    var userText = document.querySelector('#class').value
   show.append(userText);
   var userSlc = document.querySelector("#selection").value
      show1.append(userSlc)
    
}


function deletebtn(e){
  event.target.parentNode.remove()

}  
