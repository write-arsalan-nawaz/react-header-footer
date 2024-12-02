import React from "react";

const Header = ({ setActiveHeader }) => {
  const headers = ["Food", "Maths", "Physics", "Body"];

  return (
    <header>
      {headers.map((header) => (
        <button key={header} onClick={() => setActiveHeader(header)}>
          {header}
        </button>
      ))}
    </header>
  );
};

export default Header;
