
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

   
   const transaction  = document.getElementById("histor-container")
   
    const newHistory= document.createElement("div");

    newHistory.innerHTML =`
    <div class="transaction-card flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-4">

      <div class="flex items-center gap-3 min-w-0">

        <!-- Electricity Image -->
        <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shrink-0">
          <img src="/assets/opt-1.png" alt="Bank Deposit"
           >
        </div>

        <div class="min-w-0">
          <h3 class="font-bold text-gray-600"></h3>
          <p class="transaction-time text-xs text-gray-500 mt-1">Bank Deposit</p>
        </div>

      </div>

      <button type="button"
        class="text-gray-500 text-2xl px-1 shrink-0"
        aria-label="Bank Deposit">
        &#8942;
      </button>

    </div>

`
    transaction.append(newHistory);

  } else {
    alert("Invalid PIN");
    return;
  }

});



