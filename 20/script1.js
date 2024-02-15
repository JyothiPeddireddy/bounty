let username=document.getElementById("username");
let password=document.getElementById("password");
let confirmpassword=document.getElementById("confirmpassword");
function execute(){
   if(password.value===confirmpassword.value){
    alert("right");
      }
      else
    {
        alert("wrong");
    }
}