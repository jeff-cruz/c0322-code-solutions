/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return this.nextAccountNumber - 1;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  if (Number.isInteger(number) && number > 0) {
    for (var account in this.accounts) {
      if (number === this.accounts[account].number) {
        return this.accounts[account];
      }
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  } else {
    var allAccountBalances = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      allAccountBalances += this.accounts[i].getBalance();
    }
  }
  return allAccountBalances;
};
