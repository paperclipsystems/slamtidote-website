import "../styles/Homepage.css";

function Homepage() {
  return (
    <div className="homepage__container">
      <section className="window__container">
        <div className="subheading__container">
          <div className="subheading">
            Putting the Lit in ethnic, queer and femme Literature (and allies)
          </div>
          <div className="close__button">
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="heading__container">
          <h1>SLAMTIDOTE</h1>
        </div>
        <div className="button__container">
          <button className="join">Join us</button>
          <button className="next__event">Take me to the next event</button>
        </div>
      </section>
      <img className="flower__motif" id="flower__motif__left" src="metallicFlower.png" alt="Metallic Flower"/>
      <img className="flower__motif" id="flower__motif__right" src="metallicFlower.png" alt="Metallic Flower"/>
    </div>
  );
}

export default Homepage;
