import React from 'react';
import "./Footer.css"

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='Footer'>


    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2>About</h2>
            <p>Book Warehouse is the best place to store all kinds of book. We have stores located allover Bangladesh  and offer a broad range of books for all tastes, interests, and ages. From cookbooks to religion, children’s educational books to romance, science to history - you will find it in our stores. </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h2>Categories</h2>
            <ul className="footer-links">
              <li><a href=""></a></li>
              <li><a href="">Children</a></li>
              <li><a href="">Adult</a></li>
              <li><a href="">Histry</a></li>
              <li><a href="">War</a></li>
              <li><a href="">Politics</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h2>Quick Links</h2>
            <ul className="footer-links">
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Contribute</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; {year} All Rights Reserved by 
         <a href=""> Book Warehouse</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href=""><i className="fa-brands fa-facebook"></i></a></li>
              <li><a className="twitter" href=""><i className="fa-brands fa-twitter"></i></a></li>
              <li><a className="dribbble" href=""><i className="fa-brands fa-dribbble"></i></a></li>
              <li><a className="linkedin" href=""><i className="fa-brands fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>

        </div>
    );
};

export default Footer;