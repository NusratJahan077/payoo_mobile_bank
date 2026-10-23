
document.getElementById("cashout-btn").addEventListener("click", function () {

  // 1. Get agent number and validate it
  const cashoutNumber = getValueFromInput("cashout-number");

  if (cashoutNumber.length != 11) {
    alert("Invalid Number");
    return;
  }

  // 2. Get the cashout amount
  const cashoutAmount = getValueFromInput("cashout-amount");
 const currentBalance =getBalance();
  //2.1  Calculate the new balance
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);

  // 5. Check whether the balance is sufficient
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  // 6. Get and verify the PIN
  const pin = getValueFromInput("cashout-pin");

  if (pin === "1234") {
    // 7. Show success message and update the balance
    alert("Cashout successful");
      setBalance(newBalance);
  } else {
    alert("Invalid PIN");
    return;
  }

});



