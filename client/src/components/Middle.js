import "../css/middle.css";
const img1 = require("../images/spices/blended.png");
const img2= require("../images/spices/pure.png");
const img3 = require("../images/spices/heeng.png");
const img4 = require("../images/spices/sprinkler.png");

function Middle() {
  return (
    <div className="homeProducts__list paddingTop">
        <h2 className="wrapper wrapper--large">Products You Will Love</h2>
    <div className="d-flex homeProducts__link">     
      <div className="col-6 col-xs-12 left relative hover homeProducts">
        <picture>
            <source type="image/png" srcSet={img1} />
            <img
                className="showDiv add_showDiv"
                src={img1}
                alt="Eszychef"
            />
        </picture>
      </div>
      <div className="col-6 col-xs-12 right">
        <div className="showDiv add_showDiv">
          <h2
            style={{ "--bg": "#ffda3a" }}
            className="homeProducts__list__title homeProducts__list__title--orangeBg transition"
          >
            Blended Spices
          </h2>
        </div>

        <p className="showDiv add_showDiv">
          Nothing matches the rich, authentic taste of traditional Indian spice blends. At Quencher, our expertly crafted masalas are made using carefully selected ingredients sourced from India’s finest spice regions—bringing you uncompromised flavor, aroma, color, and purity in every pinch.
        </p>
      </div>
    </div>
    <div className="d-flex homeProducts__link">     
      <div className="col-6 col-xs-12 left relative hover homeProducts">
        <picture>
            <source type="image/png" srcSet={img2} />
            <img
                className="showDiv add_showDiv"
                src={img2}
                alt="Eszychef"
            />
        </picture>
      </div>
      <div className="col-6 col-xs-12 right">
        <div className="showDiv add_showDiv">
          <h2
            style={{ "--bg": "#fd1f1f" }}
            className="homeProducts__list__title homeProducts__list__title--orangeBg transition"
          >
            PURE SPICES
          </h2>
        </div>
        <p className="showDiv add_showDiv">
          Pure spices are the heart of every Indian kitchen, across every region and style of cooking. At Quencher, we bring you spices that stay true to their origin—rich, authentic, and full of natural goodness, just the way they are meant to be.
        </p>
      </div>
    </div>
    <div className="d-flex homeProducts__link">     
      <div className="col-6 col-xs-12 left relative hover homeProducts">
        <picture>
            <source type="image/png" srcSet={img3} />
            <img
                className="showDiv add_showDiv"
                src={img3}
                alt="Eszychef"
            />
        </picture>
      </div>
      <div className="col-6 col-xs-12 right">
        <div className="showDiv add_showDiv">
          <h2
            style={{ "--bg": "#ffcf00" }}
            className="homeProducts__list__title homeProducts__list__title--orangeBg transition"
          >
            ASAFOETIDA (HING)
          </h2>
        </div>

        <p className="showDiv add_showDiv">
          Give your food the perfect ‘hing ka tadka’ with Quencher Hing. Strong, aromatic, and packed with purity, it is made from high-quality ingredients to deliver that signature flavor and consistency in every meal.
        </p>
      </div>
    </div>
    <div className="d-flex homeProducts__link">     
      <div className="col-6 col-xs-12 left relative hover homeProducts">
        <picture>
            <source type="image/png" srcSet={img4} />
            <img
                className="showDiv add_showDiv"
                src={img4}
                alt="Eszychef"
            />
        </picture>
      </div>
      <div className="col-6 col-xs-12 right">
        <div className="showDiv add_showDiv">
          <h2
            style={{ "--bg": "#ff839a" }}
            className="homeProducts__list__title homeProducts__list__title--orangeBg transition"
          >
            Sprinkler Range
          </h2>
        </div>

        <p className="showDiv add_showDiv">
          Add an instant burst of taste to your meals with Quencher’s easy-to-use sprinkler range. Featuring favorites like Kala Namak, Chaat Masala, and Kali Mirch, this collection is perfect for quick seasoning—just sprinkle and enjoy! Whether it’s fruits, salads, snacks, or chaats, bring alive every bite with bold flavors, irresistible aroma, and perfect balance in seconds.
        </p>
      </div>
    </div>
    </div>
  );
}

export default Middle;