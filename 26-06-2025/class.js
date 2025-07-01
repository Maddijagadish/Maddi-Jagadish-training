class BankAcc{
    constructor(name,amount,pin){
        this.name=name;
        this.balance=amount;
        this.pin=pin;
        this.accNumber=Math.floor(Math.random()*800000+100000)
    }

    deposit(amount){
        if(amount>0){
            this.balance+=amount;
            console.log(`deposited amount ${this.amount}.New balance is ${this.balance}`)
        }
        else{
            console.log("deposit amount greater than 0")
        }
    }

    withdraw(amount){
        if(amount>0 && amount<=this.balance){
            this.balance-=amount
            console.log(`withdraw amount is ${this.amount}.NEw balance is ${this.balance}.`)

        }
        else{
            console.log("insufficient balance")
        }
    }
    getAllDetails(pin){
        if(pin==this.pin){
            console.log(`name is ${this.name},Balance is ${this.balance},Account Number is ${this.accNumber}`)

        }else{
            console.log(`Invalid pin .Enter the correct pin`)
        }
    }

}

let customer1= new BankAcc("jagadish",20500,2345)
customer1.getAllDetails(2345)