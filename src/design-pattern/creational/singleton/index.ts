class Singleton {
  private static instance: Singleton
  private static _value: number

  private constructor() {}

  public static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }

  set value(value: number) {
    Singleton._value = value
  }

  get value() {
    return Singleton._value
  }
}

let instance1 = Singleton.getInstance()
let instance2 = Singleton.getInstance()
instance1.value = 10
console.log(instance1.value)
console.log(instance2.value)
console.log(instance1 === instance2)

// Static keyword make it accessible without creating new instance
// New keyword can't be used as contractor is private (new Singleton())
// This make sure only once instance live in the runtime
