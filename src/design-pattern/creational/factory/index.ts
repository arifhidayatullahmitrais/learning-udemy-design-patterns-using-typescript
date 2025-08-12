abstract class Car {
  model: string
  productionYear: number

  constructor(model: string, productionYear: number) {
    this.model = model
    this.productionYear = productionYear
  }

  // constructor(public model: string, public productionYear: number) {}
  // shorthand create public property of model & productionYear, result same code at compiling

  abstract displayCarInfo(): void
}

class Sedan extends Car {
  public displayCarInfo(): void {
    console.log(`This is a Sedan. Model: ${this.model}, Production Year: ${this.productionYear}`)
  }
}

class SUV extends Car {
  public displayCarInfo(): void {
    console.log(`This is a SUV. Model: ${this.model}, Production Year: ${this.productionYear}`)
  }
}

class Hatchback extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a Hatchback. Model: ${this.model}, Production Year: ${this.productionYear}`
    )
  }
}

type CarType = 'sedan' | 'suv' | 'hatchback'

class CarFactory {
  public createCar(type: CarType, model: string, productionYear: number) {
    switch (type) {
      case 'sedan':
        return new Sedan(model, productionYear)
      case 'suv':
        return new SUV(model, productionYear)
      case 'hatchback':
        return new Hatchback(model, productionYear)
      default:
        throw new Error(`Invalid car type ${type}`)
    }
  }
}

const carFactory = new CarFactory()

const sedan = carFactory.createCar('sedan', 'Camry', 2023)
sedan.displayCarInfo()

const suv = carFactory.createCar('suv', 'RAV4', 2023)
suv.displayCarInfo()

const hatchback = carFactory.createCar('hatchback', 'Corolla', 2023)
hatchback.displayCarInfo()
