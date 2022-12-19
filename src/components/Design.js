import '../styles/components/Diseña.scss';

const Design = (prop) => {
  const handleChange = (event) => {
    prop.handleInput(event.target.value, event.target.name);
    console.log(event.target.name);
  };

  const renderDesign = () => {
    if (prop.designIsOpen === true) {
      return (
        <section className="largeContainerDesign  js-design">
          <div className="mediumContainerDesign">
            <div className="boxDesignColorsLabel">
              <span className="colorsText">Colores</span>
            </div>
            <div className="colorPalette__container1">
              <input
                id="palette1"
                className="colorPalette__input1 js-palette1"
                type="radio"
                value="1"
                name="palette"
                checked={prop.userpalette === '1'}
                onChange={handleChange}
              />
              <section className="colorsBoxOne">
                <div className="rectangle__a1"></div>
                <div className="rectangle__a2"></div>
                <div className="rectangle__a3"></div>
              </section>
            </div>
          </div>

          <div className="colorPalette__container2">
            <input
              id="palette2"
              className="js-palette2 colorPalette__input2 "
              type="radio"
              value="2"
              name="palette"
              checked={prop.userpalette === '2'}
              onChange={handleChange}
            />
            <section className="colorsBoxTwo">
              <div className="rectangle__b1"></div>
              <div className="rectangle__b2"></div>
              <div className="rectangle__b3"></div>
            </section>
          </div>

          <div className="colorPalette__container3">
            <input
              id="palette3"
              className="js-palette3 colorPalette__input3"
              type="radio"
              value="3"
              name="palette"
              checked={prop.userpalette === '3'}
              onChange={handleChange}
            />
            <section className="colorsBoxThree">
              <div className="rectangle__c1"></div>
              <div className="rectangle__c2"></div>
              <div className="rectangle__c3"></div>
            </section>
          </div>
        </section>
      );
    }
  };

  return (
    <fieldset className="design">
      <div
        className="buttonDesign js-designClick"
        onClick={prop.handleToggleDesign}
      >
        <legend className="buttonDesign__title">
          <i className="fa-solid fa-object-ungroup"></i> Diseña{' '}
        </legend>
        <img
          src={prop.scrollDown}
          className={`buttonDesign__arrow js-arrow-design ${prop.arrowRotateDesign}`}
          alt=""
        />
      </div>
      {renderDesign()}
    </fieldset>
  );
};

export default Design;
