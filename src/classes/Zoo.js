class ZooClass {
  constructor() {
    this.enclosures = [];
    this.zooKeepers = [];
  }
  addEnclosure(enclosure) {
    this.enclosures.push(enclosure);
  }
  addZooKeeper(zooKeeper) {
    this.zooKeepers.push(zooKeeper);
  }
  feedAnimals() {
    this.enclosures.forEach((enclosure) => {
      enclosure.animals.forEach((animal) => {
        animal.eat();
      });
    });
  }
}

const Zoo = new ZooClass();

export default Zoo;
