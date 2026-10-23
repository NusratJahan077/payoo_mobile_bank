
document.getElementById("getbonus-btn").addEventListener("click" ,function(){

const  bonusPin =getValueFromInput("coupon-pin")
if (bonusPin === "1234"){
  alert("Congratulations! You got a bonus.")
}else{
  alert("Invalid coupon!");
}




}
);
