import React from "react";

const SubHeader = ({ activeHeader, setActiveSubHeader }) => {
  const subHeaders = {
    Food: ["Pizza Area"],
    Maths: ["Basic", "Scientific"],
    Physics: ["Speed"],
    Body: ["BMI", "GMI"],
  };

  return (
    <div className="sub-header">
      {subHeaders[activeHeader].map((sub) => (
        <button key={sub} onClick={() => setActiveSubHeader(sub)}>
          {sub}
        </button>
      ))}
    </div>
  );
};

export default SubHeader;
