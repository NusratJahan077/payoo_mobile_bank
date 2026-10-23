

document.getElementById("add-money-btn").addEventListener("click" ,function(){

//s-1: bank account get
const bankAccount = getValueFromInput("add-money-bank");
if(bankAccount === "Select a Bank"){
  alert("Please select a bank");
  return;
}

//2.get bank account number
  const  accno =getValueFromInput("add-bank-number");
  if(accno.length != 11){
    alert("invalide account number");
    return;
  }

  //3. get amount
  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);
  console.log("New Balance:",newBalance)


  //4. pin
  const pin =getValueFromInput("add-money-pin")
  if (pin === "1234") {
    // 7. Show success message and update the balance
   alert(`Add Money Success from ${bankAccount}
     at ${new Date()}`);
    // Set the updated balance after adding money
   setBalance(newBalance);
   
   //1 history -container ke shore niya sbu
   const transaction  = document.getElementById("histor-container")
   //2 ceate div
    const newHistory= document.createElement("div");
    //step-3: new div innerhtml add koro
    newHistory.innerHTML =`
    <div class="transaction-card flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-4">

      <div class="flex items-center gap-3 min-w-0">

        <!-- Electricity Image -->
        <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shrink-0">
          <img src="/assets/opt-5.png" alt="Electricity Bill"
           >
        </div>

        <div class="min-w-0">
          <h3 class="font-bold text-gray-600">Electricity Bill</h3>
          <p class="transaction-time text-xs text-gray-500 mt-1"></p>
        </div>

      </div>

      <button type="button"
        class="text-gray-500 text-2xl px-1 shrink-0"
        aria-label="Electricity bill options">
        &#8942;
      </button>

    </div>

`
    //step-4 history container e newDiv append korbu
    transaction.append(newHistory);



  } else {
    alert("Invalid Pin");
    return
  }


})



