class Animal {
  constructor(public name: string) {}

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters`)
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }

  // Override
  move(distance: number): void {
    console.log(`${this.name} jump ${distance} meters`)
  }

  // Adding behaviour
  talk() {
    console.log(`${this.name} have meow sound`)
  }
}

const dog = new Dog('Doggy')
dog.move(5)

const cat = new Cat('Catty')
cat.move(5)
cat.talk()
