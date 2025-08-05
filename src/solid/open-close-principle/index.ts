interface Customer {
  giveDiscount(): number
}

class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20
  }
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10
  }
}

class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount()
  }
}

const premiumCustomer = new PremiumCustomer()
const regularCustomer = new RegularCustomer()

const discount = new Discount()

const premiumResult = discount.giveDiscount(premiumCustomer)
console.log('premium discount: ', premiumResult)

const regularResult = discount.giveDiscount(regularCustomer)
console.log('regular discount: ', regularResult)

// Everytime new customer type there is no need to change Discount class
