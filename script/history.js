
console.log("History Added");

// Show transaction time
function showTransactionTimes() {
  const transactionTimes = document.querySelectorAll(".transaction-time");

  transactionTimes.forEach(function (time) {
    time.innerText = "Today " + new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
  });
}

showTransactionTimes();


// Add new transaction
function addTransaction(title, image, amount) {
  const transactionList = document.getElementById("transaction-list");

  const transaction = document.createElement("div");

  transaction.className =
    "transaction-card flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-4";

  transaction.innerHTML = `
    <div class="flex items-center gap-3 min-w-0">
      <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shrink-0">
        <img src="${image}" alt="${title}" class="w-full h-full object-contain">
      </div>

      <div class="min-w-0">
        <h3 class="font-bold text-gray-600">${title}</h3>
        <p class="transaction-time text-xs text-gray-500 mt-1">
          Today ${new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit"
          })}
        </p>
      </div>
    </div>

    <p class="font-semibold text-gray-700">${amount} ৳</p>
  `;

  transactionList.prepend(transaction);
}


// View All button
document.getElementById("view-all-btn").addEventListener("click", function () {
  const transactions = document.querySelectorAll(".transaction-card");

  transactions.forEach(function (transaction) {
    transaction.classList.remove("hidden");
  });
});
