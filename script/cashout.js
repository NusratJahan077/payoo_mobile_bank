
document.getElementById("cashout-btn").addEventListener("click" , function(){

 //1 get agent number & validate
const cashoutNumber =getValueFromInput("cashout-number");
if(cashoutNumber.length != 11){
  alert("Invalid Number");
  return;
}
//2 get the amount
const cashoutAmount = getValueFromInput("cashout-amount");

//3 get the current balance
const balanceElement = document.getElementById("balance");
const balance = balanceElement.innerText;
console.log(balance);

//4 calculate balance
const newBalance =Number(balance) - Number(cashoutAmount);
console.log(newBalance);
if(newBalance < 0){
  alert("invalid Amount");
  return ;
}
const pin =getValueFromInput("cashout-pin")
if(pin === '1234'){
   alert("cashout successfull");
   balanceElement.innerText= newBalance;
}else{
  alert("Invalide Pin");
  return;
}


});


