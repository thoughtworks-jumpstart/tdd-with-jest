const account = {
  balance: 500,

  getBalance() {
    return this.balance;
  },

  deposit(amount) {
    this.balance = this.balance + amount;
  },

  withdraw(amount) {
    this.balance = this.balance - amount;
  },
};

module.exports = account;
