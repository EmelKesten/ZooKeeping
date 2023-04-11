import Zoo from "../classes/Zoo";
import Enclosure from "../classes/Enclosure";

const EnclosureForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const capacity = e.target.capacity.value;
    const enclosure = new Enclosure(name, capacity);
    Zoo.addEnclosure(enclosure);
    console.log(Zoo);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <label htmlFor="capacity">Capacity</label>
      <input type="number" id="capacity" />
      <button type="submit">Add Enclosure</button>
    </form>
  );
};

export default EnclosureForm;
