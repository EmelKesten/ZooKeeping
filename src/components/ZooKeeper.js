import Zoo from "../classes/Zoo";
import { useState, useEffect } from "react";

const ZooKeeper = ({ ZooKeeper }) => {
  return (
    <div>
      <h3>{ZooKeeper.name}</h3>
      <table>
        <thead>
          <tr>
            <th>Enclosure Name</th>
            <th>Capacity</th>
            <th>Animals</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ZooKeeper.enclosures.map((enclosure, index) => {
            return (
              <tr key={index}>
                <td>{enclosure.name}</td>
                <td>{enclosure.capacity}</td>
                <td>{enclosure.animals.length}</td>
                <td>
                  <button
                    onClick={() => {
                      ZooKeeper.cleanEnclosure();
                      console.log(ZooKeeper);
                    }}
                  >
                    Clean
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const ZooKeeperList = () => {
  const [ZooKeepers, setZooKeepers] = useState(Zoo.zooKeepers);

  useEffect(() => {
    setZooKeepers(Zoo.zooKeepers);
  }, [ZooKeepers]);

  return (
    <div>
      <button
        onClick={() => {
          setZooKeepers(Zoo.zooKeepers);
          console.log(ZooKeepers);
        }}
      >
        Refresh
      </button>
      {ZooKeepers.map((zooKeeper, index) => {
        return <ZooKeeper key={index} ZooKeeper={zooKeeper} />;
      })}
    </div>
  );
};

export default ZooKeeperList;
