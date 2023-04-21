import ProductButton from "../components/ProductButton";

const Homepage = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-container container-img">
          <div className="hero-container-img">
          <div className="hero-container-text">
            <h2>NEW PRODUCT</h2>
            <h1>XX99 Mark II HeadphoneS</h1>
            <p className="text">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <ProductButton name="See Product" classname="btn btn-orange" />
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}
 
export default Homepage;