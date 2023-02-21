import './Footer.css'
export default function Footer (){
    return (
        <>

<div className=" Contact-back py-5">
  <div style={{position: "relative"}} className="container">
  <h3 className="contact">Contacts</h3>
  <p className="mt-4" style={{color:"rgb(95, 117, 117)"}}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
<div className="row">

 <div className="col-lg-4 col-md-4">
<h3 style={{color: "rgb(61, 75, 75)"}}>Lonely</h3>
<p style={{color:"rgb(95,117,117)"}}>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu nodiv</p>
<div style={{color:"rgb(53, 58, 58)"}} >
  <span><i className="fa-brands fa-twitter social-media ml-2"></i></span>
  <span><i className="fa-brands fa-facebook social-media ml-2"></i></span>
  <span><i className="fa-brands fa-instagram social-media ml-2"></i></span>
  <span><i className="fa-brands fa-invision social-media ml-2"></i></span>
</div>
  </div>

  <div className="col-lg-3 col-md-6 mt-4">
    <div className="d-flex align-item-center" >
     <span  style={{fontSize: "35px", color: "rgb(79, 81, 85)"}}><i className="fa-solid fa-location-dot"></i></span>
     <p style={{color:"rgb(95,117,117)"}} className="ml-3 my-1">A108 Adam Street
      New York, NY 535022</p>
    </div>
    <div className="d-flex align-item-center mt-3" >
      <span  style={{fontSize: "35px", color: "rgb(79, 81, 85)"}}><i className="fa-solid fa-square-envelope"></i></span>
      <p style={{color:"rgb(95,117,117)"}} className="ml-3 my-2">info@example.com</p>
     </div>
     <div className="d-flex align-item-center mt-3" >
      <span  style={{fontSize: "35px", color: "rgb(79, 81, 85)"}}><i className="fa-solid fa-mobile-screen-button"></i></span>
      <p style={{color:"rgb(95,117,117)"}} className="ml-3 my-3">+1 5589 55488 55s</p>
     </div>
  </div>

  <div className="col-lg-5 col-md-8 mt-3">
    <form style={{marginTop: "-20px"}}>
      <div className="form-group">
        <label for="exampleFormControlInput1"></label>
        <input type="text " className="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
      </div>
      <div className="form-group">
        <input type="text" class="form-control" placeholder="Your E-mail"/>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Your Subject"/>
      </div>
      <div className="form-group">
        <textarea className="form-control" rows="5" placeholder="Message"></textarea>
      </div>
    <div className="text-center">
    <button style={{borderRadius: "50px"}}className="btn btn-danger" type="submit">Send Message</button>
    </div>
    </form> 
  </div>

</div>
  </div>
</div>
<div className="footer text-center">
 <h6>© Copyright <strong>Lonely</strong>. All Rights Reserved</h6>
 <p>Designed by BootstrapMade</p>
</div>


        </>
    )
}