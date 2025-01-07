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
          Accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid enim dolorum impedit consequuntur deleniti pariatur harum
          officiis molestias doloribus nam dolorem, similique quam minus maxime
          fugit magnam fuga accusantium hic? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Libero sequi iure omnis asperiores.
          Reiciendis ut doloribus inventore libero, corporis quo hic quisquam
          similique nostrum nam saepe. Perferendis sequi libero maxime!
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
              <button className="shop-btn">Shop</button>
            </Link>
          </div>
          <div className="category-card">
            <img
              src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
              alt="A ring encrusted with diamonds"
            />
            <h3>Jewelry</h3>
            <Link to="/store">
              <button className="shop-btn">Shop</button>
            </Link>
          </div>
          <div className="category-card">
            <img
              src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
              alt="A women's short sleeve shirt"
            />
            <h3>Women&apos;s wear</h3>
            <Link to="/store">
              <button className="shop-btn">Shop</button>
            </Link>
          </div>
          <div className="category-card">
            <img
              src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
              alt="A curved ultrawide computer monitor"
            />
            <h3>Technology</h3>
            <Link to="/store">
              <button className="shop-btn">Shop</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
