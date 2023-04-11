class Enclosure {
  constructor(name, capacity) {
    let _name = name;
    let _capacity = capacity;
    let _animals = [];
    this.getCapacity = () => _capacity;
    this.getAnimals = () => _animals;
    this.getName = () => _name;
    this.addAnimal = (animal) => {
      if (_animals.length < _capacity) {
        _animals.push(animal);
        return true;
      }
      return false;
    };
    this.removeAnimal = (animal) => {
      let index = _animals.indexOf(animal);
      if (index !== -1) {
        _animals.splice(index, 1);
        return true;
      }
      return false;
    };
  }
    get name() {
    return this.getName();
    }
  get capacity() {
    return this.getCapacity();
  }
  get animals() {
    return this.getAnimals();
  }
  add(animal) {
    return this.addAnimal(animal);
  }
  remove(animal) {
    return this.removeAnimal(animal);
  }
}

export default Enclosure;
