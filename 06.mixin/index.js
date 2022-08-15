class Dog {
  constructor(name) {
    this.name = name;
  }
}

const dogFunctionality = {
  bark: () => console.log('Woof'),
  wagTail: () => console.log('Wagging my tail'),
  play: () => console.log('Playing!')
};

Object.assign(Dog.prototype, dogFunctionality);

const myPet = new Dog('Daisy');

myPet.bark();
myPet.play();
