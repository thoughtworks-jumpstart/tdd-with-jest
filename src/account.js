const account = {
  balance: 500,

  getBalance() {
    return this.balance;
  },

  deposit(amount) {
    if (this.getBalance() >= 5000) {
      return;
    }

    this.balance = this.balance + amount;
  },

  withdraw(amount) {
    if (this.getBalance() <= 0) {
      return;
    }

    this.balance = this.balance - amount;
  },
};

module.exports = account;
