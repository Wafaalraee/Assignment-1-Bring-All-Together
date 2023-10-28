//function
function handleClick(element){element.innerHTML ="Clicked"}



//EventListener
var imag= document.getElementById("imag");
imag.addEventListener("mouseover",function(){this.style ="box-shadow: 5px 5px 5px grey"; this.width="500"});
  
imag.addEventListener("mouseout", function(){this.style =""; this.width ="100"})



//loop
const branches = ["Amsterdam( Main branch) " , "Rotterdam" , "Guoda"];
for(var i = 0; i < branches.length; i++){console.log(i, branches[i]);}
document.getElementById("branches")
.innerHTML=branches;







