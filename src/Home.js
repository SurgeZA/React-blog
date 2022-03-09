const Home = () => {

    const handleClick = (e) => {
        console.log("hi", e );
    }

    const handleClickAgain = (name, e) => {
        console.log("hello" + name , e.target);

    }

    return ( 
        <div className="Home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me </button>
            <button onClick={(e) => handleClickAgain('mario' , e)
            }> Click me again</button>
        </div>

     );
}
 
export default Home;