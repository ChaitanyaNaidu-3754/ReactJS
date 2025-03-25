import React, { useState } from "react";

function Bgchanger() {
  const [bgcolor, setbgcolor] = useState("#000000");
  const [colorType, setcolorType] = useState("hex");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function generateHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    return hexColor;
  }

  function generateRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    return `(${r},${g},${b})`; 
  }

  // useEffect(() => {
  //   setbgcolor(colorType === "rgb" ? generateRgbColor() : generateHexColor());
  // }, [colorType]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: bgcolor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={() => { setcolorType("hex"); setbgcolor(generateHexColor()); }}>
        Hex bg color
      </button>
      <button onClick={() => { setcolorType("rgb"); setbgcolor(generateRgbColor()); }}>
        RGB bg color
      </button>
      <button onClick={() => setbgcolor(colorType === "hex" ? generateHexColor() : generateRgbColor())}>
        Random bg color
      </button>
      <h1>{colorType.toUpperCase()}: {bgcolor}</h1> 
    </div>
  );
}

export default Bgchanger;
