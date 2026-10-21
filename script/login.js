console.log("Login Functuion");
document.getElementById("login-btn").addEventListener("click" ,function(){
   console.log("login button click");

   const numberInput = document.getElementById("input-number");
   const contactNumber =numberInput.value ;
   console.log(contactNumber);

const pinInput = document.getElementById("input-pin");
const pin = pinInput.value;
console.log(pin);

if(contactNumber == "01609900742" && pin == "1234"){
  alert("login Success ");
  window.location.assign("/home.html")
}
else{
  alert("login Failed");
  return ;
}













} )