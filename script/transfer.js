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
  setBalance(transferBalance);
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
          <img src="/assets/opt-6.png" alt="Mobile Recharge"
           >
        </div>

        <div class="min-w-0">
          <h3 class="font-bold text-gray-600">Mobile Recharge</h3>
          <p class="transaction-time text-xs text-gray-500 mt-1"></p>
        </div>

      </div>

      <button type="button"
        class="text-gray-500 text-2xl px-1 shrink-0"
        aria-label="Mobile Recharge options">
        &#8942;
      </button>

    </div>

`
    //step-4 history container e newDiv append korbu
    transaction.append(newHistory);


}else{
  alert("Invalide Pin Number");
  return;
}


})