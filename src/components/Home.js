const Home = () => {
    let name = "Rahim";
    const handleClick = () => {
        name = "Karim";
        console.log(name);
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