namespace BuilderPattern {
  interface Customer {
    email: string
    firstName: string
    lastName: string
    phoneNumber: string
  }

  interface CustomerBuilder {
    setEmail(email: string): CustomerBuilder
    setFirstName(firstName: string): CustomerBuilder
    setLastName(lastName: string): CustomerBuilder
    setPhoneNumber(email: string): CustomerBuilder
    build(): Customer
  }

  class ConcreteCustomer implements Customer {
    constructor(
      public email: string,
      public firstName: string,
      public lastName: string,
      public phoneNumber: string
    ) {}
  }

  class ConcreteCustomerBuilder implements CustomerBuilder {
    private firstName: string = ''
    private lastName: string = ''
    private email: string = ''
    private phoneNumber: string = ''

    setEmail(email: string): CustomerBuilder {
      this.email = email
      return this
    }

    setFirstName(firstName: string): CustomerBuilder {
      this.firstName = firstName
      return this
    }

    setLastName(lastName: string): CustomerBuilder {
      this.lastName = lastName
      return this
    }

    setPhoneNumber(phoneNumber: string): CustomerBuilder {
      this.phoneNumber = phoneNumber
      return this
    }

    build(): Customer {
      return new ConcreteCustomer(this.email, this.firstName, this.lastName, this.phoneNumber)
    }
  }

  class CustomerDirector {
    constructor(private builder: CustomerBuilder) {}

    public buildMinimalCustomer(email: string, firstName: string, lastName: string) {
      return this.builder.setEmail(email).setFirstName(firstName).setLastName(lastName).build()
    }
  }

  const builder: CustomerBuilder = new ConcreteCustomerBuilder()
  const director: CustomerDirector = new CustomerDirector(builder)

  const customer: Customer = director.buildMinimalCustomer('John', 'Doe', 'john.doe@example.com')
  console.log(customer)
}
