import React from "react";

const App = () => {
  const onClickButton = () => alert("aaa");

  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>test</h1>
      <p style={contentStyle}>hello</p>
      <button onClick={onClickButton}>button</button>
    </>
  );
};

export default App;
