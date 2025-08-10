interface Observer {
  update(subject: Subject): void
}

interface Subject {
  addObserver(observer: Observer): void
  removeObserver(observer: Observer): void
  notifyObserver(): void
  getState(): number
  setState(state: number): void
}

class ConcreteObserver implements Observer {
  constructor(private id: number) {}
  update(subject: Subject): void {
    console.log(`Observer ${this.id} updated, new state: ${subject.getState()}`)
  }
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = []
  private state: number = 0

  public addObserver(observer: Observer): void {
    const isExists = this.observers.includes(observer)
    if (isExists) {
      return console.log('Observer already exists')
    }

    this.observers.push(observer)
    console.log('Observer Added Successfully')
  }

  public removeObserver(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer)
    if (observerIndex === -1) {
      return console.log('Observer does not exist')
    }
    this.observers.splice(observerIndex, 1)
    console.log('Observer Removed Successfully')
  }

  public notifyObserver(): void {
    this.observers.forEach((observer) => observer.update(this))
  }

  getState(): number {
    return this.state
  }

  setState(state: number): void {
    this.state = state
    console.log('Setting State...')
    this.notifyObserver()
  }
}

const subject = new ConcreteSubject()

const observer1 = new ConcreteObserver(1)
subject.addObserver(observer1)

const observer2 = new ConcreteObserver(2)
subject.addObserver(observer2)

subject.setState(100)
