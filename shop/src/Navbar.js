
function Navbar() {
  return (
    <>
    <nav class="navbar " style={{backgroundColor:"#FFF9B0"}} >
  <div class="container-fluid">
    <a class="navbar-brand"   style={{fontFamily:"'Dancing Script', cursive", fontSize:40+"px",color:"#42032C"}}>RajKishor Sweet Shop</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn " type="submit">Search</button>
    </form>
    
    <a class="navbar-brand">Login | Register</a>
    
    
    
  </div>
</nav>

<nav class="navbar navbar-expand-lg " style={{backgroundColor:"#E38B29",color:"red", fontFamily: "Microsoft Sans Serif", fontSize:"medium", fontWeight: "light"}}>
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    {/* style={{color:"#42032C",marginRight:20+"px"}} */}
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav"  >
        <a class="nav-link nav1 nav2 " href="#" >Home</a>
        <a class="nav-link nav1 nav2" href="#" >Sweets</a> 
        <a class="nav-link nav1 nav2" href="#" >Sweets</a> 
        <a class="nav-link nav1 nav2" href="#">Snacks</a>
        <a class="nav-link nav1 nav2" href="#" >Staples</a>
        <a class="nav-link nav1 nav2" href="#">Shop By State</a>
        <a class="nav-link nav1 nav2" href="#">Must Try</a>
        {/* <a class="nav-link" href="#" style={{marginRight:105+"px"}}>Login</a>
        <a class="nav-link" href="#" style={{marginRight:105+"px"}}>Login | Register</a> */}
      </div>
    </div>
  </div>
</nav>








    </>
  );
}

export default Navbar;
