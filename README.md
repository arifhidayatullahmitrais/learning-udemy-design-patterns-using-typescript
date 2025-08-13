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
* Dependency Inversion: High-level modules should not depend on low-level modules
  * Both should depend on abstractions
  * Abstractions should not depend on details
  * Details should depend on abstractions

# Design Patterns

## [Creational Design Pattern](https://cloudaffle.com/series/creational-design-patterns/intro-to-creational-design-patterns/)

* Singleton: A creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance
* Prototype: Pattern that allows cloning object, even complex ones, without coupling to their specific classes.
  * All prototype classes have a common interface that makes it possible to copy objects even if their concrete classe are unknown
  * Prototype objects can produce full copies since objects of the same class can access each other's private fields
* Builder: Lets you construct complex object step by step (build object with various combination, long step todo)
* Factory: Provide an interface for creating object in a superclass, but allows subclasses to alter the type of object that will be created
* Abstract Factory: Provides an interface for creating families of related or dependent object without specifying their concrete classes
  * With abstract factory pattern, if we need to add feature it will violate SOLID (open/close principle) and become hard to maintain and modification.

## [Structural Design Patterns](https://cloudaffle.com/series/structural-design-patterns/intro-to-structural-design-patterns/)

## [Behavioral Design Patterns](https://cloudaffle.com/series/behavioral-design-patterns/intro-to-behavioral-design-patterns/)

* Observer: allow you to define or create a subscription mechanism to send notifications to multiple objects about any new events that happens to the object they're observing
  * The object that is being watched is often called the subject.
  * The object that are watching the state changes are called observers or listeners