document.getElementById("pay-btn").addEventListener("click" ,function(){

// bank account get
const bankacount = getValueFromInput("pay-money-bank")
if(bankacount === "select a Bank"){
  alert("Please select a bank");
  return ;
}

//2.get biller  account number
const billaccno = getValueFromInput ("pay-bank-number");
if(billaccno.length !=11){
  alert("Invalid account number");
  return;
}

//3.pay amount
const payamount =getValueFromInput("pay-money-amount")
const currentBalance =getBalance();

// 3.1. Check invalid amount
if(payamount === "" || Number(payamount) <= 0){
  alert("Invalid Amount");
  return;
}

// 3.2. Check sufficient balance
if(Number(payamount) > currentBalance){
  alert("Insufficient Balance");
  return;
}

// 3.3. Calculate remaining balance
const remainingBalance = currentBalance - Number(payamount);
console.log("remaining  Balance :" ,remainingBalance);



//4 pin
const pin = getValueFromInput("paybill-pin")
if(pin === "1234"){
  alert(`pay Bill Success message Remaining Balance : ${remainingBalance}`)
  setBalance(remainingBalance);

} else {
  alert("Invalid Pin");
  return;
}
































})