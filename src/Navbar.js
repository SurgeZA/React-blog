const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Scotts Blog</h1>
            <div className="links">
                <a href="/">Home</a><br></br>
                <a href="/">New Blog</a><br></br>
                <a href="/create" style={{
                    color: "white",
                    backgrounColor:'#f1356d',
                    borderRadius: "8px",

                }}>Home</a><br></br>
            </div>
        </nav>
     );
}
 
export default Navbar;