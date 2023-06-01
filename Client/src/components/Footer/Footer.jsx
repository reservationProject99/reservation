
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <i className="ri-car-line"></i>
                  <span>
                    Rent Car <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
              quam veniam, omnis expedita animi quibusdam obcaecati mollitia?
              Delectus et ad illo recusandae temporibus?
            </p>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ul className="list-unstyled">
                {quickLinks.map((item, index) => (
                  <li key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">123 Zindabazar, Sylhet, Bangladesh</p>
              <p className="office__info">Phone: +0995345875365</p>
              <p className="office__info">Email: muhib5532@gmail.com</p>
              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" className="form-control" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}, Developed by
                Muhibur Rahman. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
