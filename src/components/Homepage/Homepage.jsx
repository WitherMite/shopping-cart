import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-image.png";

export default function Homepage() {
  return (
    <>
      <header className="homepage-hero">
        <div className="hero-image">
          <img src={heroImage} alt="" />
          <a href="https://www.freepik.com/free-photo/beauty-fashion-concept-full-length-young-woman-sticking-head-inside-purse-searching-somet_40245224.htm#fromView=search&page=1&position=49&uuid=782d1c21-379a-4328-b57e-dd88b5fb1745&new_detail=true">
            Image by benzoix on Freepik
          </a>
        </div>
        <h1>Welcome to my store!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cumque
          porro minima debitis a quis aliquid quidem. Ipsa voluptas tenetur
          earum? Et a rem, nulla adipisci totam similique tempore. Sequi fuga
          quidem veniam quia voluptate! Maiores magni dicta deserunt et rem
          perferendis, eaque recusandae culpa obcaecati id quam, velit labore.
          Accusantium.
        </p>
      </header>
      <section className="homepage-content">
        <h2>Shop our selection:</h2>
        <div className="categories">
          <div className="category-card">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              alt="A men's T-shirt"
            />
            <h3>Men&apos;s wear</h3>
            <Link to="/store">
              <button>Shop</button>
            </Link>
          </div>
          <div className="category-card">
            <img
              src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
              alt="A diamond ring"
            />
            <h3>Jewelry</h3>
            <Link to="/store">
              <button>Shop</button>
            </Link>
          </div>
          <div className="category-card">
            <img
              src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
              alt="A women's short sleeve shirt"
            />
            <h3>Women&apos;s wear</h3>
            <Link to="/store">
              <button>Shop</button>
            </Link>
          </div>
          <div className="category-card">
            <img
              src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
              alt="A curved ultrawide computer monitor"
            />
            <h3>Technology</h3>
            <Link to="/store">
              <button>Shop</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="homepage-information">
        <address>
          <h3>Location</h3>
          <p>
            1234 Fake St. <br />
            Imaginary, Montana 45554
          </p>
          <p>102-938-4756</p>
          <p>example.email@gmail.com</p>
        </address>
        <div className="about">
          <h3>About</h3>
          <p>Our Story</p>
          <p>FAQ</p>
        </div>
        <div className="support">
          <h3>Support</h3>
          <p>Contact Us</p>
          <p>Help Center</p>
          <p>Careers</p>
        </div>
      </section>
    </>
  );
}
