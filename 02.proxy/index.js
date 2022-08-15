const person = {
  name: 'Jiwoo Hong',
  age: 27,
  nationality: 'Korean'
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obb[prop]) {
      console.log(`This property doesn't exist`);
    } else {
      console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
    }
  },
  set: (obj, prop, value) => {
    if (prop === 'age' && typeof value !== 'number') {
      console.log(`Sorry, you can only pass numeric values for age.`);
      return;
    } else if (prop === 'name' && value.length < 2) {
      console.log('You need to provide a valid name.');
      return;
    }
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    Reflect.set(obj, prop, value);

    return true;
  }
});

personProxy.name;
personProxy.age = 19;
