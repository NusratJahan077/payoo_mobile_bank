
document.getElementById("cashout-btn").addEventListener("click" ,function(){

// get agent number & validate
const cashoutNumberInput = document.getElementById("cashout-number");
const cashoutNumber = cashoutNumberInput.value ;
console.log(cashoutNumber);
if(cashoutNumber.length != 11){
  alert("Invalid Agent Number ");
  return;
}

//2 get the amount
const cashoutAmountInput = document.getElementById("cashout-amount");
const cashoutAmount = cashoutAmountInput.value ;
console.log(cashoutAmount);

//3 get the current balance 
const balanceElement = document.getElementById("balance");
const balance = balanceElement.innerText;
console.log(balance);
//4- calculate new balance
const newBalane =Number(balance) -Number(cashoutAmount);

if(newBalane < 0){
  alert("Invalid Amount");
  return ;
}

//5- get the pin & verify
const cashoutPinInput = document.getElementById("cashout-pin")
const pin =cashoutPinInput.value ;
if(pin === '1234'){
 alert("cashout successfull");
 console.log("new balance",newBalane);
 balanceElement.innerText = newBalane ;
}else{

alert("Invalid Pin");
  return;
}

});