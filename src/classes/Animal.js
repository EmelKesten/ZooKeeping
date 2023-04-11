class Animal {
    constructor(name, age, gender, species) {
        let _name = name;
        let _age = age;
        let _gender = gender;
        let _species = species;
        let _hunger = 5;
        this.getName = () => _name;
        this.getAge = () => _age;
        this.getGender = () => _gender;
        this.getSpecies = () => _species;
        this.getHunger = () => _hunger;
        this.eat = () => _hunger--;
        this.sleep = () => _hunger++;
    }
    get name() {
        return this.getName();
    }
    get age() {
        return this.getAge();
    }
    get gender() {
        return this.getGender();
    }
    get species() {
        return this.getSpecies();
    }
    get hunger() {
        return this.getHunger();
    }
    makeSound() {
        console.log('Sound!');
    }
    sleep() {
        this.sleep();
        return 'Zzz';
    }
}

export default Animal;
