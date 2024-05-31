function myfun(){
var pass=document.getElementById("pass");
const para = document.getElementById("small");
var con=document.getElementById("con");
var e1=document.getElementById("head");
var bttn=document.getElementById("submit_bttn");
var banner=document.getElementById("password");
if(pass.value.trim()=="23.08.23"){
    con.classList.remove("blur");
    bttn.remove();
    e1.remove();
    pass.remove();
para.remove();
}
else{
   
   para.innerText="wrong password";

}
}