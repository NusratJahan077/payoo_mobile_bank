document.getElementById("send-btn").addEventListener("click" ,function(){

 // 1. Get agent number and validate it
const transferNumber = getValueFromInput("transfer-number")
if(transferNumber.length != 11){
  alert("Invalide Number");
  return ;
}

 // 2. Transfer amount
 const amount = getValueFromInput("transfer-amount");

 // Check invalid amount
 const currentBalance = getBalance();
 if(amount === "" || Number(amount) <= 0){
  alert("Invalid Amount");
  return;
 }

 // Check sufficient balance
 if(Number(amount) > currentBalance){
  alert("Insufficient Balance ")
  return;
 }
// Calculate remaining balance
 const transferBalance = currentBalance - Number(amount);
 console.log("Transfer Amount:" ,transferBalance);
 


 // 3.  PIN
 const pin = getValueFromInput("transfer-pin")
if( pin === "1234"){
  alert(`Transfer Money Success from ${transferNumber} at ${Date()}`)
  setBalance(transferBalance)
}else{
  alert("Invalide Pin Number");
  return;
}


})