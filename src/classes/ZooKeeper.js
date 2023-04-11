class ZooKeeper {
  constructor(name, age, gender, enclosure) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.enclosure = enclosure;
  }
  feedAnimals() {
    this.enclosure.animals.forEach((animal) => {
      animal.eat();
    });
  }
  cleanEnclosure() {
    this.enclosure.animals.forEach((animal) => {
      animal.sleep();
    });
  }
}

export default ZooKeeper;
