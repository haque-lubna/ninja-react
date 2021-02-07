import {useState} from 'react';

const Home = () => {
    const [name, setName] = useState("Rahim");
    const [age, setAge] = useState(20);

    const handleClick = () => {
        setName("Karim");
        setAge(30);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>ClickMe</button>
        </div>
    );
}
 
export default Home;