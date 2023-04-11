import Zoo from "../classes/Zoo";
import ZooKeeper from "../classes/ZooKeeper";

const ZooKeeperForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const age = e.target.age.value;
        const gender = e.target.gender.value;
        Zoo.addZooKeeper(new ZooKeeper(name, age, gender));
        console.log(Zoo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="age">Age</label>
            <input type="number" id="age" />
            <label htmlFor="gender">Gender</label>
            <select id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <button type="submit">Add Zoo Keeper</button>
        </form>
    );
};

export default ZooKeeperForm;