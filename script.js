const input=document.getElementById("input");
const list =document.getElementById("list");
function addtask(){
    if(input.value===''){
        alert("You need to add some task!!")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);

    }
    input.value="";
    saving();

}
list.addEventListener("click",function(e){
    if(e.target.tagName =="LI")
    {
        e.target.classList.toggle("check");
        saving();
    }
    else if(e.target.tagName ==="SPAN")
    {
        e.target.parentElement.remove();
        saving();
    }

},false);
function saving(){
    localStorage.setItem("data",list.innerHTML);

}
function showdata(){
    list.innerHTML=localStorage.getItem("data");
}
showdata();