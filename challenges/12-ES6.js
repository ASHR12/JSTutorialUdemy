class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  bank = "HSBC";
  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

const robin = new Account("robin", 1000);
console.log(robin);
console.log(robin.initialBalance);
robin.deposit(500);

const zee = new Account("zee", 0);
console.log(zee);
console.log(zee.bank);
zee.deposit(2000);
