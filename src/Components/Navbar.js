import './Navbar.css'

export default function Navbar() {
    return (
        <>
        <section>
       <div className="d-flex align-items-center my_img">
        <div className=" text-white m-auto">
            <h1 className="col-12 sec-h1">Hi, I'm Alice!</h1>
            <p  className="h3 col-12 sec-p ">I am a graphic designer</p>
            <div style={{textAlign: "center"}}>
              <i style={{fontSize: "50px", color: "rgb(252, 243, 243)"}} className="fa-solid fa-angles-down mx-auto "></i>
            </div>
           
        </div>
       </div>
   </section>

   <header id="nav-border" className="bg-light navheader mb-5">
    <nav className="container navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand logo" href="#">LONELY</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >About <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Resume</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Portfollio</a>
          </li>
          <li class="nav-item active dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a class="dropdown-item" href="#">Drop down 1</a>
              <a class="dropdown-item" href="#">Deep Drop down </a>
              <a class="dropdown-item" href="#">Drop down 2</a>
              <a class="dropdown-item" href="#">Drop down 3</a>
              <a class="dropdown-item" href="#">Drop down 4</a>
            </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>


        </>
    )
}