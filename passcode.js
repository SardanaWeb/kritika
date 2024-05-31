function valid(){
const dhanika=document.getElementById("dhanika");
const chandini=document.getElementById("chandini");
const auto=document.getElementById("auto");
const kg=document.getElementById("kg");
const dlcd=document.getElementById("dlcd");
const h=document.getElementById("result");
const p=document.getElementById("wrong");
if(((dhanika.value.trim().toLowerCase()=="dhanika")&&(dlcd.value.trim().toLowerCase()=="dlcd"))&&(auto.value.trim().toLowerCase()=="washroom")){
return true;
}
else{
h.innerText="Failed";
p.innerText="To pass Quiz answer atleat 3 correct";
    return false;
}
} 