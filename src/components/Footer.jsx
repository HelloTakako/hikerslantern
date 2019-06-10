  const element = (
    <footer>
      <div className="footer_navi">
        <ul className="clearfix">
          <li><a href="index.html">Home</a></li>
          <li><a href="category.html">Category</a></li>
          <li><a href="staffs_blog.html">Staffs' Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="about.html">About</a></li>
        </ul>
      </div>

      <div className="footer_sns">
        <ul className="footer_sns_link clearfix">
          <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-youtube"></i></a></li>
        </ul>
      </div>
      <small>2019 &copy; Hello_Takako</small>
    </footer>
  );
  
  ReactDOM.render(
    element,
    document.getElementById('footer')
  );