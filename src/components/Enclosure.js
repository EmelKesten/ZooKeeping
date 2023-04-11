import Zoo from "../classes/Zoo";
import { useState, useEffect } from "react";

const Enclosure = ({ name, capacity, animals }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Capacity: {capacity}</p>
      <p>Animals: {animals.animals}</p>
    </div>
  );
};

const EnclosureList = () => {
  const [enclosures, setEnclosures] = useState(Zoo.enclosures)

    useEffect(() => {
        setEnclosures(Zoo.enclosures)
    }, [enclosures])

  return (
    <div>
        <button onClick={() => {
            setEnclosures(Zoo.enclosures)
            console.log(enclosures)
        }}>Refresh</button>
      {
        enclosures.map((enclosure, index) => {
            return (
                <Enclosure
                key={index}
                name={enclosure.name}
                capacity={enclosure.capacity}
                animals={enclosure}
                />
            );
            })
      }
    </div>
  );
};

export default EnclosureList;
