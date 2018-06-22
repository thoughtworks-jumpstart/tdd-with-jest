const account = require('../src/account');

describe('deposit()', () => {
    test('adds to the balance', () => {
        // Setup
        const initialBalance = account.getBalance();
        const amountToDeposit = 10;
    
        // Exercise
        account.deposit(amountToDeposit);
    
        // Assert
        const updatedBalance = account.getBalance();
        expect(updatedBalance).toBe(initialBalance + amountToDeposit);
    });

    test('does not change balance when balance >= 5000', () => {
        // Setup
        const initialBalance = 5000;
        account.balance = initialBalance;

        // Exercise
        account.deposit(10);

        // Assert
        const updatedBalance = account.getBalance();
        expect(updatedBalance).toBe(initialBalance);
    });
});

describe('withdraw()', () => {
    test('subtracts from the balance', () => {
        const initialBalance = account.getBalance();
        const amountToWithdraw = 10;
    
        account.withdraw(amountToWithdraw);
    
        const updatedBalance = account.getBalance();
        expect(updatedBalance).toBe(initialBalance - amountToWithdraw);
    });

    test('does not change balance when balance <= 0', () => {
        const initialBalance = 0;
        account.balance = initialBalance;

        account.withdraw(10);

        const updatedBalance = account.getBalance();
        expect(updatedBalance).toBe(initialBalance);
    })
});
