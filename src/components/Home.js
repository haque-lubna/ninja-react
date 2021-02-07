const Home = () => {
    const handleClick = (event) => {
        console.log("Clicked Home button", event);
    }

    const handleClickAgain= (name, event) => {
        console.log('Hello ' + name, event.target);
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>ClickMe</button>
            <button onClick={(event) => handleClickAgain("Rahim", event) }>ClickMe Again</button>
        </div>
    );
}
 
export default Home;