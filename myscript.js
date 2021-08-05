



//-------------------contact page validation



function myfunc()
{var name,email,comment;
 name=document.getElementById('name').value;
 email=document.getElementById('email').value;
 comment=document.getElementById('comment').value;
   if(name==""){
   	window.alert("write your name");}
   	if (email==""){
   		window.alert("write email");

   	}
    if(comment==""){
   	window.alert("write comment");
   }
}
// --------------------  change theme-----------------------------------


function changetheme()
{document.body.style.background="lightblue";
 document.getElementById("about").style.background="lightblue";
 document.getElementById("main").style.background="lightblue";
 document.getElementById("abo").style.color="indigo";
 document.getElementById("web").style.color="black";
 document.getElementById("my").style.color="black";
 document.getElementById("and").style.color="black";
 document.getElementById("html").style.color="black";
 document.getElementById("90").style.color="black";
 document.getElementById("css").style.color="black";
 document.getElementById("85").style.color="black";
 document.getElementById("java").style.color="black";
 document.getElementById("80").style.color="black";
 document.getElementById("php").style.color="black";
 document.getElementById("p80").style.color="black";
 document.getElementById("main-address").style.background="lightblue";
 document.getElementById("addr").style.color="black";
 document.getElementById("phone").style.color="black";
 document.getElementById("email").style.color="black";
 document.getElementById("addis").style.color="black";
 document.getElementById("silk").style.color="black";
 document.getElementById("ema").style.color="black";
document.getElementById("submit").style.color="black";


}
//----------------------------capitalize name in input---------------------------



function namecapital()
{
	var x=document.getElementById("name");
	x.value=x.value.toUpperCase();
}
//-----------------------------  sidebar script--------------------------------------------


function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
 
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}