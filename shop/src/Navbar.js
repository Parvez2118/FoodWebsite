
function Navbar() {
  return (
    <>
    <nav class="navbar " style={{backgroundColor:"#FFFD8C"}} >
  <div class="container-fluid">
    <a class="navbar-brand">Indian Sweet Shop</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    
    <a class="navbar-brand">Login | Register</a>
    
    
    
  </div>
</nav>

<nav class="navbar navbar-expand-lg " style={{backgroundColor:"#F0B86E"}}>
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="#" >Home</a>
        <a class="nav-link" href="#" >Sweets</a>
        <a class="nav-link" href="#">Snacks</a>
        <a class="nav-link" href="#" >Staples</a>
        <a class="nav-link" href="#" >Shop By State</a>
        <a class="nav-link" href="#">Must Try</a>
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
