document.getElementById("add-money-btn").addEventListener("click" ,function(){
//s-1: bank account get
const bankAccount = getValueFromInput("add-money-bank");
if(bankAccount === "Select a Bank"){
  alert("Please select a bank");
  return;
}

//get bank account number
  const  accno =getValueFromInput("add-bank-number");
  if(accno.length != 11){
    alert("invalide account number");
    return;
  }

  //3. get amount
  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);
  console.log("Newe Balance:",newBalance)

// pin
const pin =getValueFromInput("add-money-pin")
 if (pin === "1234") {
    // 7. Show success message and update the balance
   alert(`Add Money Success from ${bankAccount}
     at ${new Date()}`);
    // Set the updated balance after adding money
    setBalance(newBalance)
  } else {
    alert("Invalid Pin");
    return;
  }







})
