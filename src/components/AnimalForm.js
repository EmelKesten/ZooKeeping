import Giraffe from "../classes/animals/Giraffe";
import Lion from "../classes/animals/Lion";
import Penguin from "../classes/animals/Penguin";
import Tiger from "../classes/animals/Tiger";
import Animal from "../classes/Animal";
import Zoo from "../classes/Zoo";
import { useState } from "react";

const AnimalForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [enclosure, setEnclosure] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let animal;
    switch (type) {
      case "giraffe":
        animal = new Giraffe(name, age, gender, species);
        break;
      case "lion":
        animal = new Lion(name, age, gender, species);
        break;
      case "penguin":
        animal = new Penguin(name, age, gender, species);
        break;
      case "tiger":
        animal = new Tiger(name, age, gender, species);
        break;
      case "other":
        animal = new Animal(name, age, gender, species);
        break;
      default:
        return;
    }
    Zoo.enclosures[enclosure].add(animal);
    console.log(Zoo);
  };
  
  return (
    <form>
      <label htmlFor="type">Type</label>
      <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="giraffe">Giraffe</option>
        <option value="lion">Lion</option>
        <option value="penguin">Penguin</option>
        <option value="tiger">Tiger</option>
        <option value="other">Other</option>
      </select>
      <label htmlFor="enclosure">Enclosure</label>
      <select
        id="enclosure"
        value={enclosure}
        onChange={(e) => setEnclosure(e.target.value)}
      >
        <option value="">Select an enclosure</option>
        {Zoo.enclosures.map((enclosure, index) => {
          return <option value={index}>{enclosure.name}</option>;
        })}
      </select>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="age">Age</label>
      <input
        type="text"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <label htmlFor="gender">Gender</label>
      <input
        type="text"
        id="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="species">Species</label>
      <input
        type="text"
        id="species"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default AnimalForm;
