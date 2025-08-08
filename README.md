# [OOP](https://cloudaffle.com/series/object-oriented-typescript/introduction-to-oop/)

Object-oriented programming is a programming paradigm that uses the concept of objects as a way to structure and organize code.

* Abstraction is the process of simplifying system by breaking the down into smaller, more manageable components.
* Encapsulation promotes the separation of concerns and data hiding, making it easier to reason about, maintain, and reuse code.
* Polymorphism is a fundamental concept that allows objects of different classes to be treated as objects of a common superclass
* Inheritance help create new class from existing class (base class) while maintaining the existing class behaviour and extending or overriding it to add new functionality

# [SOLID Principles](https://cloudaffle.com/series/solid-design-principles/what-is-solid/)

* Single Responsibility: A class should have only one reason to change
* Open Close: (class, module, function, etc.) Should be open for extension, but closed for modification.
* Liskov Substitution: If S is a subtype of T, then objects of type T maybe replaced with object of type S
  * (On my understanding of the code example its implementation of polymorphism)
  * Result from asking AI: Is close related as: Polymorphism is How, while Liskov substitution is When and Why
* Interface Segregation: No client should be forced to depend on interfaces they do not use.
* Dependency Inversion: High -level modules should not depend on low-level modules
  * Both should depend on abstractions
  * Abstractions should not depend on details
  * Details should depend on abstractions

# Design Patterns

## [Creational Design Pattern](https://cloudaffle.com/series/creational-design-patterns/intro-to-creational-design-patterns/)

* Singleton: A creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance
