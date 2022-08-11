import "./App.css";
import { useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [fontSize, setfontSize] = useState("");
  const [fontWeight, setFontWeight] = useState("");
  const [padding, setPadding] = useState("");
  const [borderRadius, setBorderRadius] = useState("");

  const onChangeBackgroundColor = (e) => {
    setBackgroundColor(e.target.value);
  };
  const onChangeFontColor = (e) => {
    setFontColor(e.target.value);
  };
  const onChangeFontSize = (e) => {
    setfontSize(e.target.value);
  };
  const onChangeFontWeight = (e) => {
    setFontWeight(e.target.value);
  };
  const onChangePadding = (e) => {
    setPadding(e.target.value);
  };
  const onChangeBorderRadius = (e) => {
    setBorderRadius(e.target.value);
  };

  const resetButton = () => {
    setBackgroundColor("");
    setBorderRadius("");
    setFontColor("");
    setFontWeight("");
    setPadding("");
    setfontSize("");
  };

  return (
    <div className="button-maker-bg-container p-4">
      <h1 className="button-maker-heading text-center mb-4">Button Maker</h1>
      <div className="button-maker-container bg-light pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
              <p className="input-label">BACKGROUND COLOR</p>
              <input
                id="bgColorInput"
                className="user-input"
                type="text"
                value={backgroundColor}
                onChange={onChangeBackgroundColor}
              />
              <p className="input-label">FONT COLOR</p>
              <input
                id="fontColorInput"
                className="user-input"
                type="text"
                value={fontColor}
                onChange={onChangeFontColor}
              />
              <p className="input-label">FONT SIZE (in px)</p>
              <input
                id="fontSizeInput"
                className="user-input"
                type="text"
                value={fontSize}
                onChange={onChangeFontSize}
              />
              <p className="input-label">FONT WEIGHT</p>
              <input
                id="fontWeightInput"
                className="user-input"
                type="text"
                value={fontWeight}
                onChange={onChangeFontWeight}
              />
              <p className="input-label">PADDING (in px)</p>
              <input
                id="paddingInput"
                className="user-input"
                type="text"
                value={padding}
                onChange={onChangePadding}
              />
              <p className="input-label">BORDER RADIUS (in px)</p>
              <input
                id="borderRadiusInput"
                className="user-input"
                type="text"
                value={borderRadius}
                onChange={onChangeBorderRadius}
              />
              <div className="text-right mt-4">
                <button
                  id="applyButton"
                  className="btn btn-primary"
                  onClick={resetButton}
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="col-12 col-md-5 mt-4 text-center">
              <button
                type="button"
                id="customButton"
                className="custom-button"
                style={{
                  borderRadius: borderRadius,
                  backgroundColor: backgroundColor,
                  fontSize: fontSize,
                  color: fontColor,
                  padding: padding,
                  fontWeight: fontWeight,
                }}
              >
                Custom Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
