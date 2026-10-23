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
  alert("Invalid Pin");
  return;
}
































})