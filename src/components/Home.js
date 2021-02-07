import {useState} from 'react';

const Home = () => {
    const [name, setName] = useState("Rahim");
    const handleClick = () => {
        setName("Karim");
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>ClickMe</button>
        </div>
    );
}
 
export default Home;