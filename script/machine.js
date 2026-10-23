console.log("Machine Added");

//machine id-input value
function getValueFromInput( id){
const input = document .getElementById(id);
const value = input.value;
console.log(id , value);
return value;
}


//machine -> balance
function getBalance(){
  const balanceElement =document.getElementById("balance");
  const balance =balanceElement.innerText;
  console.log("current balance" ,Number(balance));
  return Number(balance);
}

//machine-> set balance
function setBalance(value){
    const balanceElement =document.getElementById("balance");
    balanceElement.innerText= value ;
    
}

//machine id > hide all ? show id


function showOnly(id){
  const addmoney = document.getElementById("add-money")
  const cashout = document.getElementById("cashout")
  
  const transfermoney = document.getElementById("transfer");
  
  const bonus = document.getElementById("get-bonus");
  
  const paybill = document.getElementById("pay-money");
  
  // const history = document.getElementById("transaction-history");
  
  
  
  console.log(`add Money - ${addmoney} , cashout -${cashout}`)


//sobaike hidde koro
addmoney.classList.add("hidden");
cashout.classList.add("hidden");
transfermoney.classList.add("hidden")
bonus.classList.add("hidden")
paybill.classList.add("hidden")




// id wala element ta ke tumi show koro
const selected = document.getElementById(id);
selected.classList.remove("hidden");
}