class BankAccount {
  private _balance: number

  constructor(balance: number) {
    this._balance = balance
  }

  public get balance() {
    return this._balance
  }

  public deposit(amount: number): void {
    if (amount < 0) {
      console.log('Invalid deposit Amount')
      return
    }
    this._balance += amount
  }

  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log('Invalid withdrawal amount')
      return
    }
    if (this._balance - amount < 0) {
      console.log('Insufficient Funds')
      return
    }

    this._balance -= amount
  }
}

const myAccount = new BankAccount(1000)
myAccount.deposit(500)
myAccount.withdraw(200)
console.log('Current balance: ', myAccount.balance)

// Balance is encapsulated and only be access from public method
