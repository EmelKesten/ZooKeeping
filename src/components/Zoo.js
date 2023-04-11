import EnclosureForm from './EnclosureForm';
import AnimalForm from './AnimalForm';
import ZooKeeperForm from './ZooKeeperForm';
import ZooKeeperList from './ZooKeeper';
import EnclosureList from './Enclosure';

function Zoo() {
  return (
    <div>
      <EnclosureForm />
      <AnimalForm />
      <ZooKeeperForm />
      <EnclosureList />
      <ZooKeeperList />
    </div>
  );
}

export default Zoo;
