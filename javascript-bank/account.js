/* exported Account */
function Account(number, holder) {
  if (!Number.isInteger(number)) {
    return;
  } else {
    this.number = number;
  }
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  if (this.transactions === 0) {
    return 0;
  } else {
    var totalWithdrawal = 0;
    var totalDeposit = 0;
    for (var transaction in this.transactions) {
      if (this.transactions[transaction].type === 'withdrawal') {
        totalWithdrawal += this.transactions[transaction].amount;
      } else {
        totalDeposit += this.transactions[transaction].amount;
      }
    }
    var totalBalance = totalDeposit - totalWithdrawal;
    return totalBalance;
  }
};
